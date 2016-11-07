# generator-jfdpw

> A Yeoman Generator which will create everything you need to start a ProcessWire project

## Installation

Yeoman requires Node and NPM. So first check if you have them installed by running the following in your terminal.

```bash
node -v
npm -v
```

If you get a version number to both of those, you have node.js and NPM installed. If not, head over to [node.js](https://nodejs.org/) and follow the installation instructions there.

Next, install [Yeoman](http://yeoman.io) and generator-jfdpw using [npm](https://www.npmjs.com/).

```bash
npm install -g yo
npm install -g generator-jfdpw
```

Then generate your new project, create a repo in the JFD GitHub account. Clone it to your local machine and then run the following terminal command in that folder

```bash
yo jfdpw
```

To install ProcessWire, point MAMP at the website folder. Goto your defined address (eg. bob.websitename/processwire) in your browser and install ProcessWire from the Website folder, using `JFD Base` as your installation profile.



## Front-End Workflow

### Getting started

#### Important

**If you don't have gulp installed on your machine, you need to [follow this article](http://blog.teamtreehouse.com/install-node-js-npm-mac), then run `npm install --global gulp-cli` in your terminal.**

The front-end uses [Stalfos]( [https://github.com/hankchizljaw/stalfos](https://github.com/hankchizljaw/stalfos)) as its base. The documentation for Stalfos [lives here](https://stalfos.io). 

To get the front-end code compiling: 

1. Open you terminal and `cd` to `{your project directory}/front-end/`
2. Run `npm install`
3. The gulp system is now ready to run for this project 🚀

### Gulp commands

There are two gulp commands that you need to run, depending on what you are working on. 

#### Watch

This task will sit and watch files in the `front-end` directory and compile them to the `website` directory automatically. 

To run the task, make sure you are in the `front-end` directory and run `gulp watch`

#### Serve

Serve will spin up a little local version of the front-end of the website. This tends to only be used when the front-end templates are being built. 

Like **watch**, it will keep an eye on your `front-end` directory and live-reload your browser accordingly. 

To run the task, make sure you are in the `front-end` directory and run `gulp serve`. You can then go to http://localhost:8003 to see the website.
