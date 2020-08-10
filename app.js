"use strict";
let http = require('http');
let quote = require('./quotes')
let server = (request, response, array) => { 
    response.writeHead(200, {"Content-type": "text/plain"});
    response.randomQuotes;
    response.end();    
}
http.createServer(server).listen(3000);

