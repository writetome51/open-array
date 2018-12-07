import { getPublicArray } from './index';


let arr = getPublicArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(
	arr.remove
		.byIndexes([0, 2, 4, 6])
		.data
);// [2, 4, 6, 8, 9]

arr.replace.each((value) => (value / 3));
console.log(arr.data);
console.log(arr.remove.between(1).data); // [2, 9]
let arrCopy = arr.copy;
arr.data = [1, 2];
console.log(arrCopy.data); // [2, 9]
console.log(arr.data);// [1, 2]

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