


//代理
function watch(obj, name) {
    // 使用WeakMap存储原始对象到代理的映射，避免重复代理
    const proxyMap = new WeakMap();

    // 内部标记，用于避免代理内部操作触发循环
    const IS_INTERNAL_PROXY_OPERATION = Symbol("isInternalProxyOperation");

    return new Proxy(obj, {
        get: function (target, property, receiver) {
            // 如果是内部操作（比如代理自身在访问属性），则不打印日志
            if (property === IS_INTERNAL_PROXY_OPERATION) {
                return true;
            }

            const value = Reflect.get(target, property, receiver);

            try {
                // 判断属性是否在对象自身或原型链上定义
                const hasOwnOrProto = Object.prototype.hasOwnProperty.call(target, property) ||
                                     Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(target), property);

                // 获取属性描述符
                const descriptor = Object.getOwnPropertyDescriptor(target, property);
                let descriptorInfo = '无描述符';
                if (descriptor) {
                    descriptorInfo = JSON.stringify(descriptor, (key, val) => {
                        // 对于函数类型的get/set，只保留一小段字符串
                        if (typeof val === 'function' && (key === 'get' || key === 'set')) {
                            return val.toString().substring(0, 50) + '...';
                        }
                        return val;
                    });
                }

                // 只有当属性未定义，或者你在关注所有读取时才打印
                // 这里我们假设你主要关注 'undefined' 的情况，并进行了简化
                if (value === undefined && !hasOwnOrProto) { // 仅当属性在对象自身和原型链上都不存在时
                    let valueToString = 'N/A';
                    if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
                        try {
                            valueToString = value.toString();
                        } catch (e) {
                            valueToString = `toString() error: ${e.message}`;
                        }
                    } else if (value !== undefined) { // 对于非 undefined 的原始类型，直接转字符串
                        valueToString = String(value);
                    }

                    console.log(`[GET] ${name}.${String(property)}: ` +
                                `值=${String(value)} (${typeof value}), ` +
                                `补原型链=${!hasOwnOrProto}, ` +
                                `值toString='${valueToString}', ` +
                                `描述符=${descriptorInfo}`);
                }
            } catch (e) {
                // 捕获日志打印过程中的错误，不影响主逻辑
                console.error(`Error logging GET for ${name}.${String(property)}:`, e);
            }

            // 如果获取到的是对象或函数，且之前未代理过，则对其进行嵌套代理
            if ((typeof value === 'object' && value !== null) || typeof value === 'function') {
                if (!proxyMap.has(value)) {
                    const nestedProxy = watch(value, `${name}.${String(property)}`);
                    proxyMap.set(value, nestedProxy);
                    return nestedProxy;
                }
                return proxyMap.get(value);
            }

            return value;
        },
        set: (target, property, newValue, receiver) => {
            // 如果是内部操作，则不打印日志
            if (property === IS_INTERNAL_PROXY_OPERATION) {
                return Reflect.set(target, property, newValue, receiver);
            }

            try {
                const oldValue = Reflect.get(target, property, receiver);

                // 判断属性是否在对象自身或原型链上定义
                const hasOwnOrProto = Object.prototype.hasOwnProperty.call(target, property) ||
                                     Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(target), property);

                // 获取属性描述符
                const descriptor = Object.getOwnPropertyDescriptor(target, property);
                let descriptorInfo = '无描述符';
                if (descriptor) {
                    descriptorInfo = JSON.stringify(descriptor, (key, val) => {
                        if (typeof val === 'function' && (key === 'get' || key === 'set')) {
                            return val.toString().substring(0, 50) + '...';
                        }
                        return val;
                    });
                }

                let newValueDisplay = String(newValue);
                if (newValueDisplay.length > 100) { // 截断过长的字符串以保持日志可读性
                    newValueDisplay = newValueDisplay.substring(0, 100) + '... (truncated)';
                }

                console.log(`[SET] ${name}.${String(property)}: ` +
                            `旧值=${String(oldValue)} (${typeof oldValue}), ` +
                            `新值=${newValueDisplay} (${typeof newValue}), ` +
                            `补原型链=${!hasOwnOrProto}, ` +
                            `描述符=${descriptorInfo}`);

            } catch (e) {
                console.error(`Error logging SET for ${name}.${String(property)}:`, e);
            }

            return Reflect.set(target, property, newValue, receiver);
        },
        // 也可以考虑拦截 deleteProperty, defineProperty 等操作
        defineProperty(target, property, descriptor) {
            console.log(`[DEFINE] ${name}.${String(property)}: 定义描述符=${JSON.stringify(descriptor)}`);
            return Reflect.defineProperty(target, property, descriptor);
        },
        deleteProperty(target, property) {
            console.log(`[DELETE] ${name}.${String(property)}`);
            return Reflect.deleteProperty(target, property);
        }
    });
}

function Window() {

}
window = global;
window.requestAnimationFrame = function () {
    return 'function requestAnimationFrame() { [native code] }'
}
window.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

