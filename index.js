const fs = require("fs");
const http = require("http");
const url = require("url");
/////////////// files
// const hello="hello world";
// console.log(hello);
// read and write file( blocking , synchronous way)
// const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\n Creaated on ${Date.now()}`;
// fs.writeFileSync('./text/output.txt',textOut);
// console.log('File Written!');
// read and write file(Non-blocking , Asynchronous way)
//callback hell
// fs.readFile("./text/start.txt", "utf-8", (err, data1) => {
//     if(err) return console.log("Error!!!")

//   fs.readFile(`./text/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./text/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./text/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written");
//       });
//     });
//   });
// });
// console.log("will read file!");

/////////////////////////////////////////server

const server = http.createServer((req,res)=>{
  const pathName=req.url;
  if(pathName==='/'|| pathName==='/overview')
  {
    res.end('This is Overview');
  }else if(pathName==='/product'){
    res.end('This is the Product');
  }else if(pathName==='/api'){
    fs.readFile(`${__dirname}/NODE_FARM/dev-data/data.json`, 'utf-8', (err,data)=>{
   const productdata=    JSON.parse(data);
   res.writeHead(200,{'Content-type':'application/json'})
   res.end(data);
    });
    
  }
   else{
    res.writeHead(404,{
      'Content-type':'text/html',
      'my-own-header':'hello world'
    });
    res.end('Page not found!!</h1>');
  }
  
});
server.listen(8000,'127.0.0.1',()=>{
  console.log('Listening....');
})