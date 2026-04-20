const CryptoJS = require('crypto-js');

function obj_toString(obj, name) {
  Object.defineProperty(obj, Symbol.toStringTag, {
    value: name,
  });
}

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
                // if (name === "navigator" && property === "platform") {
                //     console.log(`对象 => ${name}, 特殊处理属性: ${String(property)}, 模拟值为: Win32`); // 你可以根据需要修改模拟值
                //     return "Win32"; // 直接返回一个你想要的模拟值，绕过原生访问
                // }
                if (property === 'crypto' || property === 'navigator' || property === 'window') {
                    return target[property];
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

//补window
function Window() {

}
window = globalThis;
window.XMLHttpRequest = function (args) {
    console.log("XMLHttpRequest", args);
}
window.screen = {
    "availHeight": 912,
    "availLeft": 0,
    "availTop": 0,
    "availWidth": 1440,
    "colorDepth": 24,
    "height": 960,
    "isExtended": false,
    "onchange": null,
    "orientation": {
    "angle": 0,
    "type": "landscape-primary",
    "onchange": null
    },
    "pixelDepth": 24,
    "width": 1440
}
window.outerWidth = 1440
window.outerHeight = 912
window.devicePixelRatio = 1.5

//在window上面设置一个额外的prototype
Object.setPrototypeOf(window, Window.prototype);
obj_toString(window, 'Window')
window.PSign = {
    "_token": "tk03waf891ceb18nnf1Ri0Cw7y97HDXSmcaAeUVPf23MBuhKixmvzCvOI2adkAlCZmlnCsdSI3xMLzncenk_jJ04xnTO",
    "_defaultToken": "",
    "_isNormal": true,
    "_appId": "f06cc",
    "_defaultAlgorithm": {},
    "_algos": {},
    "_version": "5.2",
    "_fingerprint": "zmgm3gzmzq3thw69",
    "_debug": false
}
window.PSign.sign = function(params) {
    return params;
}
window = watch(window, 'window');

//补dom
function HTMLHtmlElement() {
    this.getAttribute = function (args) {
        console.log("getAttribute('" + args + "')");
    }
}
documentElement = new HTMLHtmlElement();
function HTMLHeadElement() {
    this.childElementCount = 34
}
head = new HTMLHeadElement();
function HTMLBodyElement() {
    this.childElementCount = 36
}
body = new HTMLBodyElement();
function HTMLDocument() {

}
HTMLDocument.prototype.referrer = 'https://www.jd.com/'
HTMLDocument.prototype.body = watch(body, 'body')
HTMLDocument.prototype.head = watch(head, 'head')
HTMLDocument.prototype.documentElement = watch(documentElement, 'documentElement')
HTMLDocument.prototype.cookie = '__jdu=61636399; shshshfpa=97ff2550-f370-bdf9-2aa4-7c6664485022-1755093710; shshshfpx=97ff2550-f370-bdf9-2aa4-7c6664485022-1755093710; TrackID=16mwX4mx1Q9X5PQLyhJtIh2zeNyIr_-UhoTjERlPVpTlUp7SBbYut3yqXtAzRAOOeCU-hWbaYfc62os5TQ-5bxKtt8KATNtKyynpxybANrnQALWlFeej2-nc_PK_OdAht; pinId=L6KT-LW4t70PdXkxBhKqVw; pin=jd_AEpQAsezGHmt; unick=jd_386e11foylw4s5; _tp=BN6WB3yLybCx55w0m7IaQA%3D%3D; PCSYCityID=CN_510000_511000_0; umc_count=1; ipLoc-djd=22-1988-0-0; mt_xid=V2_52007VwQSVV9fUFIXeRlaVTBRRlcIRFMKHkgFWQJgVA5aCg1QRk9OTAlSY1QUB1RYVGocSBpYGWYKDlFfSVFaFEgQVwRlMxBiXmhRWxlBHFk1ZAQSVA%3D%3D; mail_times=4%2C2%2C1755954530263; qrsc=3; xapieid=jdd03AVDYBQZ4LZEBB2WKPJXTYVVDGSRPGCNO37R6PCTQZSENFJ74RJJEBOSQ2CDHLK5EZREJJ5A5U7FSUJIOIIWGKVY3QEAAAAMY24I3HZQAAAAACXYSHOHFJPV66AX; unpl=JF8EAJZnNSttXUgEUBxRSRRHSl1WW15fQ0QCZ2INUFoISF0FHVdLRkR7XlVdWRRKHh9sZRRXXVNLUw4eBSsSEXteU11bD00VB2xXVgQFDQ8WUUtBSUt-TFhTVloPTR4Fbm4DZG1bS2QFGjIcEhdJWlZWVThKJwRfVzVUX1hMXAErAysTIAkJCFhYCUsSBCJgBVNfX0lcDSsDKxE; __jdv=76161171|baidu-search|t_262767352_baidusearch|cpc|646966787087_0_42ad6bc7f01342f9b094956a2817daee|1755955013063; __jdc=143920055; rkv=1.0; __jda=143920055.61636399.1755093653.1755954575.1755958832.4; shshshfpb=BApXSmcBF1P1ACYtAATdTTZhtFRHfjuH4BhdIMD9p9xJ1MmihgY62; 3AB9D23F7A4B3CSS=jdd03AVDYBQZ4LZEBB2WKPJXTYVVDGSRPGCNO37R6PCTQZSENFJ74RJJEBOSQ2CDHLK5EZREJJ5A5U7FSUJIOIIWGKVY3QEAAAAMY25GWOOAAAAAACTQ3D6CJGL2CHUX; 3AB9D23F7A4B3C9B=AVDYBQZ4LZEBB2WKPJXTYVVDGSRPGCNO37R6PCTQZSENFJ74RJJEBOSQ2CDHLK5EZREJJ5A5U7FSUJIOIIWGKVY3QE'
function HTMLScriptElement() {

}
function CanvasRenderingContext2D() {
    this.direction = "ltr";
    this.fillStyle = "#000000";
    this.filter = "none";
    this.font = "10px sans-serif";
    this.fontKerning = "auto";
    this.fontStretch = "normal";
    this.fontVariantCaps = "normal";
    this.globalAlpha = 1;
    this.globalCompositeOperation = "source-over";
    this.imageSmoothingEnabled = true;
    this.imageSmoothingQuality = "low";
    this.lang = "inherit";
    this.letterSpacing = "0px";
    this.lineCap = "butt";
    this.lineDashOffset = 0;
    this.lineJoin = "miter";
    this.lineWidth = 1;
    this.miterLimit = 10;
    this.shadowBlur = 0;
    this.shadowColor = "rgba(0, 0, 0, 0)";
    this.shadowOffsetX = 0;
    this.shadowOffsetY = 0;
    this.strokeStyle = "#000000";
    this.textAlign = "start";
    this.textBaseline = "alphabetic";
    this.textRendering = "auto";
    this.wordSpacing = "0px";
}
function WebGLRenderingContext() {
    this.drawingBufferColorSpace = "srgb";
    this.drawingBufferFormat = 32856;
    this.drawingBufferHeight = 150;
    this.drawingBufferWidth = 300;
    this.unpackColorSpace = "srgb";
    this.createBuffer = function (args) {
        console.log("createBuffer('" + args + "')");
    }
}
function HTMLCanvasElement() {
    this.height = 150;
    this.width = 300;
    this.getContext = function (args) {
        console.log("getContext('" + args + "')")
        if(args === '2d'){
            d2canvas = watch(new CanvasRenderingContext2D(), '2d');
            return d2canvas;
        }
        if(args === 'webgl'){
            webgl = watch(new WebGLRenderingContext(), 'webgl');
        }
    }
}
canvas = new HTMLCanvasElement();
Object.defineProperty(HTMLDocument.prototype, 'createElement', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: function createElement(tagName) {
        console.log("document.createElement('" + tagName + "')");
        if (tagName === 'script'){
            script = watch(new HTMLScriptElement(), 'script');
            return script;
        }
        if (tagName === 'canvas'){
            canvas = watch(new HTMLCanvasElement(), 'canvas');
            return canvas;
        }
    }
});
Object.defineProperty(HTMLDocument.prototype, 'createEvent', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: function createEvent(tagName) {
        console.log("document.createEvent('" + tagName + "')");
    }
});
Object.defineProperty(HTMLDocument.prototype, 'getElementsByTagName', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: function getElementsByTagName(tagName) {
        console.log("document.getElementsByTagName('" + tagName + "')");
    }
});
document = new HTMLDocument();
obj_toString(document, 'HTMLDocument')
document = watch(document, 'document');

