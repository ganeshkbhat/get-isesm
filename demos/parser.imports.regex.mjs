/**
 * 
 * Package: r
 * Author: Ganesh B
 * Description: JS functions to check all imports or required modules and check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i get-imported --save
 * Github: https://github.com/ganeshkbhat/get-imports
 * npmjs Link: https://www.npmjs.com/package/get-imported
 * File: demos/parser.imports.regex.mjs
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


import * as parser from "../index.js";
const path = import('path');
const someModuleCJS = import('./file.cjs');
const someModuleJS = import('./file.js');
const acorn = import("chai");

let arr = parser._importESRegex("./demos/parser.imports.regex.mjs");
console.log(arr);

