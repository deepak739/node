//teen chize hoti hain
//1. call stack
//--> isme jitne bhi functions hote hai code me wo sare register krte hai aise ki, pehle main, uske baad koi aur function ..
//2. node APIs --> isme jitne bhi c ya c++ me likha gya hai node js me wo sare functions aate hai jaise ki, setTimeout function
//3. callBack Queue --> isme node APIs me jo function kam time ke liye wait kr rha hai wo pehle ayega, aur ek baar callback me execution ke 
// baad wo call stack me jayega aur phir output me, pehla output ke baad me hi dusra setTimeOut wala function ayega callback queue me --> 
// ek ek kar ke aata hai callback queue me aur phir call stack me jata hai

//example

console.log("hi Everyone");

setTimeout(()=>{
    console.log("log with 2 secon wait time");
},2000)

setTimeout(()=>{
    console.log("log with 0 second wait time");
},0)

    console.log("final log");

   
    // first this went to call stack --> console.log("hi Everyone");
    // then, this went to node APIs --> setTimeout(()=>{
    //     console.log("log with 2 secon wait time");
    // },2000)

    // Then this also went to Node APIs -> setTimeout(()=>{
    //     console.log("log with 0 secon wait time");
    // },0)

    // Then from here it sees that one unction is taking 0 second wait time so 
    // function having 0 second wait time went to callback queue and then to call stack 

    // finally, function with wait time 2 seconds went to callback queue and then to call stack
    // that is why the output for the  above code came like this
//o/p
//hi Everyone 
// final log
// log with 0 second wait time
// log with 2 secon wait time
