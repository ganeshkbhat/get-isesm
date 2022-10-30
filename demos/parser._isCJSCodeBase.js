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

const parser = require("../index.js");
const path = import('path');

let c = parser._isCJSCodeBase("./demos/isESCode.mjs");
console.log('_isCJSCodeBase("./demos/isESCode.mjs")', c);

c = parser._isESMCodeBase("./demos/isESCode.mjs");
console.log('_isESMCodeBase("./demos/isESCode.mjs")', c);

c = parser._isESCode("./demos/isESCode.mjs");
console.log('_isESCode("./demos/isESCode.mjs")', c);

c = parser._isCJSCodeBase("./demos/isESCode.cjs");
console.log('_isCJSCodeBase("./demos/isESCode.cjs")', c);

c = parser._isESMCodeBase("./demos/isESCode.cjs");
console.log('_isESMCodeBase("./demos/isESCode.cjs")', c);

c = parser._isESCode("./demos/isESCode.cjs");
console.log('_isESCode("./demos/isESCode.cjs")',c);

c = parser._isCJSCodeBase("./demos/isESCode.js");
console.log('_isCJSCodeBase("./demos/isESCode.js")', c);

c = parser._isESMCodeBase("./demos/isESCode.js");
console.log('_isESMCodeBase("./demos/isESCode.js")', c);

c = parser._isESCode("./demos/isESCode.js");
console.log('_isESCode("./demos/isESCode.js")',c);

