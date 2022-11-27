/*
const simple = require("./modulesecond");
simple();

import { addTwo, simple} from './EsModuleSecond.mjs';
// Prints: 8
console.log(addTwo(6));

// import {simple} from './EsModuleSecond.mjs';
simple();
// simple2();

import simple23 from './EsModuleSecond.mjs';
simple23();
*/
import * as a from './EsModuleSecond.mjs';
a.simple();
