day2
2025/8/10

如何做一个爬虫：
  数据接口 静态（html） 动态（ajax等 动态渲染）

  创建一个爬虫：
    自动化爬虫：创建一个客户端访问服务器，爬取数据：selenium
    协议爬虫：直接通过API接口，构建请求 获取数据：requests
        请求地址 请求方法 请求头 请求参数
        get 请求参数在url中
        post 请求参数在请求体（表单）中

  数据解密：
    在浏览器上面看到的是明文
    服务器返回的就是密文
  
  js逆向定位方法：
    关键字搜索 调用堆栈分析 hook
    hook:监听 自己编写一个js，代码监听某一个对象

//自执行函数
(function(){
  var my_parse = JSON.parse;
  JSON.parse = function(params){
    console.log("HOOK parse", params);
    if(params.length > 50){
      debugger; // 断点调试
    }
    return my_parse(params);
  }
 })();




JSON.parse ==> 数据类型转变为json数据
    

开发者工具：
  网络：log记录 客户端对服务器发送的请求 监听