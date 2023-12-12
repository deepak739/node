//Events --> sae pgm lang me events hote hai -- ek signal hota hai
//Emitter -- generator -- kuch generate krta hai

const express = require('express');
const EventEmitter = require('events');  //EventEmitter class hai isliye first letter cpas me liye hai
const app = express();
const event = new EventEmitter();

//event capture kr liya
let count = 0;
event.on("countAPI",()=>{
    
    count++;
    console.log("event called",count);
})

app.get('/',(req,res)=>{
    res.send("worked fine");
    event.emit("countAPI"); //event emit kr diya 

})
app.get('/search',(req,res)=>{
    res.send("worked fine");
})
app.get('/update',(req,res)=>{
    res.send("worked fine");
})
app.listen(5000);

//pta krna hai ki api ke kitne hits ja rhe h