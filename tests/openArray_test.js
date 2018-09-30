"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectFactory_1 = require("../../ObjectFactory/ObjectFactory");
var OpenArray_1 = require("../OpenArray");
var arr = ObjectFactory_1.ObjectFactory.getInstance(OpenArray_1.OpenArray, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]]);
arr.remove_allAfterLast(4).remove_allBeforeFirst(3);
arr.prepend_one(100).append_one(100).replace_allOf(8, 8 * 2);
arr = arr.replace_adjacentAt(3, ['hello', 'what?']).export();
console.log(arr);
/***
 Example of using OpenArray

 let arr = ObjectFactory.getInstance(OpenArray, [[1,2,3,4,5,6,7,8,9]]);
 arr.remove.allAfterFirst(4);
 arr.remove.allBeforeFirst(3);
 arr.prepend.one(100);
 arr.append.one(100);

 ***/ 
