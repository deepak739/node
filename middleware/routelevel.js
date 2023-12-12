const express = require('express');
const reqFilter = require('./middleware')

const app = express();
const route = express.Router();

//using middleware 

//app.use(reqFilter);  // middleware use krne ke liye use aise likha jata hai
route.use(reqFilter)
app.get('', (req, res)=>{
    res.send('This is Home Page');

})

app.get('/login', (req, res)=>{
    res.send('This is Login Page');
})

app.get('/registration', (req, res)=>{
    res.send('This is registration Page');
})
route.get('/contact', (req, res)=>{
    res.send('This is contact Page');
})  // hum middleware sirf yaha use kr rhe hai aur kisi aur route pe use ni kr rhe hai -- route level
app.use('/',route)

app.listen(3200);