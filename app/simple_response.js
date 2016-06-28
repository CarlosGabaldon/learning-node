exports.body = function() {
  return 'Welcome to Node.js\n';

};

exports.contentType = function() {
  return 'text/plain';
};

exports.authorization = function() {
  return 'Basic';
};

exports.respondTo = function (request, response) {
  return "";
};
