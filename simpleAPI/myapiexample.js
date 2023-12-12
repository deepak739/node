const http = require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({name:'deepak',email:'deepak@gmail.com'}));
    res.end(); 

}).listen(5656);