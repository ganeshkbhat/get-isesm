/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: demos/parser.require.cache.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const path = require('path');
const someModuleCJS = require('./parser.demo.require.cache.test.file.cjs');
const someModuleJS = require('./parser.demo.require.cache.test.file.js');
const acorn = require("chai");
const parser = require("../index.js");

//
// function accessRequireCache() {
//     function trim(p) {
//         let re = /(.*?).js/;
//         let basename = path.basename(p);
//         let moduleName = re.exec(basename)[1];
//         return [moduleName, p ];
//     }
//     let requireCache = {};
//     if (!!require.cache) {
//         for (let p in require.cache) {
//             let f = trim(p);
//             requireCache[f[0]] = f[1];
//         }
//     }
//     return requireCache;
// }
// 
// console.log(accessRequireCache());
//

let arr = parser._requiresObject();
console.log(arr);

