const express = require('express')
const dbConnect = require('./connection')
const mongoddb = require('mongodb')
const app = express();

app.use(express.json());

app.delete('/',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({"name":"note 7"});

    res.send({"result":"deleted"})

})

// app.delete('/:id',async (req,res)=>{
//     //let data = await dbConnect();
//     console.log(req.params.id);

//     res.send({"result":"deleted"})

// })

app.delete('/:id',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id:new mongoddb.ObjectId(req.params.id)});

    res.send({"result":"deleted"})

})

app.listen(23231);