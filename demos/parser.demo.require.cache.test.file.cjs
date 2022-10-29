/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i require-urls --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: demos/parser.demo.require.cache.test.file.cjs
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var test = require('./parser.demo.require.cache.test.file.js');
var tester = import("./parser.demo.require.cache.test.file.js");

var path = require('path');
var c = require('fs');
var f = require('child_process');


// if (!!import.meta.cache) {
//     for (let p in import.meta.cache) {
//         console.log(trim(p));
//     }
// }

// function trim(p) {
//     var re = /(.*?).js/;
//     var basename = path.basename(p);
//     var moduleName = re.exec(basename)[1];
//     return [moduleName, p];
// }


