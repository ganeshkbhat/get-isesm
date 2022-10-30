/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i check-esm --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: index.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const path = require('path');
const fs = require('fs');

const { _getRoot, _getPackageJsonRoot, _checkModuleImports, _requiresObject, _requireRegex, _importRegex, _importESRegex, _importRegexExtended, _isESMFileExtension, _isESMCodeBase, _isCJSCodeBase, _isESCode, _isModuleInPackageJson } = require("get-imported");


module.exports._getRoot = _getRoot;
module.exports._getPackageJsonRoot = _getPackageJsonRoot;
module.exports._checkModuleImports = _checkModuleImports;
module.exports._requiresObject = _requiresObject;
module.exports._requireRegex = _requireRegex;
module.exports._importRegex = _importRegex;
module.exports._importESRegex = _importESRegex;
module.exports._importRegexExtended = _importRegexExtended;
module.exports._isESMFileExtension = _isESMFileExtension;
module.exports._isESMCodeBase = _isESMCodeBase;
module.exports._isCJSCodeBase = _isCJSCodeBase;
module.exports._isESCode = _isESCode;
module.exports._isModuleInPackageJson = _isModuleInPackageJson;
module.exports.default = _isESCode;

