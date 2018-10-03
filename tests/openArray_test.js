"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var OpenArray_1 = require("../OpenArray");
var arr = ObjectFactory_1.ObjectFactory.getInstance(OpenArray_1.OpenArray, [[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
console.log(arr);
/***
 Example of using OpenArray


 arr.remove.allAfterFirst(4);
 arr.remove.allBeforeFirst(3);
 arr.prepend.one(100);
 arr.append.one(100);

 ***/ 
