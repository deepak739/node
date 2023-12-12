const express = require('express');
const app = express();  //--? yaha executable bana rahe hai

app.get('',(req, res)=>{
    res.send('Hello, this is Home Page')

})  //--> get method hai--> iska pehla parameter jata hai route key, matlab home page ke liye blank hoga
//agar about us page hai to uske liye /about kar ke de skthe hai
//second parameter call back function hota hai, yaha pe humne arrow function liya hai
//is function me do parameter diye hai --> req aur res

app.get('/about',(req, res)=>{
    res.send('Hello, this is About Page')

})

app.get('/help',(req, res)=>{
    console.log(req.query.name);
    res.send('Hello, this is Help Page')

})

app.listen(34334);

//routings ke baare me
  