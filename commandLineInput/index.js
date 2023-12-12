// console.log("It will take input from command line");
// console.log(process.argv); 
//o/p-->
//'C:\\Program Files\\nodejs\\node.exe',
//'C:\\Users\\Deepakkumar\\Desktop\\node\\commandLineInput\\index.js

const fs = require('fs')
let input = process.argv;
//console.log(input);

//fs.unlinkSync(input[2]);

if(input[2]=== 'add')
{
    fs.writeFileSync(input[3],input[4]);
}
else if (input[2] === 'remove') {
    if (fs.existsSync(input[3])) {
        fs.unlinkSync(input[3]);
        console.log(`${input[3]} has been removed.`);
    } else {
        console.log(`${input[3]} does not exist.`);
    }
}
else
{
    console.log("Invalid Input");
}
