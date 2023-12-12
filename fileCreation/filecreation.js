//Core modules  -- by default features jo available hai programming language me jaise ki console.log....
//global modules and non-global
//core modules :- core modules humara kya hota hai na ki suppose hume kuch print krwana ho 
// ya phir koi function likhna ho to ye sab ko hume import krne ki zarurat ni hoti hai kyuki ye already 
// hum jo language use kr rhe hai usme present hota hai

//Global module :- ye ek jaisa chiz hota hai jo globally available aur ise import krne ki zarurat ni hoti hai
//Non-global :- agar hume koi language me use krna ho to use import krna hota hai
//jaise ki hume koi file create krna hai to filesystem ko import krna hoga
//aur tab jake uske functionalities ya methods jaise ki create ye sab use kr skte hai

const newfile = require('fs');  //--> yaha pe hum pehle fs ko import kiye phir use kiye to ye non-global module hai
newfile.writeFileSync("code.txt","Hey,  I have created one text file")