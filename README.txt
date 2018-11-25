The main feature of this package is the PublicArray class.  All the other classes were
created mainly to act as dependencies for PublicArray to use.

The main reason you would use PublicArray is if you hate JavaScript's built-in Array
methods, like .slice(), .splice(), .push(), and .shift().  PublicArray has much clearer
and expressive method names.  Examples:

let arr = ObjectFactory.getInstance(PublicArray, [ [1,2,3,4,5,6] ]);

arr.remove.tail(2); // arr.data is now [1,2,3,4]

arr.remove.head(2); // arr.data is now [3,4]

if (arr.notEmpty) arr.prepend([10]); // arr.data is now [10,3,4]

arr.append([100,200,300]); // arr.data is now [10,3,4,100,200,300]

To actually see or get the array itself, you must access PublicArray's data property:

console.log(arr.data); // logs '[10,3,4,100,200,300]'

PublicArray has several injected dependencies, so you need to use ObjectFactory (which is
included by npm) to instantiate it:

let arr = ObjectFactory.getInstance(PublicArray, [ [1,2,3,4,5,6] ]);

Aside from 'data', PublicArray has these public properties, which are all instances of the
other classes in this package:

'filter':  instance of PublicArrayFilter

'getConverted':  instance of PublicArrayGetterConverter

'get':  instance of PublicArrayItemGetter

'getAndRemove':  instance of PublicArrayItemGetterRemover

'insert':  instance of PublicArrayItemInserter

'remove':  instance of PublicArrayItemRemover

'replace':  instance of PublicArrayItemReplacer

'sort':  instance of PublicArraySorter

To know what methods each of those properties offer, look at the code of each class.

PublicArray also has these 2 methods:

.append(values)

.prepend(values)

Also, PublicArray inherits from PublicArrayContent, which has many of the basic properties
and methods you need to understand the array's contents, such as:

length, isEmpty, notEmpty, has(value), hasAll(values), hasAny(values), startsWith(values),
endsWith(values), ...and a few more.
