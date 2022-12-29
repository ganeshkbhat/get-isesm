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


const expect = require('chai').expect;
describe('test-.mjs::require-urls: Test Suite for require-urls Files', function() {
    describe ('test-.js::require-urls: [Test A] Test Suite for require-urls in main repo directory', function() {
        
        it('[Test A] Test for file.mjs is _isESMCodeBase', function(done) {
            let c = parser._isESMCodeBase("./demos/file.mjs");
            expect(c).to.equal(true);
            done();
        });

        it('[Test A] Test for file.cjs is _isESMCodeBase', function(done) {
            let c = parser._isESMCodeBase("./demos/file.cjs");
            expect(c).to.equal(true);
            done();
        });

        it('[Test A] Test for file.js is _isESMCodeBase', function(done) {
            let c = parser._isESMCodeBase("./demos/file.js");
            expect(c).to.equal(false);
            done();
        });

        it('[Test A] Test for file.mjs is _isCJSCodeBase', function(done) {
            let c = parser._isCJSCodeBase("./demos/file.mjs");
            expect(c).to.equal(false);
            done();
        });

        it('[Test A] Test for file.cjs is _isCJSCodeBase', function(done) {
            let c = parser._isCJSCodeBase("./demos/file.cjs");
            expect(c).to.equal(false);
            done();
        });

        it('[Test A] Test for file.js is _isCJSCodeBase', function(done) {
            let c = parser._isCJSCodeBase("./demos/file.js");
            expect(c).to.equal(true);
            done();
        });
    });
});