Object.setPrototypeOf(window, Window.prototype)
window.onwheelx = {
    "_Ax": "0X21"
}
function Screen() {
    this.availHeight = 912;
    this.availLeft = 0;
    this.availTop = 0;
    this.availWidth = 1440;
    this.colorDepth = 24;
    this.height = 960;
    this.isExtended = false;
    this.onchange = null;
    this.orientation = {
      angle: 0,
      type: 'landscape-primary',
      onchange: null
    };
    this.pixelDepth = 24;
    this.width = 1440;
}
window.screen = watch(new Screen(), "screen");
window.outerWidth = 1440
window.outerHeight = 912
window.innerWidth = 1432
window.innerHeight = 149
window.EventSource = function (args) {
    console.log("====>  window.EventSource里面参数为：", args)
}
window = watch(window, "window");

body = {}


document = {}
documentElement = {
    toJSON: function (args) {
        console.log("documentElement.toJSON ====>", args)
    },
}
document.documentElement = watch(documentElement, "documentElement")
span = {
    classList: function (arg) {
        console.log("span.classList ====>", arg)
    }
}
document.createElement = function (args) {
    console.log("====>  createElement里面参数为：", args)
     if (args === 'span'){
        return watch(span, "span")
    }
}
document.createEvent = function (args) {
    console.log("====>  createEvent里面参数为：", args)
}

document = watch(document, "document");


function Location() {

}
Location.prototype = {
    "ancestorOrigins": {},
    "href": "https://www.douyin.com/jingxuan/film",
    "origin": "https://www.douyin.com",
    "protocol": "https:",
    "host": "www.douyin.com",
    "hostname": "www.douyin.com",
    "port": "",
    "pathname": "/jingxuan/film",
    "search": "",
    "hash": ""
}
location = watch(new Location(), "location");

setInterval = function () {};
setTimeout = function () {};

require('./bdms_1.0.1.19_fix')

function a_bogus_get(url) {
    xhr_http = new XMLHttpRequest()
    xhr_http.bdmsInvokeList = [
    {
        "args": [
            "GET",
            url,
            true
        ]
    },
    {
        "args": [
            "Accept",
            "application/json, text/javascript"
        ]
    },
    {
        "args": [
            "x-tt-passport-csrf-token",
            "5976dd3bda81c4846352afdd725783e7"
        ]
    },
    {
        "args": [
            "x-tt-passport-trace-id",
            "bc011e58"
        ]
    },
    {
        "args": [
            "x-tt-session-dtrait",
            "d0_huIVt4wzomtzbMepvUWfCdq3vIoLAEzUdCTssMcrK3C6/Darz1sdQWPm3f+bKw48kdfmeWfuVvDUUC79g7pXoDsCjPfErbAa24ce5ESwt5zx18uUvZhsGylT7zniqK8j4Na2mZJ/sLr8Aywf0EJvBCQ10vkXG5WW989hEOtyMmhYpD3B6AFXeOvPAVUHH7dAvNvcLDt7LHbjLWSbuwlKnFx3iJt/vY24N7H3d8FzfnmJsZ1Hsk1BsFEPHAUJ+XC4PSkEUOvR4Jtnw1su4qRMq58z3kEdRC3yaggouUZUkoDHV7ZndtG8O7gky3+Ak2vD56UwXblIvAAzuHvX5Wqpxw==_Eu/CtvGEsEyTu7sbf/3g/t1YDHY5oNg3tovHBdvhXiH5Ua/kHj2gS3eLybuy/q0G/7+ssvyN1u9RUgIVp+nNJ3YrpbwvfROQGdAN+AeiOT84jBml0Bx+z5pJfDqmXphDEeYc0BXBhnCcQfX1OXQlobkoYJjj+n06wyQMRHtGPAGrlAiedbI/YXnu2sa58pYJHtt3z3t6DwXIBgml3rEx+OYSm6Rj8zp8R9KxLdCpVFFdnOFR6Xv5Goff09VZ9XSq9AxFiSM5g7xjW9rcBEHAEHpBxghaWhVy4Q+FRU4Yi6/BuRXJKqtuRXa4DexC1QC+jtzOa+uewtDNY0SaMpgHpK96L3ujk0Uo36YMfCCrtgtMsA8UFLkZ9lP3DjJD8jdfb4Z2WEY/6N8kH/Pl0NxXsPGV7WI3Wh6yOPCQwLYYk/0qz+0MlmbYwgLiZoMBjE1JDoxU3ZeK55eroAottKkVYg=="
        ]
    },
    {
        "args": [
            "bd-ticket-guard-ree-public-key",
            "BNtBAeqhVqC59zApx+qU3cH0BEfJkn3dq3UUNcMB2oDRirCvRbbzW1D/5GIamkjnW4lAYCvZZyFDqiqOQwy8iBs="
        ]
    },
    {
        "args": [
            "bd-ticket-guard-web-version",
            2
        ]
    },
    {
        "args": [
            "bd-ticket-guard-web-sign-type",
            1
        ]
    },
    {
        "args": [
            "bd-ticket-guard-version",
            2
        ]
    },
    {
        "args": [
            "bd-ticket-guard-iteration-version",
            1
        ]
    },
    {
        "args": [
            "bd-ticket-guard-client-data",
            "eyJ0c19zaWduIjoidHMuMi5mMmJiNTIyM2U5MzEwODMwMjJkNDJhNzgxZjk5NTQ0NDU3OTMyMTVkNjlhODE0ZDYzYTg5NWQ5MTAxZTkwNzE2YzRmYmU4N2QyMzE5Y2YwNTMxODYyNGNlZGExNDkxMWNhNDA2ZGVkYmViZWRkYjJlMzBmY2U4ZDRmYTAyNTc1ZCIsInJlcV9jb250ZW50IjoidGlja2V0LHBhdGgsdGltZXN0YW1wIiwicmVxX3NpZ24iOiJSTUdHbTMyM3hVcFV0Ry85TGdiOFl6bkdkUkMyR2g4U3hRNlZGN3BVSW13PSIsInRpbWVzdGFtcCI6MTc1NTMyNzAxOX0="
        ]
    }
]
    watch(xhr_http, "xhr_http")
    aaa = window.ab.apply(xhr_http, {
        "0": null,
    })
    return aaa
}

