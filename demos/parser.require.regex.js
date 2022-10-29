/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: demos/parser.require.regex.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const parser = require("../index.js");
const path = require('path');
const someModuleCJS = require('./parser.demo.require.cache.test.file.cjs');
const someModuleJS = require('./parser.demo.require.cache.test.file.js');
const acorn = require("chai");

let arr = parser._requireRegex("./demos/src/parser.require.regex.js");
console.log(arr);
