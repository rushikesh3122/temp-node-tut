// const http = require("http")

// const server = http.createServer((req,res)=>{
//      res.write("Hello india");
//      res.end();
// })
// server.listen(8080) //Listen port number

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to India')
    }
    if(req.url === '/about'){
        res.end('Hear is our big History')
    }
    res.end(`<h1> Oops! </h1> 
    <p>Oops cant seem to find the page</p> 
    <a href="/">Back to home</a>`)
})
server.listen(8080)
