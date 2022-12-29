/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check all imports or required modules and check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i get-imported --save
 * Github: https://github.com/ganeshkbhat/get-imports
 * npmjs Link: https://www.npmjs.com/package/get-imported
 * File: demos/parser.require.cache.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const path = require('path');
const someModuleCJS = require('./file.cjs');
const someModuleJS = require('./file.js');
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

