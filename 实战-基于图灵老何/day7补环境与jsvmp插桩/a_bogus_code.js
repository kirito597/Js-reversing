//代理
function watch(obj, name) {
    const isProxyActive = Symbol("isProxyActive");
    return new Proxy(obj, {
        get: function (target, property, receiver) {
            try {
                const value = target[property];
                if (value === undefined && !receiver[isProxyActive]) {
                    const protoChainNeeded = !Object.getPrototypeOf(target).hasOwnProperty(property);
                    const descriptor = Object.getOwnPropertyDescriptor(target, property) || {};
                    const toStringDesc = descriptor.toString || (descriptor.get && descriptor.get.toString());
                    console.log(`${name}.${property} 读取: ${String(value)} (${typeof value}), 补原型链: ${protoChainNeeded}, toString: ${toStringDesc || '无'}`);
                }
            } catch (e) {}
            return target[property];
        },
        set: (target, property, newValue, receiver) => {
            try {
                if (!receiver[isProxyActive]) {
                    const displayValue = String(newValue);
                    if (displayValue.length <= 50) {
                        const protoChainNeeded = !Object.getPrototypeOf(target).hasOwnProperty(property);
                        const descriptor = Object.getOwnPropertyDescriptor(target, property) || {};
                        const toStringDesc = descriptor.toString || (descriptor.get && descriptor.get.toString());
                        console.log(`${name}.${property} 设置: ${displayValue} (${typeof newValue}), 补原型链: ${protoChainNeeded}, toString: ${toStringDesc || '无'}`);
                    }
                }
            } catch (e) {}
            return Reflect.set(target, property, newValue, receiver);
        }
    });
}


window = global
//需要知道requestAnimationFrame做了什么事情，返回了什么?
//由输出可知当前js代码执行之后所指向的代码
window.requestAnimationFrame = function (args) {
    console.log("====>  window.requestAnimationFrame里面参数为：", args)
}
window.EventSource = function (args) {
    console.log("====>  EventSource里面参数为：", args)
}
window.localStorage = {
    "__tea_cache_first_2018": "1",
    "__pwa_push_show_count": "1",
    "__tea_cache_first_24": "1",
    "__tea_cache_tokens_2018": "{\"web_id\":\"7538322427316028963\",\"user_unique_id\":\"verify_meb0gw4h_72rgN1Mp_aDXL_4qY6_9g6f_0MxzaRgy7ASK\",\"timestamp\":1755155798696,\"_type_\":\"default\"}",
    "xmst": "BnLN2lndqKtikywPXfGdT9NK3TEOxClaiLEGjBGfD-ad0xceLt-bsvBCyYQ1m10ZthI9eYyHiPQ74yQ6WbrxgJ6h03lz3byphfDvg77vIzcHA9iWL962mw==",
    "__tea_cache_tokens_24": "{\"web_id\":\"7538322412975867402\",\"user_unique_id\":\"7538322412975867402\",\"timestamp\":1755155798526,\"_type_\":\"default\"}",
    "__pwa_push_show_time": "1755152480503",
    "__tea_cache_refer_24": "{\"refer_key\":\"\",\"refer_title\":\"今日头条\",\"refer_manual_key\":\"\",\"routeChange\":false}",
    "__is_visited_home": "1",
    "tt_scid": "MtQHzPZ.rH99a4GUptNuYOuc9ZRhlSxS1tT7rY5c9N2lRzY8vOGOVRkyNWOy4j9a0536",
    "_byted_param_sw": "8isqvSBeLeI4FWyAcyQ=",
    "web_runtime_security_uid": "a43626e0-30e9-4041-a83e-7db54f7fae53",
    "SLARDARtoutiao_web_pc": "JTdCJTIydXNlcklkJTIyOiUyMjc1MzgzMjI0MTI5NzU4Njc0MDIlMjIsJTIyZGV2aWNlSWQlMjI6JTIyNzUzODMyMjQxMjk3NTg2NzQwMiUyMiwlMjJleHBpcmVzJTIyOjE3NjI5MzE3OTkxODYlN0Q=",
    "ttcid": "580ba5e075b94bc08e5f136ae40c3b8c35"
}
window.sessionStorage = {
    "__tea_session_id_24": "{\"sessionId\":\"daeb55f6-db41-486f-a31f-0a21e58b80d5\",\"timestamp\":1755156575152}",
    "_byted_param_sw": "8isqvSBeLeI4FWyAcyQ=",
    "/": "1",
    "tt_scid": "MtQHzPZ.rH99a4GUptNuYOuc9ZRhlSxS1tT7rY5c9N2lRzY8vOGOVRkyNWOy4j9a0536",
    "__tea_session_id_2018": "{\"sessionId\":\"c2bb3251-73ab-48e6-a026-753b52e7ef58\",\"timestamp\":1755155858700}"
}
window._sdkGlueVersionMap = {
    "sdkGlueVersion": "1.0.0.55",
    "bdmsVersion": "1.0.1.7",
    "captchaVersion": "4.0.2"
}
window.onwheelx = {
    "_Ax": "0X21"
}
window.innerWidth = 1432
window.innerHeight = 160
window.outerWidth = 1440
window.outerHeight = 912
window.screenX = 0
window.screenY = 0
window.pageYOffset = 200
window.screen = {}
//给window对象套上深度代理
window = watch(window, "window")

span = {
    classList: []
}

document = {}
document.referrer = 'https://cn.bing.com/'
document.createElement = function (args) {
    console.log("====>  createElement里面参数为：", args)
     if (args === 'span'){
        return watch(span, "span")
    }
}
document.createEvent = function (args) {
    console.log("====>  createEvent里面参数为：", args)
}
documentElement = {}
document.documentElement = watch(documentElement, "documentElement")
document.body = {}
document.body = watch(document.body, "body")
document.body.clientWidth = 1417
document.body.clientHeight = 2774
document = watch(document, "document")

MLHttpRequest = function (args) {
    console.log("====>  XMLHttpRequest里面参数为：", args)
}

e = function (args) {
    console.log("====>  e里面参数为：", arguments)
}

XMLHttpRequest = function (args) {
    console.log("====>  XMLHttpRequest里面参数为：", args)
}

require('./bdms')
arguments = [
    0,
    1,
    8,
    "channel_id=3189399007&min_behot_time=1755156265&offset=0&refresh_count=4&category=pc_profile_channel&client_extra_params=%7B%22short_video_item%22%3A%22filter%22%7D&aid=24&app_name=toutiao_web&msToken=BnLN2lndqKtikywPXfGdT9NK3TEOxClaiLEGjBGfD-ad0xceLt-bsvBCyYQ1m10ZthI9eYyHiPQ74yQ6WbrxgJ6h03lz3byphfDvg77vIzcHA9iWL962mw%3D%3D&msToken=BnLN2lndqKtikywPXfGdT9NK3TEOxClaiLEGjBGfD-ad0xceLt-bsvBCyYQ1m10ZthI9eYyHiPQ74yQ6WbrxgJ6h03lz3byphfDvg77vIzcHA9iWL962mw%3D%3D",
    "",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.0.0"
]
var r = window.uuuu._v
a_bogus = window.uuuu._u(r[0], arguments, r[1], r[2])
console.log(a_bogus)

