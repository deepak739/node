const express = require('express');
const dbConnect = require('./connection');
const app = express();

app.get('/', async (req,res)=>{
    let db = await dbConnect();
    let mongoItem = await db.find().toArray();
    res.send(mongoItem);


    //res.send({"name":"Deepak"});

})
app.listen(898);