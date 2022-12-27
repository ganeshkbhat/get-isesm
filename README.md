# check-esm
Javascript functions to check if the node.js file is a ES Module or a CJS/ JS Module or Script


Find the demos in the [demos folder](./demos)


---


### INSTALL

```npm install check-esm --save```


---


### USAGE


ESM Module : `import { _isESCode } from "check-esm";`


CommonJS Script/ Module : `const checkEsm = require("check-esm");`


`isESCode("./path/to/file.mjs")`


[Simple Medium blog for usage] (https://medium.com/@ganeshsurfs/exploring-node-js-and-js-checking-is-a-package-is-a-commonjs-script-module-or-a-esm-module-2847c456d93f)


---


### Package APIs


There are other script APIs you may wish to explore that includes the following:

`_checkModuleImports` : Check if a module can be imported.
 Usage:
`_checkModuleImports(absPath)`

`_requiresObject` : Check require.cache list in code - used in your code's process global context.
 Usage:
`_requiresObject()`


`_requireRegex` : Check to see if there are `require()` syntax in code.
 Usage:
`_requireRegex(absPath)`


`_importRegex` : Check to see if there are `import()` syntax in code.
 Usage:
`_importRegex(absPath)`


`_importESRegex` : Check to see if there are `import x from ""` syntax in code.
 Usage:
`_importESRegex(absPath)`


`_importRegexExtended` : Check to see if there are `import()` syntax in code.
 Usage:
`_importRegexExtended(absPath)`


`_isESMFileExtension` : Check to see if the file has .mjs/ .cjs/ .js extension.
 Usage:
`_isESMFileExtension(absPath)`


`_isESMCodeBase` : Check to see if the code is ESM Module.
 Usage:
`_isESMCodeBase(absPath)`


`_isCJSCodeBase` : Check to see if the code is CommonJS Script or Module.
 Usage:
`_isCJSCodeBase(absPath)`


`_isModuleInPackageJson` : Checks type key's value in package.json.
 Usage:
`_getPackageJsonRoot(startdirectory, options)`


`_isESCode` : Multiple checks to check if the code is ESM Module (other than package.json type key's value check in package.json).
 Usage:
`_isModuleInPackageJson(absPath, packagejsonPath, returns)`


---



### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/get-isesm/issues)


# License

[MIT License](./LICENSE)
