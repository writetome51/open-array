The main feature of this package is the OpenArray class.  All the other classes were
created mainly to act as dependencies for OpenArray to use.

The main reason you would use OpenArray is if you hate JavaScript's built-in Array
methods, like .slice(), .splice(), .push(), and .shift().  OpenArray has much clearer
and expressive method names.  Examples:

let arr = ObjectFactory.getInstance(OpenArray, [ [1,2,3,4,5,6] ]);

arr.remove.tail(2); // arr.data is now [1,2,3,4]

arr.remove.head(2); // arr.data is now [3,4]

if (arr.notEmpty) arr.prepend([10]); // arr.data is now [10,3,4]

arr.append([100,200,300]); // arr.data is now [10,3,4,100,200,300]

To actually see or get the array itself, you must access OpenArray's data property:

console.log(arr.data); // logs '[10,3,4,100,200,300]'

OpenArray has several injected dependencies, so you need to use ObjectFactory (which is
included by npm) to instantiate it:

let arr = ObjectFactory.getInstance(OpenArray, [ [1,2,3,4,5,6] ]);

Aside from 'data', OpenArray has these public properties, which are all instances of the
other classes in this package:

'filter':  instance of OpenArrayFilter

'getConverted':  instance of OpenArrayGetterConverter

'get':  instance of OpenArrayItemGetter

'getAndRemove':  instance of OpenArrayItemGetterRemover

'insert':  instance of OpenArrayItemInserter

'remove':  instance of OpenArrayItemRemover

'replace':  instance of OpenArrayItemReplacer

'sort':  instance of OpenArraySorter

To know what methods each of those properties offer, look at the code of each class.

OpenArray also has these 2 methods:

.append(values)

.prepend(values)

Also, OpenArray inherits from OpenArrayContent, which has many of the basic properties
and methods you need to understand the array's contents, such as:

length, isEmpty, notEmpty, has(value), hasAll(values), hasAny(values), startsWith(values),
endsWith(values), ...and a few more.
