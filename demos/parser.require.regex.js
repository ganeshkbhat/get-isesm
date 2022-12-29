/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check all imports or required modules and check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i get-imported --save
 * Github: https://github.com/ganeshkbhat/get-imports
 * npmjs Link: https://www.npmjs.com/package/get-imported
 * File: demos/parser.require.regex.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const parser = require("../index.js");
const path = require('path');
const someModuleCJS = require('./file.cjs');
const someModuleJS = require('./file.js');
const acorn = require("chai");

let arr = parser._requireRegex("./demos/parser.require.regex.js");
console.log(arr);
