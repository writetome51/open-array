"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var index_1 = require("./index");
var arr = new index_1.PublicArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
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
arr.insert.at(1, ['h', 'j']);
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
// Test 8: arr.replace must be instance of PublicArrayReplacer:
if (arr.replace.className && arr.replace.className === 'PublicArrayReplacer')
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
// Test 8A: arr.replace.data must match arr.data:
if (arrays_match_1.arraysMatch(arr.replace.data, arr.data))
    console.log('test 8A passed');
else
    console.log('test 8A FAILED');
// Test 8B: arr.data must remain in-sync with arr.replace.data after calling an arr.replace method:
arr.replace.firstOf('j', 'J');
if (arrays_match_1.arraysMatch(arr.replace.data, arr.data))
    console.log('test 8B passed');
else
    console.log('test 8B FAILED');
// Test 9: arr.sort must be instance of PublicArraySorter:
if (arr.sort.className && arr.sort.className === 'PublicArraySorter')
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
// Test 9A: arr.sort.data must match arr.data:
if (arrays_match_1.arraysMatch(arr.sort.data, arr.data))
    console.log('test 9A passed');
else
    console.log('test 9A FAILED');
// Test 9B: arr.data must remain in-sync with arr.sort.data after calling an arr.sort method:
arr.sort.alphabetize();
if (arrays_match_1.arraysMatch(arr.sort.data, arr.data))
    console.log('test 9B passed');
else
    console.log('test 9B FAILED');
// Test 10: make sure .copy property is copy of the arr instance:
var copy = arr.copy;
if (copy.className && copy.className === 'PublicArray' && arrays_match_1.arraysMatch(copy.data, arr.data) &&
    copy.filter && copy.getAndRemove)
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
// Test 10A: make sure copy.data is not linked with arr.data:
copy.data.push('blah');
if (arrays_match_1.arraysMatch(copy.data, arr.data))
    console.log('test 10A FAILED');
else
    console.log('test 10A passed');
// Test 11: make sure .append() works:
arr.append(['blah', 'goo']);
if (arr.data[arr.data.length - 1] === 'goo' && arr.data[arr.data.length - 2] === 'blah')
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
// Test 12: make sure .prepend() works:
arr.prepend(['ccc', 'ddd']);
if (arr.data[0] === 'ccc' && arr.data[1] === 'ddd')
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
// Test 13: make sure .forEach() lets you access the current item, its index, and entire array:
arr.data = ['a', 'b', 'c', 'd'];
var allData = [];
arr.forEach(function (item, index, theArr) {
    allData.push([item, index, theArr]);
});
if (arrays_match_1.arraysMatch(allData, [
    ['a', 0, ['a', 'b', 'c', 'd']], ['b', 1, ['a', 'b', 'c', 'd']],
    ['c', 2, ['a', 'b', 'c', 'd']], ['d', 3, ['a', 'b', 'c', 'd']]
]))
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');
// Test 13A: make sure .forEach() allows you to change the values of each item:
arr.forEach(function (item, index, theArr) {
    theArr[index] = index;
});
if (arrays_match_1.arraysMatch(arr.data, [0, 1, 2, 3]))
    console.log('test 13A passed');
else
    console.log('test 13A FAILED');
// Test 14: make sure .set() changes value of arr.data without breaking memory reference:
var dataCopy = arr.data;
arr.set([6, 7, 8, 9]);
if (arrays_match_1.arraysMatch(arr.data, [6, 7, 8, 9]) && arrays_match_1.arraysMatch(arr.data, dataCopy))
    console.log('test 14 passed');
else
    console.log('test 14 FAILED');
// Test 15: check .notEmpty property:
if (arr.notEmpty)
    console.log('test 15 passed');
else
    console.log('test 15 FAILED');
// Test 16: check .isEmpty property:
if (arr.isEmpty)
    console.log('test 16 FAILED');
else
    console.log('test 16 passed');
// Test 17: check .length property:
if (arr.length === 4)
    console.log('test 17 passed');
else
    console.log('test 17 FAILED');
// Test 18: make sure .length is writable:
arr.length = 1;
if (arrays_match_1.arraysMatch(arr.data, [6]))
    console.log('test 18 passed');
else
    console.log('test 18 FAILED');
// Test 19: make sure .asString() works:
arr.data = [1, 2, 3, 4, 5];
var str = arr.asString('-');
if (str === '1-2-3-4-5')
    console.log('test 19 passed');
else
    console.log('test 19 FAILED');
// Test 20: make sure .matches() works:
if (arr.matches([1, 2, 3, 4, 5]))
    console.log('test 20 passed');
else
    console.log('test 20 FAILED');
// Test 21: make sure .has() works:
if (arr.has(4))
    console.log('test 21 passed');
else
    console.log('test 21 FAILED');
// Test 22: make sure .indexesThatPass() works:
var indexes = arr.indexesThatPass(function (item) { return (item % 2 === 0); });
if (arrays_match_1.arraysMatch(indexes, [1, 3]))
    console.log('test 22 passed');
else
    console.log('test 22 FAILED');
// Test 23: make sure .moveByIndex() works:
// arr.data is [1,2,3,4,5]
arr.moveByIndex(-1, 1);
if (arrays_match_1.arraysMatch(arr.data, [1, 5, 2, 3, 4]))
    console.log('test 23 passed');
else
    console.log('test 23 FAILED');
