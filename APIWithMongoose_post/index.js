const express = require('express');
require('./config');
const Product = require('./product')

const app = express();

app.use(express.json()); //--> ye apne aap hi request ke andar jo data ayega use json me convert kr dega

app.post("/creates",async (req,res)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
    
});
app.listen(391)