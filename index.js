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

/**
 *
 *
 * @param {*} startdirectory
 * @param {string} [options={ baseType: "git" }]
 * @return {*} 
 */
function _getRoot(startdirectory, options = { baseType: "git" }) {
    function cb(fullPath) {
        if (options.fileFolder === "folder" && options.baseType === "git" && !fs.lstatSync(fullPath).isDirectory()) {
            var content = fs.readFileSync(fullPath, { encoding: 'utf-8' });
            var match = /^gitdir: (.*)\s*$/.exec(content);
            if (match) {
                return path.normalize(match[1]);
            }
        }
        return path.normalize(fullPath);
    }

    if (!options.getRootCallback) {
        options["getRootCallback"] = cb
    }

    startdirectory = startdirectory || module.parent.filename;
    if (typeof startdirectory === 'string') {
        if (startdirectory[startdirectory.length - 1] !== path.sep) {
            startdirectory += path.sep;
        }
        startdirectory = path.normalize(startdirectory);
        startdirectory = startdirectory.split(path.sep);
    }

    if (!startdirectory.length) {
        options.logger('[require-urls]: index.js: repo base git/ or node_modules/ or package.json not found in path');
        throw new Error('[require-urls]: index.js: repo base git/ or node_modules/ not found in path');
    }

    startdirectory.pop();
    var fullPath = path.join(startdirectory.join(path.sep), "." + options.baseType);

    if (fs.existsSync(fullPath)) {
        return cb(fullPath);
    } else {
        return _getRoot(startdirectory, options);
    }
}


function _checkModuleImports(absPath) {
    try {
        let f;
        if (process.versions.node.split('.')[0] > "14") {
            f = import(absPath);
        } else {
            f = require(absPath);
        }
        return true;
    } catch (e) {
        return false;
    }
}

function _requiresObject() {
    function trim(p) {
        let reqregex = /(.*?).js/;
        let basename = path.basename(p);
        let moduleName = reqregex.exec(basename)[1];
        return [moduleName, p];
    }
    let requireCache = {};
    if (!!require.cache) {
        for (let p in require.cache) {
            let file = trim(p);
            requireCache[file[0]] = file[1];
        }
    }
    return requireCache;
}

