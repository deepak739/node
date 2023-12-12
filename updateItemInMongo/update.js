const dbConnect = require('./dbconnection');

// const updateOneItem = async ()=>{
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         {name:'note 8'},
//         {
//             $set:{name:'updated note 8'}
//         });
//     console.log(result);
    
// }
// updateOneItem();


// const updateManyItem = async ()=>{
// let data = await dbConnect();
// let result = await data.updateMany(
//     {name:'note 5'},
//     {
//         $set:{name:'updated note 5', price:'444'}
//     });
// console.log(result);

// }
// updateManyItem();

const updateManyItem = async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'updated note 5'},
        {
            $set:{name:'updated note 05', price:'544'}
        });
    console.log(result);
    
    }
    updateManyItem();