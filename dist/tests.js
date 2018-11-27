"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
console.log('hello');
//let arr = new PublicArrayReplacer([1, 2, 3, 4, 5, 6, 7, 8, 9]);
var arr = index_1.getPublicArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(arr.remove.byIndex(0).byIndexes([1, 3, 5]).adjacentAt(1, 2));
var arrCopy = arr.copy;
console.log(arrCopy);
/****************


let otherArr = arr.data;

otherArr.length = 0;

console.log(otherArr);

console.log(arr.data);
 *************/
/************
 arr.remove.allAfterFirst(6);
 arr.remove.allBeforeFirst(3);
 arr.prepend([100]);
 arr.append([100]);

 let anotherArr = arr.copy;

 arr.append([888]);

 anotherArr.append([3000]);

 console.log(arr.data);
 console.log(anotherArr.data);
 console.log(arr.length);

 let hasStrings = arr.anyPass((item) => typeof item === 'string' );

 console.log(hasStrings);

 console.log(arr.firstIndexOf(4));

 console.log(arr.startsWith([100, 3]));

 console.log(arr.sort.shuffle());

 console.log(arr.sort);
 **************/ 
