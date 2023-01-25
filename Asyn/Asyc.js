const { Console } = require("console");
const fs = require("fs")

// fs.writeFile("read.txt","I love my india:)",(err) => {
//    console.log("File is creted...");
// });

fs.readFile("read.txt",'UTF-8',(err,data)=>{
    console.log(data)
})