//补Element
Element = function () {
    this.prototype = {
        scrollIntoViewIfNeeded:function (tagName){
            console.log("Element.scrollIntoViewIfNeeded('" + tagName + "')");
        }
    }
}

//补location
location = function () {

}
location.prototype = {
    "ancestorOrigins": {},
    "href": "https://search.jd.com/Search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&suggest=2.his.0.0&wq=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&stock=1&pvid=b62b458176ac4edbb3c63cdb50c4b354&isList=0&page=1&s=1&click=1&log_id=1755958818054.6947",
    "origin": "https://search.jd.com",
    "protocol": "https:",
    "host": "search.jd.com",
    "hostname": "search.jd.com",
    "port": "",
    "pathname": "/Search",
    "search": "?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&suggest=2.his.0.0&wq=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%94%B5%E8%84%91&stock=1&pvid=b62b458176ac4edbb3c63cdb50c4b354&isList=0&page=1&s=1&click=1&log_id=1755958818054.6947",
    "hash": ""
}
location = new location();
obj_toString(location, 'Location')
location = watch(location, 'location');

//window里面的属性
localStorage = {
    "cfjrrval": "cw:yes~cfp:data:image/png;base64,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",
    "timejrrwg": "1755952978082",
    "dra_union_device": "5bbfebc2-8eb6-446b-84eb-14ecee2a9001",
    "JDst_rac_nfd": "{\"v\":10,\"t\":1755958818175,\"e\":31536000}",
    "hf_time": "1755970934006",
    "__we_m_gl__": "ZnAlM0FmMWRiMGEwNmE2MjRhZGI2MmIwNzc0YWQ5ZTY3Y2M0MX52ZW5kb3IlM0FXZWJLaXR+dmVyc2lvbiUzQVdlYkdMJTIwMS4wJTIwKE9wZW5HTCUyMEVTJTIwMi4wJTIwQ2hyb21pdW0pfnVubWFza2VkJTIwdmVuZG9yJTNBR29vZ2xlJTIwSW5jLiUyMChJbnRlbCl+dW5tYXNrZWQlMjByZW5kZXJlciUzQUFOR0xFJTIwKEludGVsJTJDJTIwSW50ZWwoUiklMjBJcmlzKFIpJTIwWGUlMjBHcmFwaGljcyUyMCgweDAwMDA0NkE2KSUyMERpcmVjdDNEMTElMjB2c181XzAlMjBwc181XzAlMkMlMjBEM0QxMSk=",
    "WQ_gather_cv1": "{\"v\":\"c7def5db117f6139d5ee8f43fe9d5cc3\",\"t\":1755958816209,\"e\":31536000}",
    "3AB9D23F7A4B3CSS": "jdd03AVDYBQZ4LZEBB2WKPJXTYVVDGSRPGCNO37R6PCTQZSENFJ74RJJEBOSQ2CDHLK5EZREJJ5A5U7FSUJIOIIWGKVY3QEAAAAMY25GWOOAAAAAACTQ3D6CJGL2CHUX",
    "3AB9D23F7A4B3C9B": "AVDYBQZ4LZEBB2WKPJXTYVVDGSRPGCNO37R6PCTQZSENFJ74RJJEBOSQ2CDHLK5EZREJJ5A5U7FSUJIOIIWGKVY3QE",
    "cfvalmdjrr": "d98982a3953b5754c509e82e41d76c45",
    "CA1AN5BV0CA8DS2EPC": "ba1a2e6cec06848141e38dbf31688640",
    "jrrwebglv": "data:image/png;base64,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§extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_texture_mirror_clamp_to_edge;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_blend_func_extended;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode§w1[1, 1]§w2[1, 1024]§w38§w4yes§w58§w624§w78§w816§w932§w1016384§w111024§w1216384§w1316§w1416384§w1530§w1616§w1716§w184096§w19[32767, 32767]§w208§w21WebKit WebGL§w22WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)§w230§w24WebKit§w25WebGL 1.0 (OpenGL ES 2.0 Chromium)§wuv:Google Inc. (Intel)§wur:ANGLE (Intel, Intel(R) Iris(R) Xe Graphics (0x000046A6) Direct3D11 vs_5_0 ps_5_0, D3D11)§w2623§w27127§w28127§w2923§w30127§w31127§w3223§w33127§w34127§w3523§w36127§w37127§w3823§w39127§w40127§w4123§w42127§w43127§w440§w4531§w4630§w470§w4831§w4930§w500§w5131§w5230§w530§w5431§w5530§w560§w5731§w5830§w590§w6031§w6130",
    "WQ_dy1_vk": "{\"5.2\":{\"73806\":{\"e\":31536000,\"v\":\"a96ggggi3dw06jw6\",\"t\":1755094306885},\"f06cc\":{\"e\":31536000,\"v\":\"zmgm3gzmzq3thw69\",\"t\":1755094307607}}}",
    "JDst_rac_last_update": "{\"v\":1755958816169}",
    "WQ_gather_wgl1": "{\"v\":\"4a3d5a4e1ed70f80da6f60583689d1fa\",\"t\":1755958816210,\"e\":31536000}",
    "aria": "{\"runtime\":{\"appid\":\"bfeaebea192374ec1f220455f8d5f952\"},\"road\":\"https://static.360buyimg.com/item/assets/oldman/wza1/\"}",
    "__we_m_ft__": "QXJpYWwlMkNBcmlhbCUyMEJsYWNrJTJDQXJpYWwlMjBOYXJyb3clMkNCb29rJTIwQW50aXF1YSUyQ0Jvb2ttYW4lMjBPbGQlMjBTdHlsZSUyQ0NhbGlicmklMkNDYW1icmlhJTJDQ2FtYnJpYSUyME1hdGglMkNDZW50dXJ5JTJDQ2VudHVyeSUyMEdvdGhpYyUyQ0NvbWljJTIwU2FucyUyME1TJTJDQ29uc29sYXMlMkNDb3VyaWVyJTJDQ291cmllciUyME5ldyUyQ0dhcmFtb25kJTJDR2VvcmdpYSUyQ0hlbHZldGljYSUyQ0x1Y2lkYSUyMENvbnNvbGUlMkNMdWNpZGElMjBIYW5kd3JpdGluZyUyQ0x1Y2lkYSUyMFNhbnMlMjBVbmljb2RlJTJDTWljcm9zb2Z0JTIwU2FucyUyMFNlcmlmJTJDTW9ub3R5cGUlMjBDb3JzaXZhJTJDTVMlMjBHb3RoaWMlMkNNUyUyMFBHb3RoaWMlMkNNUyUyMFJlZmVyZW5jZSUyMFNhbnMlMjBTZXJpZiUyQ01TJTIwU2FucyUyMFNlcmlmJTJDTVMlMjBTZXJpZiUyQ1BhbGF0aW5vJTIwTGlub3R5cGUlMkNTZWdvZSUyMFByaW50JTJDU2Vnb2UlMjBTY3JpcHQlMkNTZWdvZSUyMFVJJTJDU2Vnb2UlMjBVSSUyMExpZ2h0JTJDU2Vnb2UlMjBVSSUyMFNlbWlib2xkJTJDU2Vnb2UlMjBVSSUyMFN5bWJvbCUyQ1RhaG9tYSUyQ1RpbWVzJTJDVGltZXMlMjBOZXclMjBSb21hbiUyQ1RyZWJ1Y2hldCUyME1TJTJDVmVyZGFuYSUyQ1dpbmdkaW5ncyUyQ1dpbmdkaW5ncyUyMDIlMkNXaW5nZGluZ3MlMjAz",
    "timecfjrr": "1755952978067",
    "__we_m_cv__": "Y2FudmFzJTIwd2luZGluZyUzQXllc35jYW52YXMlMjBmcCUzQWU4MjA0ODE2MDY2N2E0ZjJjODAwZDBlYjg5ZTg1ZTEx",
    "__we_m_ftk__": "ZmI4ZTU3MmNiMDQyOTBhY2QxNDYzYjMyYmJmN2RiYWI=",
    "__we_m_cf__": "{\"t\":1755958891926,\"v\":\"qKovBzs7S_6Nb6Q1_7yBvz1SvAGxT4VbvsA5JDQiHM25uUlrbWKZFFiXachCpsqJgOQPJA_xoxpjA0h2dZlP-RYH2cKwYaYNyT5UvukWeNbC7wRqMZ0enaUIzY-GbhocQUSVdteFAxN9AeIPzfXXe4hgrbtQWyMIewkdpqVSh9sktViU-97geBWVNrbDYePVvyEd6hhzbkXA7MY_gs8sF22zS4fmVdk7GULtRvfzW2rjutfP55SD4WfIBRC6ua-c6yWMT-Up5jz6VGx4ZkraBuSpIFB-jQVsYS098FLKkgqNgQxjcaIVFVdjqd-6eRnW49iCeFU2VRq4ZQHnmsdNU8JC0Zf5Mg837XlfRDheV-IIPSlQS2EA7syxeRmt-RFJSnY7Pe-tKmYARvfYveXXtGHRmQ4Poi6xXSIgdVpgtMG9dgheo2sAL7UUo2vfKqPEAwqvPWgTldaC2Jpqg9mVS-FS2EyJEhDRDKwi9nMXxUMCkvSltsLwEzCSrNiGO6musB62VALesQWPFWqqYaxLlFmTwsEbriTklNhRWOxZQMWNouYXqwCre5G8Cq7eiX6WURmH45cVe0cjnADUdGfb7OO93PZcye-7cgD8-r0rcg1Zx_BH2tu_AYa-1jI1IbIf8-DETBR-KmEFxpXnbbKk_uaT4WWrkQ4VbyW09Pq7LT4D73FxuOOcew3LcNHUOOMT2fX1-rM5fuel1LavmrjtFNcYScmiN_koUJ79hb96IpjVFg5gnhgL2eJY_u5JUMLzP1xZ1RjDiCqWHaINyc2gCK2PhlD01qj4Anw6d0ZQ5B2PVGwXMLwKw3XwLOkE5FjzrcKR76fyKbnX4XtKl29aIdSVv9h1ioB3cnbG21_LRogma_gmkA5YTpC2g8hwFfHBqhs6Ydj-RsIi8E7JhxG6EZ7I_yZjyrBavC9njRucymMtPXn5Fnw2r2i_knG3lFNF8FSxmDMocwi-NAl9fxAEHbpP2s8RmJfrqIk98HkUuMZ0eBRU0Ds48uSov0fymnmCNZbDLKW2iPjkhMsZbs6l3w2Pmu_PsDgW5r9TYR-qZs4YMVtnXBQzNqi5mHq6P_sWdPWsfTCK1fG-ce-v3ZK_5cKwRo8BQSMZPF5WK3cmf47-f7RL2lqWZcLbs_IHsaHL5hl8kmUjn0vIZNzF3OKjU1W_VuuJlwKiJ8tvI2fwHgZJhfoLtUebbe9p1yLELJQxhdTtNah0W4hLX_DGD5aFaw6DIHaW6NHNsVVHSswasP8FdYI6XxNo77PGsk7tsyAH9-27oq63l0XCO5Snvx1HDn60WE4pnOzaL_xZoNchD9XmTnscZon6u5wwovY7fE01MFIB7zc5mjGzM_Myh2XJc6vhhQSTp6J3DBGUhS_UZ-R5f5DdyIj68XtKq7YzW2s1Oj2-HF6gvai9Vxo3x4Aja1xhQ7bTh9sDCb5K33jt-YW7Fj9dIPaReMU3ni7i_imxL-CFUX2BttXQSXM35rLIAlQ-9B423lEzIz8mFwEFX44-1G7iC7vLCWqm5THECnTNDQQjtUf2PWthBowGzjYjvMuZy1GZRaj2eMccfkAbotDCjxm0-jYdnhU9p5LdGYdI-CmqLuGNlj81TlWAUiJIoIsQBXmos65LMOgCQ46Y2ZqgRtQ_m8rIYJ2vylaSsgVuVFRMBhWzud2l5Nmo1a4wAKfSZXTc2-FzTRkvpLAhUr23P4tr8xhqwUUCFqxFumNrLzg3UOrAfQlyPaV41s_u3QN4Mz1VXj8kVZ2Z06iE1ZgAkWdgLE4PyJsTCoE32RDsrzmATC2n7X30yZikps813axZ0xM-TIUuJx_k7LZnME8gpMZIS-phJA8ztOljAjGTI0JYGx8FWyoHRY9pbDcIZdnxlo3SdIgbh_GOOa2fTo_8j8bMfjCtu37C2HfLFfZBPjSbqhZdZXzjDoNT74OhLbjQd5G_cSTY1B-5gOu7aC78BUFdbiwgI407Gb_8z21lS7a953Z_px3zyDlRzUkJKB9Cd1rozD2XTdrIRmt6fHa1d6fxg65ILtCoZpMbxkCYcFMGk5M1GbG3tI7sPkHJo_GVoJ5i5wYf5jcrlUUp5gZ2gBSJqZ7VtHy3w7nFXcxHG406bRFPrWsiKcVM4hwEZT0TYabxaCYtaNbANnzdcsDViGo6OyrH97Wu2tTVwYcRFa72CM6sHk3azfWWiQVWR0YM3a_dK-dowzTFNq3FB2zL0633s26plT601iRWZfK31UimVornLv60oUmG0FYdltH4vVsGxIFbHRR7CYlnppDSqyydSbaVDQZztVTqaF6VSCPxn7dn1VryJz8-1NCSoRd5tC1Ek4YO2IE9b9T55yXxU2G9xc1wihYSjFV9ctEPVNMaVD2f3l6cZH-5-puI87HXMA288gPon9y4zP424A0eE8laO7RygLyzQZY024FeoIh6jiSekDZWWviDGcjvrhzQnAxH_GV27Wj1MLnYBMHG45Lw2V7bzfm4AoBOI7d2PFX-YS4SkFzS4pd52oOL13CDC-wvNUmqBXqiP5XTiP7370fRh0pog7mdVa_AXtGSvGI4_NZAEXOpRSeUKyxs3i8NMlh3lgaurjVQ13y-ygREGUHA6l5e9rZGzOROzLCj8dfWOxSM17qTtbvFfFLE7dF-sJDGM7xVrinbljIaCQ18oMZfQZEslp2eH4bPkdTGZL4NdXh6U9yTDw-TVO5AObmhEcquiNidfECVBJ47xSO0gDq92GCJBQos9AfYZ8WQQvOwcq7dxyVUlQW5DW0o2Lyp88uuH7y7sqmBtKGkfIEf0MvhLrSki1MBcY6QY6zvK3wDCJ2EdG38-oq2uDoB-vdWnSXfSCOXNq67XKC-qzFe63bIVgJgEvUGN5Ol2D9b9Et9FWccE0mBMCKyByzYO-x95LHaHjs4N_qaZKJj7vwUnFTvobdYsAXQGCNz5yXViAaX8qLsEU3e8HcjknFwXvOtvESyTuUUzbOuJzDjBe0EQhNsxMbojsvyepxQCHGcUR5VFEEMD9FrTJlbB8NDxGC2YEosh31HipVGLQ1nrUEzG0m0_2wi-NLypmV_lrJT-W6bAhK013k-LmQP8m_C-OOYQaPr4axpgjPuxMfYegSuArfur1SMm2NAqmWOMeESKAh18u1iu2oiMPkT5CslxDb0LVz8s_I3h5uMO_LtsjMdJVPT0fvL-ilXg47q2gxZU4UK8ZPLAFuI3RJ5iqo0gmSR4_RoKVkEWCFk34mi8ggeb7C0AaYrm1Wophjg3SkC1OWByZU1BXULGZZHreN5jpIoQ2cLMCI43o7A7WftKNVeBJFoZkwYk23fhCWrKrcbLH1LfGIUw1bbnyzMvxZI_aAzoLX-L4I6-hIYnlZoIRVXux9O4iaY1ngbTKiGfEXqEb71So9YLRI6FX0iTY2rxBEV7AiABPHR8ybRSswIDtYgc4QCHgppFnjwh9-B1k1-LtaMg046dmtHW13NXFkDvsNdnWiXizpSJgi3EQCSPaYz48pKY4SbudP3jMy3bhPTTjGreRZyom5wNjijPRScmkbdhfwAI7cNVrKtVOkZqe8y5R6DWyH7mdGNBuI95zZflWcG0fJsS0Jy2jgqINaoBDAQFkGe4Sllrnn-rf4xNQLG2nDLQFiYtUii4BEjx4loRzQ6E7MEwrS9DAouedu4gKuI5KepU4i4o19Suudv8a_rfTfECnetEBC3IV0XqJ4VSVTC-sef6cLqJPqa86dfF80gvMfUF-XsFCm4Ig6m2ZdyQ6Klz_Fmixz3mKu40qdl0G3R4IKVM175A3wiCJwg7Nz5hOgXD9NLw34zzYr32RCIWdbGnbdvx4YYC7fjfCUaWwJphOXLU2PVvLmH73AOqdzPSXDjXkY5ElZdCLK5IEJkiP0j2dQBdLm-w2QgGToD-pWzLQRXasVnG0YhiB8wXtfrQwRYfYGG5tGyuFzS3Eh86JrUl_Gdik6A7GEEAzFIlHPnhmu74b-49tMz3TBHzWa3zhKJOSdhdZb9vv62EwcEHGqA1dIcIj_JYPPkQjs9ww8otrFA6xl20L0QN0Cf25wJb_1rxuAo43P17_oj8CF5aXaEJNSI4POiRFrsr7o7Es9fjNrl0f7SPWkHudcYUw==\"}",
    "areaId": "\"22\"",
    "PCA9D23F7A4B3CSS": "60b775fef531ceb88bf3db444e965930",
    "shshshfpb": "BApXSmcBF1P1ACYtAATdTTZhtFRHfjuH4BhdIMD9p9xJ1MmihgY62",
    "JDst_behavior_flag": "[{\"t\":1755958838340,\"e\":3600,\"v\":\"Ff\"}]",
    "webglvmdjrr": "093c3aecf9e9f92cba6973731ae8f67b",
    "shshshfpx": "97ff2550-f370-bdf9-2aa4-7c6664485022-1755093710",
    "shshshfpa": "97ff2550-f370-bdf9-2aa4-7c6664485022-1755093710",
    "PCTSD23F7A4B3CSS": "1755959431596",
    "WQ_dy1_tk_algo": "{\"a96ggggi3dw06jw6\":{\"73806\":{\"v\":\"eyJ0ayI6InRrMDN3YzQ2ZDFjYjgxOG5DMlAwUG9RZFUwdGNxeW1ob2JyQVRTbHd5QnVDcDd1bnQxRjdJdUlSYlFkMFhwZGJnTURYUlhiR1piOTUzRHlsZzlaM0xQaTVQd3p3IiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSd4SmxPeDFpUHpGWm4nO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uU0hBMjU2KHN0cik7fSJ9\",\"e\":86400,\"t\":1755952927753}},\"zmgm3gzmzq3thw69\":{\"f06cc\":{\"v\":\"eyJ0ayI6InRrMDN3YWY4OTFjZWIxOG5uZjFSaTBDdzd5OTdIRFhTbWNhQWVVVlBmMjNNQnVoS2l4bXZ6Q3ZPSTJhZGtBbENabWxuQ3NkU0kzeE1Mem5jZW5rX2pKMDR4blRPIiwiYWxnbyI6ImZ1bmN0aW9uIHRlc3QodGssZnAsdHMsYWksYWxnbyl7dmFyIHJkPSdGT2N1SzVDTWNzNkQnO3ZhciBzdHI9XCJcIi5jb25jYXQodGspLmNvbmNhdChmcCkuY29uY2F0KHRzKS5jb25jYXQoYWkpLmNvbmNhdChyZCk7cmV0dXJuIGFsZ28uU0hBMjU2KHN0cik7fSJ9\",\"e\":86400,\"t\":1755952988886}}}",
    getItem: function (key){

    },
    setItem: function (key, value){

    }
}

