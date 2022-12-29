/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: Module to fetch all required and imported modules in Javascript and NodeJS. 
 *      The module has JS functions to check all imports or required modules and check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i get-imported --save
 * Github: https://github.com/ganeshkbhat/get-imports
 * npmjs Link: https://www.npmjs.com/package/get-imported
 * File: demos/parser..js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const parser = require("../index.js");
const path = import('path');

const someModuleCJS = require('../demos/file.cjs');
const someModuleJS = require('../demos/file.js');
const acorn = require("chai");


const expect = require('chai').expect;
describe('test-.mjs::require-urls: Test Suite for require-urls Files', function () {
    describe('test-.js::require-urls: [Test A] Test Suite for require-urls in main repo directory', function () {

        it('[Test A] Test for all imports using _requireRegex', function (done) {
            let arr = parser._requireRegex("./demos/parser.require.regex.js");
            expect(JSON.stringify(arr)).to.equal(JSON.stringify({
                '../index.js': '../index.js',
                path: 'path',
                './file.cjs': './file.cjs',
                './file.js': './file.js',
                chai: 'chai'
            }));
            done();
        });
    });
});

