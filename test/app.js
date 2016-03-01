'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-express-ts:app', function () {
  this.timeout = 0;  // Because the tests take a pretty long time
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({someOption: true})
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
