const express = require('express');
const dbConnect = require('./connection');
const app = express();


app.use(express.json());

// app.get('/', async (req,res)=>{

//     let data = await dbConnect();
//     data = await data.find().toArray();
//     res.send(data);
//     //res.send({"name":"Lumia","Brand":"Nokia","price":232});

// });

// app.post('/', async (req,res)=>{
//     let data = await dbConnect();
//     let result = await data.insert(req.body);
//     res.send(result);
//     //db se connect kiya, aur db me data insert kiya -- ye data kaha se insert kiya -- ise insert kiya postman se post api ke through -- post method ke body me kcuh data as a json body diye aur execute kiye to waha se data aa gya db ke andar

// });

//update query
// app.put('/',async (req,res)=>{
//     let data = await dbConnect();
//     let result = await data.updateOne({"name":"note 9"},{$set:req.body}
//     )
//     res.send({result:"update"})
    
// }
// )

app.put('/:name',async (req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne({name:req.params.name},{$set:req.body}
    )
    res.send({result:"update"})
    
}
)




app.listen(887);