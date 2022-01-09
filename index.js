const fs= require('fs')
// const hello="hello world";
// console.log(hello);

// read and write file
const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\n Creaated on ${Date.now()}`;
fs.writeFileSync('./text/output.txt',textOut);
console.log('File Written!');