// In the context of Node.js, middleware refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. These functions can perform various tasks, modify the request and response objects, or end the request-response cycle.

// In a Node.js web application, the middleware functions are executed sequentially, and each middleware has the ability to modify the request or response objects, pass control to the next middleware in the stack, or end the request-response cycle. Middleware is often used for tasks such as authentication, logging, error handling, and request processing.

//MiddleWare Types --> RRoute level Middleware  --> aissa middleware jo single ya group of routes ke upar applicable ho
//, Application level Middleware,  --> pure application me jitne bhi routes hai uspe middleware lag skta hai



const express = require('express');
const path = require('path');

const app = express();

//using middleware 
const reqFilter = (req, res, next)=>{ // yaha ek function jo 3 parameter use krt hai, req, res, next ... next ko call krna hota hai last me
    if(!req.query.age)
    {
        res.send('Please provide the age');
    }
    else if(req.query.age<18)
    {
        res.send('You cannot access this page')
    }
    else
    {
        next();
    }
    
    

}
app.use(reqFilter);  // middleware use krne ke liye use aise likha jata hai

app.get('', (req, res)=>{
    res.send('This is Home Page');

})

app.get('/login', (req, res)=>{
    res.send('This is Login Page');
})

app.get('/registration', (req, res)=>{
    res.send('This is registration Page');
})

app.listen(3100);