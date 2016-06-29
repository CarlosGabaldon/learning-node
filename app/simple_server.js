const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const simple_response = require('../app/simple_response')

const server = http.createServer(simple_response.respondTo);

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});

server.on('request', function(request, response) {
  if(request.url != '/favicon.ico'){
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);
  }
});
