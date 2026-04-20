
//框架 封装 功能单一 可扩展

//js调试框架 监控所有环境

//在真实浏览器代理（无法代理某些对象）
//在自己伪造的环境代理（任意代理，保证代理不会被检测，但某些功能无法进行完美伪造）

//伪造代码如何被检测
//tostring检测  基于原型链的检测  dom环境检测

                // var navigator = {
                //     userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
                // };

                // //做一个hook，躲过检测navigator,其中Object.getOwnPropertyDescriptor返回指定对象属性配置
                // Object.getOwnPropertyDescriptor_ = Object.getOwnPropertyDescriptor;
                // Object.getOwnPropertyDescriptor = function(obj, prop) {
                //     if (obj === navigator) {
                //         return undefined;
                //     }
                //     Object.getOwnPropertyDescriptor_.apply(this, arguments);
                // }
                //
                // // 获取属性描述符
                // const descriptor1 = Object.getOwnPropertyDescriptor(navigator, "userAgent");
                //
                // // 输出结果
                // console.log(descriptor1);


//代理是什么？
//拦截js读取window.某某的的各种操作

                // window = globalThis;
                //
                // //这是一个代理，先代理的检测不到后代理的
                // function proxy(obj) {
                //         return new Proxy(obj, {
                //         set: function(target, key, value, receiver) {
                //             console.log("set", key, value, receiver, target);
                //             return Reflect.set(...arguments);
                //         },
                //         get: function(target, key, receiver) {
                //             console.log("get", key, receiver, target);
                //             return target[key];
                //         }
                //     });
                // }
                //
                // document = {
                //
                // }
                // navigator = {
                //
                // }
                // location = {
                //
                // }
                // screen = {
                //
                // }
                // window = proxy(window);
                // document = proxy(document);
                // navigator = proxy(navigator);
                // location = proxy(location);
                // screen = proxy(screen);

                // //创建对象的几种方式
                // var obj1 = {} //onj1是实例
                // var obj2 = class obj{} //obj2是实例
                // var obj3 = new (function(){}) //obj3是实例
                // var obj4 = Object() //obj4是实例
                // var obj5 = Object.create({}) //obj5是实例
                //
                // function xx(){} //方法也是对象，js中所有东西都是对象，方法既是实例也是原型

//如何区分原型和实例:
//实例调用__proto__  返回实例的原型
//原型调用__proto__  返回原型的父亲的原型或者实例
//原型调用prototype  返回原型自身
//例如：Window.prototype === window.__proto__


                // function Hc(){
                //
                // }
                // var hc = new Hc;
                // Hc.prototype.__proto__ = ({}).__proto__; //把Hc的原型指向Object的原型
                // console.log(hc.__proto__);

//原型链
function Window() {

}
window = new Window();
function WindowProperties() {

}
widnow.__proto__ = WindowProperties.prototype;