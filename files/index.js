const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname);
console.log(dirPath);

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","i am the first file");
// }

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is", item);
    })
})