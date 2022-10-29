/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i check-esm --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: index.mjs
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


import {
    _getRoot, _getPackageJsonRoot, _checkModuleImports,
    _requiresObject, _requireRegex, _importRegex, _importESRegex,
    _importRegexExtended, _isESMFileExtension, _isESMCodeBase,
    _isCJSCodeBase, _isESCode, _isModuleInPackageJson
} from './index.js';

import * as isesm from "./index.js";

export default isesm;

export {
    _getRoot, _getPackageJsonRoot, _checkModuleImports,
    _requiresObject, _requireRegex, _importRegex, _importESRegex,
    _importRegexExtended, _isESMFileExtension, _isESMCodeBase,
    _isCJSCodeBase, _isESCode, _isModuleInPackageJson
};

