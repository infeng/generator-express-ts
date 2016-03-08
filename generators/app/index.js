'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var glob = require('glob');
var mkdirp = require('mkdirp');
var generators = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    // add option to skip install
    this.option('skip-install');

  },
  prompting: {

    dir: function () {
      if (this.options.createDirectory !== undefined) {
        return true;
      }

      var done = this.async();
      var prompt = [{
        type: 'confirm',
        name: 'createDirectory',
        message: 'Would you like to create a new directory for your project?'
      }];

      this.prompt(prompt, function (response) {
        this.options.createDirectory = response.createDirectory;
        done();
      }.bind(this));
    },
    dirname: function () {
      if (!this.options.createDirectory || this.options.dirname) {
        return true;
      }

      var done = this.async();
      var prompt = [{
        type: 'input',
        name: 'dirname',
        message: 'Enter directory name'
      }];

      this.prompt(prompt, function (response) {
        this.options.dirname = response.dirname;
        done();
      }.bind(this));
    },
    viewEngine: function () {
      if (this.options.viewEngine) {
        return true;
      }

      var done = this.async();
      var prompt = [{
        type: 'list',
        name: 'viewEngine',
        message: 'Select a view engine to use',
        choices: [
          'Jade',
          'ejs'
        ],
        store: true
      }];

      this.prompt(prompt, function (response) {
        this.options.viewEngine = response.viewEngine.toLowerCase();
        done();
      }.bind(this));
    }
  },

  writing: {
    buildEnv: function () {

      //create directory
      if (this.options.createDirectory) {
        this.destinationRoot(this.options.dirname);
        this.appname = this.options.appname;
      }

      //shared across all generators
      this.sourceRoot(path.join(__dirname, 'templates', 'shared'));
      glob.sync('**', {cwd: this.sourceRoot()}).map(function (file) {
        this.template(file, file.replace(/^_/, ''));
      }, this);

      //basic
      this.sourceRoot(path.join(__dirname, 'templates', 'basic'));
      this.template('.', '.');

      //.vscode
      mkdirp.sync('.vscode');
      this.sourceRoot(path.join(__dirname, 'templates', 'basic', '.vscode'));
      this.template('.', '.vscode');

      //views
      var views = this.options.viewEngine;
      this.sourceRoot(path.join(__dirname, 'templates', 'views', views));
      if (this.options.viewEngine === 'ejs') {
        this.bulkDirectory('.', 'app/views');
      } else {
        this.directory('.', 'app/views');
      }
    },
    assetDirs: function () {
      mkdirp.sync('app/public');
      mkdirp.sync('app/public/javascripts');
      mkdirp.sync('app/public/stylesheets');
      mkdirp.sync('app/public/images');
    }
  },

  install: function () {
    if (!this.options['skip-install']) {
      this.installDependencies();
    }
  }
});
