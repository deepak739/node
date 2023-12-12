const express = require('express');
const path = require('path');

const app = express();

//console.log(__dirname);

const publicPath = path.join(__dirname,'public');
//console.log(publicPath);

app.get('',(req, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/testingAbout',(req,res)=>
{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/help123',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)

})

app.get('*', (req,res)=>{
    res.sendFile(`${publicPath}/pageNotFound.html`)
})


app.listen(739);
