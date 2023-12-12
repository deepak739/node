const {MongoClient} = require('mongodb');
console.log(MongoClient);
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm'

async function getData()
{
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);

}
getData();

/*
1. import mongo db module
2. use MongoClient class from mongodb module using destructuring
3. store the url of mongodb in a variable
4. create new object of MongoClient class and pass the url in constructor and store the reference in a variable
5. store the database name in a variable
6. create a function to connect to the db
7.  use connect method 
8. use .db to specify which database need to connect
9. use db.collection to connect to the collection
10. store the reult of collection in a variable
11. print the result

*/

//Destructuring is a feature in JavaScript that allows you to extract values from objects or arrays and assign them to variables in a concise and convenient way. It simplifies the process of extracting data by providing a more compact syntax.

// pehla step -> import kro mongodb ko aur ise 

// require function ka use kar rhe hai koi specific module ko import krne ke liye
// In above case, we are importing mongodb module and MongoClient class from mongodb module,
// so here MongoClient is a class that we are importing 
// {MongoClient} --> here we are using destructuring concept of javascript
// {} --> destructuring
// The statement you provided is written in JavaScript and is using the require function to import a specific module. In this case, it is importing the MongoClient class from the 'mongodb' module.

// Here's a breakdown of the statement:

// const: This keyword is used to declare a constant variable. In this case, it's declaring a constant variable named MongoClient.

// {MongoClient}: This is a destructuring assignment syntax in JavaScript. It allows you to extract specific properties or methods from an object or module. In this context, it is extracting the MongoClient class from the 'mongodb' module.

// require('mongodb'): The require function is used in Node.js to import modules. It loads the 'mongodb' module, making its functionalities available in the current script. The MongoClient class is part of this module and is being extracted using destructuring.

// So, the overall meaning of the statement is that it is importing the MongoClient class from the 'mongodb' module, allowing you to use it in your JavaScript code for interacting with MongoDB databases.