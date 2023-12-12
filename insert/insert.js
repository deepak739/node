const dbConnect = require('./connection');
// const newItem = {
//                     name:'note 5', brand:'vivo', price:'432'
//                 }
const manyNewItems = [{name:'note 6', brand:'oppo', price:'200'},
                      {name:'note 7', brand:'mi', price:'120'},
                      {name:'note 8', brand:'jio', price:'100'},
                      {name:'note 9', brand:'blackberry', price:'450'}]

const insertItem = async ()=>{
    const db = await dbConnect();
    //console.log(db);
    //console.log("insert function called");
    //const result = await db.insertOne(newItem);
    const manyResults = await db.insertMany(manyNewItems);

    // if(result.acknowledged)
    // {
    //     console.log('data inserted');
    // }

    if(manyResults.acknowledged)
    {
        console.log('data inserted');
    }
   
}
insertItem(); 