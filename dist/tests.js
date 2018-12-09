"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var PublicArray_1 = require("./PublicArray");
var arr = new PublicArray_1.PublicArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// Test 1: new PublicArray() must return instance of PublicArray:
if (arr.className && arr.className === 'PublicArray')
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
//Test 1A: the instance must contain the array passed into new PublicArray():
if (arrays_match_1.arraysMatch(arr.data, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
    console.log('test 1A passed');
else
    console.log('test 1A FAILED');
// Test 2: arr.filter must be instance of PublicArrayFilter:
if (arr.filter.className && arr.filter.className === 'PublicArrayFilter')
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 2A: arr.filter.data must match arr.data:
if (arrays_match_1.arraysMatch(arr.filter.data, arr.data))
    console.log('test 2A passed');
else
    console.log('test 2A FAILED');
// Test 2B: arr.data must remain in-sync with arr.filter.data after calling an arr.filter method:
arr.filter.byTest(function (item) { return (item % 2 === 0); });
if (arrays_match_1.arraysMatch(arr.filter.data, arr.data))
    console.log('test 2B passed');
else
    console.log('test 2B FAILED');
// Test 3: arr.getConverted must be instance of PublicArrayGetterConverter:
if (arr.getConverted.className && arr.getConverted.className === 'PublicArrayGetterConverter')
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 3A: arr.getConverted.data must match arr.data:
if (arrays_match_1.arraysMatch(arr.getConverted.data, arr.data))
    console.log('test 3A passed');
else
    console.log('test 3A FAILED');
// Test 3B: arr.data must remain in-sync with arr.getConverted.data after calling an arr.getConverted
// method:
arr.getConverted.each(function (item) { return (item * 2); });
if (arrays_match_1.arraysMatch(arr.getConverted.data, arr.data))
    console.log('test 3B passed');
else
    console.log('test 3B FAILED');
// Test 4: arr.get must be instance of PublicArrayGetter:
if (arr.get.className && arr.get.className === 'PublicArrayGetter')
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 4A: arr.get.data must match arr.data:
if (arrays_match_1.arraysMatch(arr.get.data, arr.data))
    console.log('test 4A passed');
else
    console.log('test 4A FAILED');
// Test 4B: arr.data must remain in-sync with arr.get.data after calling an arr.get method:
arr.get.byIndexes([0, 2]);
if (arrays_match_1.arraysMatch(arr.get.data, arr.data))
    console.log('test 4B passed');
else
    console.log('test 4B FAILED');
// Test 5: arr.getAndRemove must be instance of PublicArrayGetterRemover:
if (arr.getAndRemove.className && arr.getAndRemove.className === 'PublicArrayGetterRemover')
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 5A: arr.getAndRemove.data must match arr.data:
if (arrays_match_1.arraysMatch(arr.getAndRemove.data, arr.data))
    console.log('test 5A passed');
else
    console.log('test 5A FAILED');
// Test 5B: arr.data must remain in-sync with arr.getAndRemove.data after calling an arr.getAndRemove
// method:
arr.getAndRemove.byIndexes([0, 2]);
if (arrays_match_1.arraysMatch(arr.getAndRemove.data, arr.data))
    console.log('test 5B passed');
else
    console.log('test 5B FAILED');
// Test 6: arr.insert must be instance of PublicArrayInserter:
if (arr.insert.className && arr.insert.className === 'PublicArrayInserter')
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 6A: arr.insert.data must match arr.data:
if (arrays_match_1.arraysMatch(arr.insert.data, arr.data))
    console.log('test 6A passed');
else
    console.log('test 6A FAILED');
// Test 6B: arr.data must remain in-sync with arr.insert.data after calling an arr.insert method:
arr.insert.at(1, ['h']);
if (arrays_match_1.arraysMatch(arr.insert.data, arr.data))
    console.log('test 6B passed');
else
    console.log('test 6B FAILED');
// Test 7: arr.remove must be instance of PublicArrayRemover:
if (arr.remove.className && arr.remove.className === 'PublicArrayRemover')
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
// Test 7A: arr.remove.data must match arr.data:
if (arrays_match_1.arraysMatch(arr.remove.data, arr.data))
    console.log('test 7A passed');
else
    console.log('test 7A FAILED');
// Test 7B: arr.data must remain in-sync with arr.remove.data after calling an arr.remove method:
arr.remove.firstOf('h');
if (arrays_match_1.arraysMatch(arr.remove.data, arr.data))
    console.log('test 7B passed');
else
    console.log('test 7B FAILED');
/****************


 let otherArr = arr.data;

 otherArr.length = 0;

 console.log(otherArr);

 console.log(arr.data);




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
 *************/
