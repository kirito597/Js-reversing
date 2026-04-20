const CryptoJS = require('crypto-js');
delete process

function obj_toString(obj, name) {
  Object.defineProperty(obj, Symbol.toStringTag, {
    value: name,
  });
}


//代理，用于监听当前js代码在执行当中会涉及哪些浏览器对应的dom和bom （补环境）
function watch(obj, name, visited = new WeakSet()) {
    // 防止循环引用导致无限递归
    if (obj === null || typeof obj !== 'object' || visited.has(obj)) {
        return obj;
    }

    visited.add(obj);

    // 检查原型链访问
    const checkPrototypeChain = (target, property) => {
        let current = target;
        while (current) {
            if (Object.prototype.hasOwnProperty.call(current, property)) {
                return false; // 属性直接存在于当前对象上
            }
            current = Object.getPrototypeOf(current);
            if (current && current !== Object.prototype && current !== null) {
                console.log(`原型链检测:true (对象: ${name}, 属性: ${property})`);
                return true;
            }
        }
        return false;
    };

    return new Proxy(obj, {
        get: function (target, property, receiver) {
            try {
                // 排除一些不常见的或可能导致问题的属性
                if (typeof property === 'symbol' || property === 'constructor' || property === '__proto__') {
                    return Reflect.get(target, property, receiver);
                }

                // *** 核心修改：针对 window.navigator.platform 的特殊处理 ***
                if (name === "navigator" && property === "platform") {
                    console.log(`对象 => ${name}, 特殊处理属性: ${String(property)}, 模拟值为: Win32`); // 你可以根据需要修改模拟值
                    return "Win32"; // 直接返回一个你想要的模拟值，绕过原生访问
                }
                // ***************************************************************

                const value = Reflect.get(target, property, receiver);

                // 深度监听嵌套对象
                if (typeof value === 'object' && value !== null) {
                    // 为嵌套对象生成一个更具体的名称
                    const nestedName = `${name}.${String(property)}`;
                    return watch(value, nestedName, visited);
                }

                // 只在值为 undefined 时打印属性访问信息
                if (value === undefined) {
                    console.log(`对象 => ${name}, 读取属性: ${String(property)}, 值为: undefined, 类型为: ${typeof value}`);
                }

                // 检测原型链访问 (无论值是否为undefined，都检测)
                // 如果属性不在 target 上，但通过原型链访问到，则标记为 true
                if (!Object.prototype.hasOwnProperty.call(target, property)) {
                    checkPrototypeChain(target, property);
                }

                // 检测描述符 (无论值是否为undefined，都检测)
                const descriptor = Object.getOwnPropertyDescriptor(target, property);
                if (descriptor) {
                    if (descriptor.get || descriptor.set) {
                        console.log(`特殊检测: 存在Getter/Setter (对象: ${name}, 属性: ${String(property)})`);
                    }
                    if (!descriptor.writable && !descriptor.get) {
                        console.log(`特殊检测: 只读属性 (对象: ${name}, 属性: ${String(property)})`);
                    }
                    if (!descriptor.configurable) {
                        console.log(`特殊检测: 不可配置属性 (对象: ${name}, 属性: ${String(property)})`);
                    }
                }
            } catch (e) {
                console.error(`Error in get trap for ${name}.${String(property)}:`, e);
            }
            return Reflect.get(target, property, receiver);
        },
        set: (target, property, newValue, receiver) => {
            try {
                // set 操作不受 undefined 值限制，依然打印
                console.log(`对象 => ${name}, 设置属性: ${String(property)}, 值为: ${typeof newValue === 'function' ? 'function' : newValue}, 类型为: ${typeof newValue}`);
            } catch (e) {
                console.error(`Error in set trap for ${name}.${String(property)}:`, e);
            }
            return Reflect.set(target, property, newValue, receiver);
        },
        // 捕获 in 操作符
        has: function(target, property) {
            console.log(`对象 => ${name}, in 操作符检测属性: ${String(property)}`);
            return Reflect.has(target, property);
        },
        // 捕获 delete 操作符
        deleteProperty: function(target, property) {
            console.log(`对象 => ${name}, 删除属性: ${String(property)}`);
            return Reflect.deleteProperty(target, property);
        },
        // 捕获 Object.keys(), Object.values(), Object.entries() 等操作
        ownKeys: function(target) {
            console.log(`对象 => ${name}, 获取自身所有键`);
            return Reflect.ownKeys(target);
        },
        // 捕获 Object.defineProperty()
        defineProperty: function(target, property, descriptor) {
            console.log(`对象 => ${name}, 定义属性: ${String(property)}`);
            return Reflect.defineProperty(target, property, descriptor);
        },
        // 捕获 Object.setPrototypeOf()
        setPrototypeOf: function(target, prototype) {
            console.log(`特殊检测: setPrototypeOf 被调用 (对象: ${name})`);
            return Reflect.setPrototypeOf(target, prototype);
        },
        // 捕获 Object.getPrototypeOf()
        getPrototypeOf: function(target) {
            console.log(`特殊检测: getPrototypeOf 被调用 (对象: ${name})`);
            return Reflect.getPrototypeOf(target);
        }
    });
}

