export {};
/*******************
 let arr = getPublicArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

 // Test 1: getPublicArray() must return instance of PublicArray:
 if (arr.className && arr.className === 'PublicArray') console.log('test 1 passed');
 else console.log('test 1 FAILED');

 // Test 1A: the instance must contain the array passed into getPublicArray():
 if (arraysMatch(arr.data, [1, 2, 3, 4, 5, 6, 7, 8, 9])) console.log('test 1A passed');
 else console.log('test 1A FAILED');

 // Test 2: :
 if (arr.className && arr.className === 'PublicArray') console.log('test 2 passed');
 else console.log('test 2 FAILED');

 // Test 2A: the instance must contain the array passed into getPublicArray():
 if (arraysMatch(arr.data, [1, 2, 3, 4, 5, 6, 7, 8, 9])) console.log('test 1A passed');
 else console.log('test 1A FAILED');
 *******************/
/*********
 console.log(
 arr.remove
 .byIndexes([0, 2, 4, 6])
 .data
 );// [2, 4, 6, 8, 9]
 ************/
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
