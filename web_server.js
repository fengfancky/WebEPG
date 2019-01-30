var http = require('http');
var fs = require('fs');
var url = require('url');

 
// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   
   var type = 'text/html;charset=UTF-8';

   if(pathname.endsWith('.html')){
        type = 'text/html;charset=UTF-8';
   }else if(pathname.endsWith('.css')){
        type = 'text/css;charset=UTF-8';
   }else if(pathname.endsWith('.js')){
        type = 'application/x-javascript;charset=UTF-8';
   }else if(pathname.endsWith('.png')){
       type = 'image/png;charset=UTF-8';
   }else if(pathname.endsWith('.jpg')){
        type = 'application/x-jpg;charset=UTF-8';
   }else{
       type = 'text/plain;charset=UTF-8';
   }

 
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
      }else{             
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': type});    
         
         if(pathname.endsWith('.png')||pathname.endsWith('.jpg')){
            response.write(data,'binary');   
            
         }else{
            response.write(data);  
         }
           
      }
      //  发送响应数据
      response.end();
   });  

}).listen(8080);
 
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');