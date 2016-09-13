'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
    scaffoldFolders: function () {
        this.mkdir("website");
    },

    getStalfos: function () {
        this.remote('hankchizljaw', 'stalfos', function(err, remote) {
            remote.copy('.', '');
        });
    },

    getProcessWire: function () {
        this.remote('ryancramerdesign', 'ProcessWire', function(err, remote) {
            remote.copy('.', 'website');
        });
    },

    createDatabase: function () {

    },

    installProcessWire: function () {

    },

    getTemplates: function () {

    }

});
