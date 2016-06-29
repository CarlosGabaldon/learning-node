const SimpleResponse = exports;

SimpleResponse.body = function() {
  return 'Welcome to Node.js\n';
};

SimpleResponse.contentType = function() {
  return 'text/plain';
};

SimpleResponse.authorization = function() {
  return 'Basic';
};

SimpleResponse.respondTo = function (request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', SimpleResponse.contentType());
  response.end(SimpleResponse.body());
};
