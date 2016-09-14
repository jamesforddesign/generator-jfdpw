'use strict';
var yeoman = require('yeoman-generator');
var remote = require('yeoman-remote');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
    
    scaffoldFolders: function () {
        mkdirp('website', function (err) {
            if (err) console.error(err)
        });
    },

    _private_createDatabase: function (answers) {
        //console.log(answers.dbhost);
    },

    prompting: function () {
        //Get Database Details
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
        }
        // Get Repo Details

        ]).then( function (answers) {
            this._private_createDatabase(answers);
        }.bind(this));
    },


    writing: function () {
        var done = this.async();

        // Get Stalfos
        remote('hankchizljaw', 'stalfos', function (err, cachePath) {
            this.fs.copy(
                path.join(cachePath, ''),
                this.destinationPath('')
            );
            done();
        }.bind(this));

        // Get Latest Processwire
        remote('ryancramerdesign', 'ProcessWire', function (err, cachePath) {
            this.fs.copy(
                path.join(cachePath, ''),
                this.destinationPath('website')
            );
            done();
        }.bind(this));

        // Get JFD Processwire Site Profile
        remote('jamesforddesign', 'base-processwire', function (err, cachePath) {
            this.fs.copy(
                path.join(cachePath, ''),
                this.destinationPath('website')
            );
            done();
        }.bind(this));
    }

    // Install ProcessWire

    // Run Gulp

    // Tidy Up

    // Commit

});