url = 'https://www.douyin.com/passport/token/beat/web/?passport_jssdk_version=2.4.4&passport_jssdk_type=normal&is_from_ttaccountsdk=1&aid=6383&language=zh&scene=polling&account_sdk_source=web&account_sdk_source_info=7e276d64776172647760466a6b66707777606b667c273f3433292772606761776c736077273f63646976602927666d776a686061776c736077273f63646976602927766d60696961776c736077273f63646976602927756970626c6b76273f302927756077686c76766c6a6b76273f5e7e276b646860273f276b6a716c636c6664716c6a6b762729277671647160273f2775776a68757127785829276c6b6b60774d606c626d71273f34313c29276c6b6b6077526c61716d273f3431363729276a707160774d606c626d71273f3c343729276a70716077526c61716d273f34313135292776716a64776260567164717076273f7e276c6b61607d60614147273f7e276c6167273f276a676f6066712729276a75606b273f2763706b66716c6a6b2729276c6b61607d60614147273f276a676f6066712729274c41474e607c57646b6260273f2763706b66716c6a6b2729276a75606b4164716467647660273f27706b6160636c6b60612729276c7656646364776c273f636469766029276d6476436071666d273f6364697660782927696a66646956716a77646260273f7e276c76567075756a77714956716a77646260273f717770602927766c7f60273f33323c323c292772776c7160273f7177706078292776716a7764626054706a7164567164717076273f7e277076646260273f34303d323137292774706a7164273f3734303732323d3c3637373729276c7655776c73647160273f6364697660787829277260676269273f7e2773606b616a77273f27426a6a626960254c6b662b252d4c6b7160692c27292777606b6160776077273f27444b424940252d4c6b71606929254c6b7160692d572c254c776c762d572c255d6025427764756d6c6676252d357d35353535313344332c25416c77606671364134342573765a305a352575765a305a35292541364134342c277829276b6a716c636c6664716c6a6b556077686c76766c6a6b273f2761606364706971272927756077636a7768646b6660273f7e27716c68604a776c626c6b273f3432303036373032313231353d2b312927707660614f564d606475566c7f60273f343735313c3d34353729276b64736c6264716c6a6b516c686c6b62273f7e276160666a616061476a617c566c7f60273f3435303235323c2927606b71777c517c7560273f276b64736c6264716c6a6b2729276c6b6c716c64716a77517c7560273f276b64736c6264716c6a6b2729276b646860273f276d717175763f2a2a7272722b616a707c6c6b2b666a682a6f6c6b627d70646b27292777606b61607747696a666e6c6b62567164717076273f276b6a6b2867696a666e6c6b62272927766077736077516c686c6b62273f276c6b6b60772971715a6462722966616b286664666d602960616260296a776c626c6b272927627069605671647771273f30323c3329276270696041707764716c6a6b273f363c3478782927776074706076715a6d6a7671273f277272722b616a707c6c6b2b666a68272927776074706076715a7564716d6b646860273f272a6f6c6b627d70646b27292767776a72766077273f7e2771273f2731303336343532373630303234272927676c715a75776a716a666a69273f276364697660272927676c715a6d6069756077273f63646976607878&p_js_v=2.4.4&p_js_t=pro&p_zt=3.3.3&p_ver=1.0.29&request_host=https%253A%252F%252Fwww.douyin.com&p_bd=1.0.1.19-fix.01&biz_trace_id=bc011e58&version=1.2.5&device_platform=web_app'
console.log(a_bogus_get())

