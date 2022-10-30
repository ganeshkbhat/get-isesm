const tester = import("../index.js");

import { default as _isESCode } from "./isESCode.mjs";
import * as fs from "fs";
import console from 'console';


if (globalThis.loadedURLs) {
    for (let p of globalThis.loadedURLs) {
        console.log("globalThis.loadedURLs: ", p);
    }
}
