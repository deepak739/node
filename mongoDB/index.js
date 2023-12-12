const dbConnect = require('./mongodb');

//handling promise

//1st way
// dbConnect().then((resp)=>{
// //console.warn(resp.find().toArray()) // its returning promise
// resp.find().toArray().then((data)=>{
//     console.warn(data);
// });
// })
//console.log(dbConnect());

//2nd Way 
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();