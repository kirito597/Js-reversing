var fs = require('fs');

//框架工具模块
var tools = require('./tools/tools_node');

function Get_Code() {
    var code = "";
    //引入框架工具代码
    code += tools.Get_Code() +"\r\n";
    //引入用户框架配置代码
    //引入浏览器相关
    code += fs.readFileSync(`${__dirname}/browser/EventTarget.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/browser/WindowProperties.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Window.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Document.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Location.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/browser/History.js`) +"\r\n";
    code += fs.readFileSync(`${__dirname}/browser/Navigator.js`) +"\r\n";

    return code;
}
