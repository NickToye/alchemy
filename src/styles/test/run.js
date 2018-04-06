// Tests :: run.js

'use strict';

let sassTrue = require('sass-true');
let glob = require('glob');

// Run tests
glob.sync('test/_*.scss').forEach(function(file) {
  sassTrue.runSass({ file: file }, describe, it);
});
