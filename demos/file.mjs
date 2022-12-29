import * as parser from "../index.js";
const path = import('path');
const someModuleCJS = import('./parser._isESCode.js');
const someModuleJS = import('./parser.imports.regex.mjs');
const acorn = import("chai");
