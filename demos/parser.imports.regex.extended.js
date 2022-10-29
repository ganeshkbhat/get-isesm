/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: demos/parser.imports.regex.extended.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const parser = require("../index.js");
const path = import('path');
const someModuleCJS = import('./parser.demo.require.cache.test.file.cjs');
const someModuleJS = import('./parser.demo.require.cache.test.file.js');
const acorn = import("chai");

let arr = parser._importRegexExtended("./demos/src/parser.imports.regex.extended.js");
console.log(arr);
