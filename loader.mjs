/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i check-esm --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: loader.mjs
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


globalThis.loadedURLs = [];

/**
 *
 *
 * @export
 * @param {*} specifier
 * @param {*} context
 * @param {*} nextResolve
 * @return {*} 
 */
export function resolve(specifier, context, nextResolve) {
    const { parentURL = null } = context;
    // Doing nothing
    return nextResolve(specifier);
}

/**
 *
 *
 * @export
 * @param {*} url
 * @param {*} context
 * @param {*} next
 * @return {*} 
 */
export function load(url, context, next) {
    globalThis.loadedURLs.push(url);
    console.log("Url + globalThis.loadedURLs: ", url, globalThis.loadedURLs);
    return next(url, context);
}
