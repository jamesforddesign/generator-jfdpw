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
        remote('processwire', 'processwire', function (err, cachePath) {
            this.fs.copy(
                path.join(cachePath, ''),
                this.destinationPath('website'),
                {  
                    ignore: "site-*"
                }
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

});
