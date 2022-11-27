const fs = require('fs');

/*
fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err, data);
})

const a = fs.readFileSync('file.txt');
console.log(a);
console.log(a.toString());

fs.writeFile('file.txt', 'This is data', ()=>{
    console.log("Written in the file");
})
*/
const a = fs.writeFileSync('file2.txt','This is data');

 
console.log("Finished reading file");