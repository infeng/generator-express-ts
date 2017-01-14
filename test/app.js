'use strict';
var path = require('path');
var helpers = require('yeoman-test');
var async = require('async');

describe('generator-express-ts:app', function () {
  this.timeout(0);  // Because the tests take a pretty long time
  it('runs with each view engine as options', function (done) {
    // Runs for each view engine
    async.each(['ejs', 'pug'], function (viewengine, callback) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({createDirectory: true, dirname: 'generator-express-ts', viewEngine: viewengine})
        .on('end', callback);
    }, function (err) {
      done(err);
    });
  });
  it('runs with each view engine as prompts', function (done) {
    // Runs for each view engine
    async.each(['ejs', 'pug'], function (viewengine, callback) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({createDirectory: true, dirname: 'generator-express-ts', viewEngine: viewengine})
        .on('end', callback);
    }, function (err) {
      done(err);
    });
  });
  it('runs without skip-install', function (done) {
    // Runs for each view engine
    async.each(['ejs', 'pug'], function (viewengine, callback) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({viewEngine: viewengine, 'skip-install': false}).on('end', callback);
    }, function (err) {
      done(err);
    });
  });
  it('runs without a subdirectory', function (done) {
    // Runs for each view engine
    async.each(['ejs', 'pug'], function (viewengine, callback) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .withOptions({viewEngine: viewengine}).on('end', callback);
    }, function (err) {
      done(err);
    });
  });
});

