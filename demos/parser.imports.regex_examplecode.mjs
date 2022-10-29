/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: JS functions to check if the file is a ES Module or a CJS/ JS Module or Script
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/isesm
 * npmjs Link: 
 * File: demos/parser.imports.regex_examplecode.mjs
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


function getImports() {
    const regex = /import(?:[\s.*]([\w*{}\n\r\t, ]+)[\s*]from)?[\s*](?:["'](.*[\w]+)["'])?/gm;

    // Alternative syntax using RegExp constructor
    // const regex = new RegExp('import(?:[\\s.*]([\\w*{}\\n\\r\\t, ]+)[\\s*]from)?[\\s*](?:["\'](.*[\\w]+)["\'])?', 'gm')

    const str = `import {
  Component
} from '@angular2/core';
import defaultMember from "module-name";
import   *    as name from "module-name  ";
import   {  member }   from "  module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , member3 as alias3 } from "module-name";
import {
  Component
} from '@angular2/core';
import defaultMember from "\$module-name";
import defaultMember, { member, member } from "module-name";
import defaultMember, * as name from "module-name";

import   *    as name from "module-name  "
import   {  member }   from "  module-name"
import { member as alias } from "module-name"
import { member1 , member2 } from "module-name"
import { member1 , member2 as alias2 , member3 as alias3 } from "module-name"
import {
  Component
} from '@angular2/core'
import defaultMember from "\$module-name"
import defaultMember, { member, member } from "module-name"
import defaultMember, * as name from "module-name"

import "module-name";
import React from "react"
import { Field } from "redux-form"
import "module-name";

import {
	PlaneBufferGeometry,
	OctahedronGeometry,
	TorusBufferGeometry
} from '../geometries/Geometries.js';

import {
	PlaneBufferGeometry,
	OctahedronGeometry,
	TorusBufferGeometry
} from '../geometries/Geometries.js'

import("whatever.js");
import("whatever.js")

import { Field } from "redux-form";
import MultiContentListView from "./views/ListView";
import MultiContentAddView from "./views/AddView";
import MultiContentEditView from "./views/EditView";

import { Field } from "redux-form"
import MultiContentListView from "./views/ListView"
import MultiContentAddView from "./views/AddView"
import MultiContentEditView from "./views/EditView"


<MenuItem value="^\$" primaryText="Não exibir importados" />
<MenuItem value="\\\\w+" primaryText="Exibir importados" />

// *Add all needed dependency to this module
// *app requires those import modules to function


*/

/**
* 
 *Add all needed dependency to this module
 *app requires those import modules to function
 * 
**/

let modules = [];`;
    let m;
    let arr = [];
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        

        // The result can be accessed through the `m`-variable.
        m.forEach(function (match, groupIndex) {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            if (groupIndex === 2) arr.push(match);
        });
        
    }
    console.log(arr);
}

getImports();
