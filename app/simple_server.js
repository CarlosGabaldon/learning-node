const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const simple_response = require('../app/simple_response')

const server = http.createServer(function(request, response) {
  var remoteAddress = request.connection.remoteAddress;
  response.statusCode = 200;
  response.setHeader('Content-Type', simple_response.contentType());
  response.end(simple_response.body());

  console.log("Serving request: " + remoteAddress);
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
