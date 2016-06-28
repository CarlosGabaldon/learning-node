var expect = require("chai").expect;
var simple_response = require('../app/simple_response')

describe("Simple response object", function() {
  it("should return body", function () {
    expect(simple_response.body()).to.equal("Welcome to Node.js\n");
  });

  it("should return content type", function () {
    expect(simple_response.contentType()).to.equal('text/plain');
  });

  it("should return authorization", function() {
    expect(simple_response.authorization()).to.equal('Basic');
  });

  it("should return response function", function() {
    expect(typeof simple_response.respondTo).to.equal("function");
  });

});
