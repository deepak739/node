module.exports = (req, res, next)=>{ // yaha ek function jo 3 parameter use krt hai, req, res, next ... next ko call krna hota hai last me
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