day1
2025/8/9

协议爬虫：通过对应的协议请求，直接获取服务器返回的数据（通过api接口）

http（超文本传输协议）   https（安全超文本传输协议） wss（WebSocket）

web：
    静态数据：html、css、js、图片、视频、音频【非结构化数据】
    动态数据：json、xml、ajax等【结构化数据】

cookie加密：
  时效性cookie：过期----找到它js中生成函数，进行模拟（https没打勾）
  每次都是需要新的进行验证：与token有关

定位：
  监听dom中set cookie的操作

hook定位：
  编写代码监听某一个对象进行某一个操作
  调用堆栈

补环境：
  浏览器的执行环境：V8引擎 dom和bom
  nodejs：V8引擎 内置的api（第三方库）

