# check-esm
Module to fetch all required and imported modules in Javascript and NodeJS. The module has JS functions to check all imports or required modules and check if the file is a ES Module or a CJS/ JS Module or Script

Find the demos in the [demos folder](./demos)


---


### INSTALL

```npm install check-esm --save```


---


### USAGE


ESM Module

`import { _isESCode } from "check-esm";`


CommonJS Script/ Module

```
const checkEsm = require("check-esm");`
isESCode("./path/to/file.mjs")
```


[Simple Medium blog for usage] (https://medium.com/@ganeshsurfs/exploring-node-js-and-js-checking-is-a-package-is-a-commonjs-script-module-or-a-esm-module-2847c456d93f)


---


### Package APIs


There are other script APIs you may wish to explore that includes the following:

#### `.checkModuleImports` 
Check if a module can be imported using `import()`

Usage:

`.checkModuleImports(absPath)`



#### `.requiresObject`
Check require.cache list in code - used in your code's process global context.

Usage:

`.requiresObject()`



#### `.requireRegex`
Check to see if there are `require()` syntax in code.

Usage:

`.requireRegex(absPath, basePath = "", useProcessCwd = false)`

`.requireRegex(absPath)`



#### `.importRegex`
Check to see if there are `import()` syntax in code.

Usage:

`.importRegex(absPath, basePath = "", useProcessCwd = false)`

`.importRegex(absPath)`



#### `.importESRegex`
Check to see if there are `import x from ""` syntax in code.

Usage:

`.importESRegex(absPath, basePath = "", useProcessCwd = false)`

`.importESRegex(absPath)`



#### `.importRegexExtended`
Check to see if there are `import()` syntax in code.

Usage:

`.importRegexExtended(absPath, basePath = "", useProcessCwd = false)`

`.importRegexExtended(absPath)`



#### `.isESMFileExtension`
Check to see if the file has `.mjs`/ `.cjs`/ `.js` extension.

Usage:

`.isESMFileExtension(absPath)`



#### `.isNodeCompatibleFileExtension`
Check to see if the file has `.mjs`/ `.cjs`/ `.js` / `.node` / `.wasm` extension.

Usage:

`.isNodeCompatibleFileExtension(absPath)`



#### `.isESMCodeBase`
Check to see if the code is ESM Module.

Usage:

`.isESMCodeBase(absPath)`



#### `isCJSCodeBase`
Check to see if the code is CommonJS Script or Module.

Usage:

`isCJSCodeBase(absPath)`



#### `isModuleInPackageJson`
Checks type key's value in package.json.

Usage:

`getPackageJsonRoot(startdirectory, options)`



#### `isESCode`
Multiple checks to check if the code is ESM Module (other than package.json type key's value check in package.json).

Usage:

`isModuleInPackageJson(absPath, packagejsonPath, returns)`


---



### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/get-isesm/issues)


# License

[MIT License](./LICENSE)
