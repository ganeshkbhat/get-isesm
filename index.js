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

const { 
    _getRoot, _getPackageJsonRoot, _checkModuleImports, _requiresObject, 
    _requireRegex, _importRegex, _importESRegex, _importRegexExtended, 
    _isESMFileExtension, _isESMCodeBase, _isCJSCodeBase, _isESCode, _isModuleInPackageJson,
    _checkRequireModuleImports, _isCJSFileExtension, _isNodeCompatibleFileExtension,

    getRoot, getPackageJsonRoot, checkModuleImports, requiresObject, 
    requireRegex, importRegex, importESRegex, importRegexExtended, 
    isESMFileExtension, isESMCodeBase, isCJSCodeBase, isESCode, isModuleInPackageJson,
    checkRequireModuleImports, isCJSFileExtension, isNodeCompatibleFileExtension
} = require("get-imported");


module.exports._getRoot = _getRoot;
module.exports._getPackageJsonRoot = _getPackageJsonRoot;
module.exports._checkModuleImports = _checkModuleImports;
module.exports._requiresObject = _requiresObject;
module.exports._requireRegex = _requireRegex;
module.exports._importRegex = _importRegex;
module.exports._importESRegex = _importESRegex;
module.exports._importRegexExtended = _importRegexExtended;
module.exports._isCJSFileExtension = _isCJSFileExtension;
module.exports._isESMFileExtension = _isESMFileExtension;
module.exports._isESMCodeBase = _isESMCodeBase;
module.exports._isCJSCodeBase = _isCJSCodeBase;
module.exports._isESCode = _isESCode;
module.exports._isModuleInPackageJson = _isModuleInPackageJson;
module.exports._checkRequireModuleImports = _checkRequireModuleImports;
module.exports._isNodeCompatibleFileExtension = _isNodeCompatibleFileExtension;


module.exports.getRoot = _getRoot;
module.exports.getPackageJsonRoot = _getPackageJsonRoot;
module.exports.checkModuleImports = _checkModuleImports;
module.exports.requiresObject = _requiresObject;
module.exports.requireRegex = _requireRegex;
module.exports.importRegex = _importRegex;
module.exports.importESRegex = _importESRegex;
module.exports.importRegexExtended = _importRegexExtended;
module.exports.isCJSFileExtension = _isCJSFileExtension;
module.exports.isESMFileExtension = _isESMFileExtension;
module.exports.isESMCodeBase = _isESMCodeBase;
module.exports.isCJSCodeBase = _isCJSCodeBase;
module.exports.isESCode = _isESCode;
module.exports.isModuleInPackageJson = _isModuleInPackageJson;
module.exports.checkRequireModuleImports = _checkRequireModuleImports;
module.exports.isNodeCompatibleFileExtension = _isNodeCompatibleFileExtension;

module.exports.default = _isESCode;

