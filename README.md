# Node learning

## Setup

### Installing Node.js

The best way to install Node.js is to use one of the installers from nodejs.org, https://nodejs.org/en/

Test: Run node -v. The version should be higher than v0.10.32.

### Updating npm

Node comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.

```
$ npm install npm -g
```

Test: Run npm -v. The version should be higher than 2.1.8.

### Installing Mocha & Chai

Install testing framework, and an expectation library called Chai that serves as a nice replacement for Node's standard assert function.

```
$ npm install mocha --save
$ npm install chai --save

```

Run Tests

```
$ mocha

Simple response object
  ✓ should return body
  ✓ should return content type
  ✓ should return authorization


3 passing (8ms)
```

### Running locally ##
```
$ node ./app/simple_server.js
```