function _requireRegex(absPath) {
    var requiredFiles = {};
    var contents = fs.readFileSync(absPath, 'utf8').split('\n');

    contents.forEach(function (line) {
        var reqregex = /(?:require\('?"?)(.*?)(?:'?"?\))/;
        var matches = reqregex.exec(line);

        if (matches) {
            let basename = path.resolve(matches[1]);
            requiredFiles[matches[1]] = basename;
        }
    });
    return requiredFiles;
}

function _importRegex(absPath) {
    var requiredFiles = {};
    var contents = fs.readFileSync(absPath, 'utf8').split('\n');

    contents.forEach(function (line) {
        var importregex = /(?:import\('?"?)(.*?)(?:'?"?\))/;
        var matches = importregex.exec(line);
        if (matches) {
            let basename = path.resolve(matches[1]);
            requiredFiles[matches[1]] = basename;
        }
    });
    return requiredFiles;
}

function _importRegexExtended(absPath) {
    var requiredFiles = {};
    var contents = fs.readFileSync(absPath, 'utf8').split('\n');

    contents.forEach(function (line) {
        var importregex = new RegExp(/import\((?:["'\s]*([\w*{}\n\r\t, ]+)\s*)?["'\s](.*([@\w_-]+))["'\s].*\);$/, 'mg');
        var matches = importregex.exec(line);
        if (matches) {
            matches = matches.filter(function (item) {
                if (item !== undefined || item !== null) return item;
            });
            let basename = path.resolve(matches[1]);
            requiredFiles[matches[1]] = basename;
        }
    });
    return requiredFiles;
}

function _importESRegex(absPath) {
    const regex = /import(?:[\s.*]([\w*{}\n\r\t, ]+)[\s*]from)?[\s*](?:["'](.*[\w]+)["'])?/gm;
    const fileContentString = fs.readFileSync(absPath, 'utf8').split('\n');

    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('import(?:[\\s.*]([\\w*{}\\n\\r\\t, ]+)[\\s*]from)?[\\s*](?:["\'](.*[\\w]+)["\'])?', 'gm')

    let m, arr = {};
    while ((m = regex.exec(fileContentString)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        m.forEach(function (match, groupIndex) {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            if (groupIndex === 2) {
                let basename = path.resolve(match);
                arr[match] = basename;
                // console.log("[basename, match]: ", [basename, match]);
            };
        });

    }
    // arr = { ...arr, ..._importRegex(absPath), ..._requiresObject(absPath) } ;
    arr = { ...arr, ..._importRegex(absPath) };
    return arr;
}

/**
 *
 *
 * @param {*} absPath
 * @return {*} 
 */
function _isESMFileExtension(absPath) {
    const extMatch = /\.(c|m)?js$/.exec(absPath);
    if (!extMatch) return false;
    return extMatch[0];
}

/**
 *
 *
 * @param {*} absPath
 * @return {*} 
 */
function _isESMCodeBase(absPath) {
    let o = _importESRegex(absPath);
    if (_isESMFileExtension(absPath) === ".mjs" || !!Object.keys(o)) return true;
    return false;
}

/**
 *
 *
 * @param {*} absPath
 * @return {*} 
 */
function _isCJSCodeBase(absPath) {
    let o = _requireRegex(absPath);
    let r = _importESRegex(absPath);
    if (!Object.keys(r)) {
        if (!!Object.keys(o) || !![".cjs", ".js"].includes(_isESMFileExtension(absPath))) {
            return true;
        }
    }
    return false;
}

/**
 *
 *
 * @param {*} absPath
 * @return {*} 
 */
function _isESCode(absPath) {
    // has require
    // has import()
    // has import from ""
    // has mjs, cjs, js extension
    // 
    if ((!_isCJSCodeBase(absPath) || !!_isESMCodeBase(absPath)) && (!_requireRegex(absPath))) return true;
    return false;
}


/**
 *
 *
 * @param {*} startdirectory
 * @param {*} options
 * @return {*} 
 */
function _getPackageJsonRoot(startdirectory, options) {
    function cb(fullPath, options) {
        if (!fs.lstatSync(fullPath).isDirectory()) {
            var content = fs.readFileSync(fullPath, { encoding: 'utf-8' });
            var match = /^node_modulesdir: (.*)\s*$/.exec(content);
            if (match) {
                return path.normalize(match[1]);
            }
        }
        return path.normalize(fullPath);
    }
    return _getRoot(startdirectory, { ...options, baseType: "package.json", getRootCallback: cb });
}

/**
 *
 *
 * @param {*} absPath
 * @param {*} packagejsonPath
 * @param {*} returns
 * @return {*} 
 */
function _isModuleInPackageJson(absPath, packagejsonPath, returns) {

    function isExtMJS(ext, returns) {
        if (ext === ".mjs") {
            return (!!returns) ? (returns === "boolean") ? true : "module" : "module";
        }
        return (!!returns) ? (returns === "boolean") ? false : "script" : "script";
    }

    let ext = _isESMFileExtension(absPath), p;
    if (!!ext && !packagejsonPath) {
        let root = absPath, arr = [];
        if (root.includes("\\")) {
            arr = root.split("\\");
        } else {
            arr = root.split("/");
        }
        arr.pop();
        packagejsonPath = _getPackageJsonRoot(arr.join("/"));
    }

    if (!!packagejsonPath) {
        p = require(packagejsonPath);
        if (p.type === "module") {
            if (ext === ".mjs" || ext === ".cjs") {
                return (!!returns) ? true : "module";
            }
        } else if (p.type === "commonjs" || !p.type) {
            return isExtMJS(ext, returns);
        }
        return (!!returns) ? false : "script";
    }
    return isExtMJS(ext, returns);
}


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
