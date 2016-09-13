'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({

    _private_createDatabase: function (answers) {
        console.log(answers.dbhost);


    },

    prompting: function () {
        return this.prompt([{
            type    : 'input',
            name    : 'dbhost',
            message : 'Your Database Hostname',
            default : 'localhost'
        },
        {
            type    : 'input',
            name    : 'dbname',
            message : 'Your Database Name'
        },
        {
            type    : 'input',
            name    : 'dbuser',
            message : 'Your Database Username'
        },
        {
            type    : 'password',
            name    : 'dbpass',
            message : 'Your Database Password'
        },
        {
            type    : 'input',
            name    : 'dbport',
            message : 'Your Database Port',
            default : '3306'
        }]).then( function (answers) {
            this._private_createDatabase(answers);
        }.bind(this));
    },

    getStalfos: function () {
        this.remote('hankchizljaw', 'stalfos', function(err, remote) {
            remote.bulkDirectory('.', '.');
        });
    },

    getProcessWire: function () {
        this.remote('ryancramerdesign', 'ProcessWire', function(err, remote) {
            remote.bulkDirectory('.', 'website');
        });
    },

    getTemplates: function () {
        this.remote('jamesforddesign', 'base-processwire', function(err, remote) {
            remote.bulkDirectory('.', 'website');
        });
    },

    installProcessWire: function () {
    }

});
