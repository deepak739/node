//http kya krta hai --> node js ke andar server ke request aur response ko handle karta hai
// const http = require('http');
// http.createServer((req, res)=>{
//     res.write("<h1> Hello, world.. today i have learnt how to use http using node </h1>");
//     res.end();

// }).listen(4500);  //--> yaha createServer jo function hai wo pura ka pura function as a parameter leta hai

// test(a,b)
// {

// }
// test(10,20)  --> normally hum parameter aise send krte hai koi bhi function me

//another way

const http = require('http');
const datatransfer = function(req, res){
    res.write("Hello");
    res.end();
}
http.createServer(datatransfer).listen(5500);