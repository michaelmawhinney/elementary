# [elementary](http://git.io/elementary)

[![Build Status](https://img.shields.io/travis/michaelmawhinney/elementary/master.svg)](https://travis-ci.org/michaelmawhinney/elementary)
[![devDependency Status](https://img.shields.io/david/dev/michaelmawhinney/elementary.svg)](https://david-dm.org/michaelmawhinney/elementary?type=dev)
![Bower version](https://img.shields.io/bower/v/elementary.svg)
[![npm version](https://img.shields.io/npm/v/elementary-css.svg)](https://www.npmjs.com/package/elementary-css)

**elementary** is a bare-essentials icon set for modern browsers. It's pure css and ultra-lightweight. For any icon, only a single element is needed, like a `<span>`. Written in Sass, it's fully customizable.

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Versioning](#versioning)
- [Copyright and license](#copyright-and-license)

## Quick start

Several options are available:

- [Download the latest release.](https://github.com/michaelmawhinney/elementary/archive/v0.3.8.zip)
- Clone the repo: `git clone https://github.com/michaelmawhinney/elementary.git`
- Install with [npm](https://www.npmjs.com): `npm install elementary-css@0.3.8`
- Install with [Bower](https://bower.io): `bower install elementary#v0.3.8`

### What's included

#### Precompiled and minified CSS

```
dist/
├── elementary.css
└── elementary.min.css
```

#### Source Code

```
scss/
├── elementary/
│   ├── _arrow.scss
│   ├── _bars.scss
│   ├── _check.scss
│   ├── _common.scss
│   ├── _constants.scss
│   ├── _functions.scss
│   ├── _gear.scss
│   ├── _grid.scss
│   ├── _heart.scss
│   ├── _home.scss
│   ├── _icons.scss
│   ├── _loader.scss
│   ├── _lock.scss
│   ├── _mail.scss
│   ├── _pencil.scss
│   ├── _pen.scss
│   ├── _search.scss
│   ├── _star.scss
│   ├── _times.scss
│   └── _utilities.scss
└── elementary.scss
```

### Compiling

**elementary** uses [Gulp](http://gulpjs.com) for its build system.

#### Installing Gulp

To install Gulp, you must **first** [download and install node.js](https://nodejs.org/download/) (which includes npm).

Then, from the command line:

1. Install `gulp` globally with `npm install -g gulp`.
2. Navigate to the root `/elementary/` directory, then run `npm install`. npm will look at the `package.json` file and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Gulp commands provided from the command line.

#### Available Gulp commands

##### `gulp css` (Compile CSS)

Regenerates the `/dist/` directory with compiled and minified CSS files.

##### `gulp watch` (Watch)

Watches the Sass source files and automatically recompiles them to CSS whenever you save a change.

##### `gulp test` (Run tests)

Lints Sass files, compiles, minifies, then lints CSS files.

##### `gulp` (Build and run tests)

This is the same as running `gulp css`.

#### Troubleshooting

If you encounter problems installing dependencies or running Gulp commands, first delete the `/node_modules/` directory generated by npm, then rerun `npm install`.

## Bugs and feature requests

Have a bug or a feature request? Please search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/michaelmawhinney/elementary/issues/new).

## Versioning

**elementary** is maintained under [the Semantic Versioning guidelines](http://semver.org/) when possible.

See [the Releases section of the GitHub project](https://github.com/michaelmawhinney/elementary/releases) for changelogs for each release version of **elementary**.

## Copyright and license

Code copyright 2016 Michael R Mawhinney Jr and released under the [MIT License](https://github.com/michaelmawhinney/elementary/blob/master/LICENSE).
