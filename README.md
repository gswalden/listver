[![npm version](https://badge.fury.io/js/listver.svg)](https://badge.fury.io/js/listver)
[![Build status](https://travis-ci.org/gswalden/listver.svg?branch=master)](https://travis-ci.org/gswalden/listver)
[![Dependencies](https://david-dm.org/gswalden/listver.svg)](https://david-dm.org/gswalden/listver)

### Install
```sh
npm install --save listver
```

### Use
```js
var listver = require('listver');
var list = listver({
  includeDev: false // include devDependencies when true
  includeMain: false // include main/parent module when true
  asArray: false // return as an array when true
});

console.dir(list);
/* {
  'list-deps': '0.2.2',
  'load-module-pkg': '0.1.0',
  lodash: '4.0.0'
} */
```

### Motivation
We wanted a way to easily log which versions of our dependencies were being loaded on application startup, especially when dealing with packages outside the public npm registry. This small library will read the `package.json` of every direct dependency and return an object containing their versions.
