"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var PublicArray_1 = require("../PublicArray");
var arr = ObjectFactory_1.ObjectFactory.getInstance(PublicArray_1.PublicArray, [[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
var otherArr = arr.data;
otherArr.length = 0;
console.log(otherArr);
console.log(arr.data);
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

 let hasStrings = arr.anyPass((item)=>{
    return typeof item === 'string';
});

 console.log(hasStrings);

 console.log(arr.firstIndexOf(4));

 console.log(arr.startsWith([100, 3]));

 console.log(arr.sort.shuffle());

 console.log(arr.sort);
 **************/ 
