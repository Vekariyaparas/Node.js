const http = require('http');

http.createServer( (req, resp) => {
    resp.write("<h1>Hello, This is Node server.</h1>");
    resp.end();
}).listen(4000);


// Normal function 
function dataControl (req, resp) {
    resp.write("<h1>Hello, This is Node server.</h1>");
    resp.end();
};


// Arrow function 
const dataControl =  (req, resp) => {
    resp.write("<h1>Hello, This is Node server.</h1>");
    resp.end();
};

http.createServer(dataControl).listen(4000);

 // => HTTP (Hypertext Transfer Protocol) facilitates communication between a client (such as a browser or app) and a server. When handling HTTP requests, the client sends a request to the server, which includes essential parts like the method (e.g., GET, POST), headers, and, in some cases, a body with additional data. The server processes this request and responds with a status code, headers, and possibly a body containing data or feedback.