//补navigator
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0"
}

require('./js_security_v3_0.1.6')

function main123(){
    colorParam = {
    "appid": "search-pc-java",
    "functionId": "pc_search_s_new",
    "client": "pc",
    "clientVersion": "1.0.0",
    "t": new Date().getTime(),
    "body": "{\"keyword\":\"笔记本电脑\",\"suggest\":\"2.his.0.0\",\"wq\":\"笔记本电脑\",\"stock\":\"1\",\"pvid\":\"b62b458176ac4edbb3c63cdb50c4b354\",\"isList\":0,\"page\":\"3\",\"s\":\"56\",\"click\":\"1\",\"log_id\":\"1755955478116.6305\",\"show_items\":\"\"}",
    "loginType": "3",
    "uuid": "143920055.61636399.1755093653.1755952830.1755954575.3",
    "area": "22_1988_0_0"
}
    var colorParamSign = JSON.parse(JSON.stringify(colorParam))
    colorParamSign['body'] = CryptoJS.SHA256(colorParam.body).toString();
    window.PSign= new ParamsSign({
              appId: "f06cc",
              debug: false,
              preRequest:false,
              onSign: function(data){
                if(data && data.code && data.code!=200){ console.log(JSON.stringify(data)) }
              },
              onRequestTokenRemotely: function(data){
                if(data && data.code && data.code!=0){ console.log(JSON.stringify(data)) }
              },
              onRequestToken: function(data){
                if(data && data.code && data.code!=0){ console.log(JSON.stringify(data)) }
              }
            });
    var _$Ga = window.PSign._$sdnmd(colorParamSign);
    console.log(_$Ga.h5st.length);
    return _$Ga.h5st;
}
