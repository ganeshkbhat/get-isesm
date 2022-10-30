# check-esm
Javascript functions to check if the node.js file is a ES Module or a CJS/ JS Module or Script


---

INSTALL:

```npm install check-esm --save```

---

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
