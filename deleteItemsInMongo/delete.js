const dbConnect = require('./connection');

// const deleteOneItem = async ()=>{
//     let data = await dbConnect();
//     let deletedItem = await data.deleteOne({
//         name:'m30s'
//     })
//     console.log(deletedItem);
// }
// deleteOneItem();

const deleteManyItem = async ()=>{
    let data = await dbConnect();
    let deletedItem = await data.deleteMany({
        name:'nokia 1100', name:
        "Iphone11"
    })
    console.log(deletedItem);
}
deleteManyItem();