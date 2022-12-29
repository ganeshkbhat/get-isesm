/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check all imports or required modules and check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i get-imported --save
 * Github: https://github.com/ganeshkbhat/get-imports
 * npmjs Link: https://www.npmjs.com/package/get-imported
 * File: demos/parser.demo.require.cache.test.file.cjs
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const parser = require("../index.js");
const path = import('path');


let c = parser._isESCode("./demos/file.mjs");
console.log('_isESCode("./demos/file.mjs")', c);

c = parser._isESCode("./demos/file.cjs");
console.log('_isESCode("./demos/file.cjs")', c);

c = parser._isESCode("./demos/file.js");
console.log('_isESCode("./demos/file.js")', c);

