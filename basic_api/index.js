const http = require("http");
const data = require('./data');

http.createServer( (req, resp) => {
    resp.writeHead(200, {'content-type': 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4000);



//All status code
    // 200 OK. The HTTP 200 OK response code implies a successful request.
    // 201 Created. This indicates that the request was completed, and a new resource was created as a result.
    // 204 No Content.
    // 400 Bad Request.
    // 401 Unauthorized.
    // 403 Forbidden.
    // 404 Not Found.
    // 500 Internal Server Error.