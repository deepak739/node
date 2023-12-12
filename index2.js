const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs' );  // yaha pe humlog template engine set kr rhe hai


app.get('/profile',(req,res)=>{
    let obj1 = {
        name:'Deepak',
        email:'dpk@gmail.com',
        contactNo:'6360801548',
        skills:['html','css','js','node']
    }

    res.render('profile',{obj1}); //res.render is used for dynamic web page
})

app.get('/login', (req, res)=>{
    res.render('login')

})

app.listen(9393);