/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: demos/parser.demo.require.cache.test.file.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var test = require('./parser.demo.require.cache.test.file.cjs');
var tester = import("./parser.demo.require.cache.test.file.cjs");

var path = require('path');
var c = require('fs');
var f = require('child_process');
