// console.log("hey1");
// setTimeout(()=>{
//     console.log("hey2");

// },2000)

// console.log("hey3");

//drawback of async 
 let a = 10;
let b = 0;

// setTimeout(()=>{
//     b=20;
   
// },2000)
// console.log(a+b);

//handling above drawback with promises

let waitingData =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20)
       
    },2000)

})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})