//nodejs 环境
// process = watch(process, "process");
// console.log(process);

function Window() {

}

window = global;

//声明一个bom
globalThis = window

globalThis.outerWidth = 1440
globalThis.addEventListener = function (args) {
    console.log("当前globalThis的addEventListener被调用,参数:",args)
}
globalThis.Screen = function (args) {
    console.log("当前globalThis的Screen被调用,参数:",args)
}
globalThis.MouseEvent = function (args) {
    console.log("当前globalThis的MouseEvent被调用,参数:",args)
}
globalThis.TouchEvent = function (args) {
    console.log("当前globalThis的TouchEvent被调用,参数:",args)
}
//Object 内置方法
// globalThis.Object = function (){
//     return 'function Object() { [native code] }'
// }
// globalThis.String = String;
Object.setPrototypeOf(globalThis, Window.prototype)
obj_toString(globalThis, "Window")
globalThis = watch(globalThis, "globalThis");

function HTMLHtmlElement() {
    this.getAttribute = function (args) {
        console.log("当前HTMLHtmlElement的getAttribute被调用,参数:", args)
    }
}

function HTMLBodyElement() {
    this.removeChild = function (args) {
        console.log("当前HTMLBodyElement的removeChild被调用,参数:", args)
    }
}

HTMLBodyElement = function () {
    this.tagName = "BODY"
}
body = watch(new HTMLBodyElement(), "body");

function HTMLDocument() {}

HTMLDocument.prototype.body = body
HTMLDocument.prototype.all = []
HTMLDocument.prototype.documentElement = html
HTMLDocument.prototype.documentMode = undefined

HTMLDocument.prototype.cookie = ''


documentElement = new HTMLHtmlElement();
HTMLDocument.prototype.documentElement = watch(documentElement, "HTMLDocument.documentElement")

//addEventListener 事件
Object.defineProperty(HTMLDocument.prototype, 'addEventListener', {
    enumerable: true, //可枚举
    writable: true, //可写
    configurable: true, //可配置
    value: function addEventListener(tagName) {
        console.log("当前HTMLDocument的addEventListener被调用,参数:", tagName)
    }
})

Object.defineProperty(HTMLDocument.prototype, 'getElementsByTagName', {
    enumerable: true, //可枚举
    writable: true, //可写
    configurable: true, //可配置
    value: function getElemetsByTagName(tagName) {
        console.log("当前HTMLDocument的getElementsByTagName被调用,参数:", tagName)
        if (tagName === '*') {
            return []
        }
    }
})
document = new HTMLDocument();
obj_toString(document, "HTMLDocument")
document = watch(document, "document");

//整个文件的js代码，方便直接赋值
require ('./window_mnsv_code')

function seccore_signv2(e, a) {
    var r = window.toString
      , c = e;
    "[object Object]" === r.call(a) || "[object Array]" === r.call(a) || (void 0 === a ? "undefined" : (0,
    h._)(a)) === "object" && null !== a ? c += JSON.stringify(a) : "string" == typeof a && (c += a);
    console.log(c)
    var d = CryptoJS.MD5([c].join("")).toString()
        //嵌套了jsvmp
      , f = window.mnsv2(c, d)
      , s = {
        "x0": "4.2.5",
        "x1": "xhs-pc-web",
        "x2": "Windows",
        "x3": f,
        "x4": "object"
    }
    return "XYS_" + (0,
    p.xE)((0,
    p.lz)(JSON.stringify(s)))
}

x = '/api/sns/web/v1/homefeed'
f = {
    "cursor_score": "",
    "num": 31,
    "refresh_type": 1,
    "note_index": 25,
    "unread_begin_note_id": "",
    "unread_end_note_id": "",
    "unread_note_count": 0,
    "category": "homefeed.food_v3",
    "search_key": "",
    "need_num": 6,
    "image_formats": [
        "jpg",
        "webp",
        "avif"
    ],
    "need_filter_image": false
}

console.log(seccore_signv2(x, f))