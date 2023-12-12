const express = require('express');
const path = require('path')

const app = express(); // initializing an Express.js application
//const app = express();: The result of calling express() is assigned to the variable app. This app variable now represents your Express application.
const publicPath = path.join(__dirname,'public'); //path.join ek function hota hai, isme pehla dir path aur dusra jo path isme add krna hai
// console.log(publicPath);

app.use(express.static(publicPath)); //waise to use ek bahot bada function hai, ye ek midleware hai kuch, ye ek express ka function hai
//express.static --> ye jo humara static file hai use load krega --> kaha se load krega wo hum de rhe hai small backet me path (publicPath), to ye public wale folder se load krega
//app aya hai express se
app.listen(4300);