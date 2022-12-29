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
const someModuleCJS = import('../demos/file.cjs');
const someModuleJS = import('../demos/file.mjs');
const someJS = import('../demos/file.js');

const expect = require('chai').expect;

describe('test-.mjs::require-urls: Test Suite for require-urls Files', function() {
    describe ('test-.js::require-urls: [Test A] Test Suite for require-urls in main repo directory', function() {
        
        it('[Test A] Test for all imports using _importRegexExtended', function(done) {
            let arr = parser._importRegexExtended(__filename);
            expect(JSON.stringify(arr)).to.equal(JSON.stringify({
                path: 'path',
                '../demos/file.cjs': '../demos/file.cjs',
                '../demos/file.mjs': '../demos/file.mjs',
                '../demos/file.js': '../demos/file.js'
              }));
            done();
        });

    });
});

