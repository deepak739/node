const express = require('express');
const dbConnect = require('./connection');
const app = express();

app.use(express.json()); // --> agar koi bhi data postman se node me bhej rahe hai using post method to ye use karna hota hai

// app.get('/', async (req,res)=>{
//     let db = await dbConnect();
//     let mongoItem = await db.find().toArray();
//     res.send(mongoItem);


    //res.send({"name":"Deepak"});
//});


    app.post('/',async (req,res)=>{
        //res.send({name:"Deepak"})
        //console.log(req.body); //--> ye hum likh rahe postman se data ko get krne k liye aur node me show krne k liye, matlab postman se data aane lg gya hai noded js me
        let data = await dbConnect();
        let result = await data.insertOne(req.body);
        res.send(result); // jo api hume response degi
    
    })
app.listen(899);