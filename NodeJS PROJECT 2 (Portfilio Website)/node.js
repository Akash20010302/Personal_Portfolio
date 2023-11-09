const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const portfolio = fs.readFileSync('./portfolio.html')
const contact = fs.readFileSync('./contact.html')
const hireme = fs.readFileSync('./hireme.html')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;


    req.statusCode = 200;
    res.setHeader('Content-type', 'text/html' );
    if(url == `/`){
        res.end(home);
    }
    else if(url == `/about`){
        res.end(about);
    }
    else if(url == `/services`){
        res.end(services);
    }
    else if(url == `/portfolio`){
        res.end(portfolio); 
    }
    else if(url == `/contact`){
        res.end(contact);
    }
    else if(url == `/hireme`){
        res.end(hireme)
    }
    else if(url == `mailto: akashpalm2017@gmail.com`){
        res.end(contact)
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not Found</h1>")
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});



