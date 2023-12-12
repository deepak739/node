const express = require('express');
const app = express();  //--? yaha executable bana rahe hai

app.get('',(req, res)=>{
    res.send(`
    <h1> Hello, this is Home Page Welcome to my Homepage</h1>`)

})  //--> get method hai--> iska pehla parameter jata hai route key, matlab home page ke liye blank hoga
//agar about us page hai to uske liye /about kar ke de skthe hai
//second parameter call back function hota hai, yaha pe humne arrow function liya hai
//is function me do parameter diye hai --> req aur res

app.get('/about',(req, res)=>{
    res.send(`
    <input type = "text" placeholder="user name" value="${req.query.name}"
    <button> Click Me </button>
    <a href="/">Go to Home Page`)

})

app.get('/help',(req, res)=>{
    console.log(req.query.name);
    res.send(`
    [{
        name:"Deepak",
        email:"dpk@gmail.com"
    },
    {
        name:"Ash",
        email:"ash@gmail.com"
    }]`)

})

app.listen(340);