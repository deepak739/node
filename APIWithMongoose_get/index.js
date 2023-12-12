const express = require('express');
const Product = require('./product');
const config = require('./config');

const app = express();

app.use(express.json());

// app.get('/read',async (req,res)=>{
//     //res.send("Reading the file from vs code");
//     let data = await Product.find();
//     res.send(data);
// })

// app.delete('/delete/:_id',async (req,res)=>{
//     //res.send("Reading the file from vs code");
//     console.log(req.params);
//     let data = await Product.deleteOne(req.params);
//     res.send(data);
// })
app.put('/update/:_id',async (req,res)=>{
    //res.send("Reading the file from vs code");
    console.log(req.params);
    let data = await Product.updateOne(req.params,
        {$set:req.body});
    res.send(data);
})
app.listen(393);