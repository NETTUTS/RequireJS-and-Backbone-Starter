## What is This?

Switching to a more modular approach to writing JavaScript is unfortunately a more difficult process than we might hope. Once you understand the concept of AMD, you then have to figure out the logistics.

- How do you install RequireJS?
- What about non-AMD libraries and frameworks?
- What about dependency management?
- What about optimization or build processes (concatenation, minification)?
- What about configuration?

This repo, along with the associated video tutorial on Nettuts+ should give you an excellent start. Also, at some point, be sure to consider Yeoman with RequireJS support.

## Setup

First, of course, download this repo. Then, from the Terminal (assuming Node.js installed), install RequireJS.

    npm install requirejs

Next, we need an easy way to deal with dependency management. We'll use Bower, from the guys at Twitter.

    npm install bower

Let's now install the dependencies for this project. I'm assuming that we're building a Backbone project, so I've listed RequireJS, jQuery, Underscore, and Backbone as dependencies.

    bower install

> Please note that we're using the AMD versions of both Backbone and Underscore to make the setup process as easy as possible.

When ready to build the project, run:

    build/build.sh

this will create a new `dist` directory, copy the files over, run the r.js optimizer on assets, and clean it the file structure a bit for production. Refer to `app.build.js`for configuration options.

### CSS Imports

If you're not using a preprocessor, feel free to modularize your stylesheets, and `@import` them into a master stylesheet. During the build process, r.js will merge these files together, so that you don't have to deal with any performance hits from using `@import`.