# PublicArray

A TypeScript/JavaScript class for general array manipulation.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/public-array
```

## Loading
```
// If using TypeScript:
import { getPublicArray } from '@writetome51/public-array';
// If using ES5 JavaScript:
var getPublicArray = require('@writetome51/public-array').getPublicArray;
```


## Public API


### Instantiation
```
getPublicArray(array = []): PublicArray
    // Examples:
    // let arr = getPublicArray([1,2,3,4,5]);
    // Or, instantiate with an empty array:
    // let arr = getPublicArray();

```

### Properties

```
className: string (read-only)

copy: PublicArray (read-only) // an independent copy of the PublicArray instance

data: any[] (read-writable) // This is the array to be operated on.

length: number (read-writable) // length of array

isEmpty: boolean (read-only) // true if this.data is empty

notEmpty: boolean (read-only)

filter: PublicArrayFilter (read-only)

getConverted: PublicArrayGetterConverter (read-only)
 
get: PublicArrayGetter (read-only)
 
getAndRemove: PublicArrayGetterRemover (read-only)
 
insert: PublicArrayInserter (read-only)
 
remove: PublicArrayRemover (read-only)
 
replace: PublicArrayReplacer (read-only)
 
sort: PublicArraySorter (read-only)

```

### Methods

```

asString(glue = ', '): string
    // Does same thing as Array.join()
	
has(value): boolean
    // returns false if value is object.
	
hasAll(values: any[]): boolean
    // returns false if values contains object.
	
hasAny(values: any[]): boolean
	
hasAdjacent(values: any[]): boolean
    // returns false if values contains object.
    
startsWith(values: any[]): boolean
    // returns false if values contains object.

endsWith(values: any[]): boolean
    // returns false if values contains object.

matches(array): boolean
    // returns false if array contains object.


// For the next 3 methods:
// testFunction is a callback with same signature as callback passed to
// Array.filter() :
// testFunction(value, index?, theArray?):  checks if value passes test. If yes, it returns true.


// returns true if all items pass test.
allPass(testFunction): boolean


// returns true if only 1 value passes.
anyPass(testFunction): boolean


	// returns all indexes of items that pass test.
	indexesThatPass(testFunction): number[]


	// Does not work if value is object.
	firstIndexOf(value): number


	// Does not work if value is object.
	lastIndexOf(value): number


	// Does not work if value is object.
	indexesOf(value): number[]

append(values: any[]): this

prepend(values: any[]): this

forEach(iterationFunction): this
    // iterationFunction = function(currentItem, currentIndex?, entireArray?){...}

protected  _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: GetterSetterConfiguration
	   ) : void 
	   
returnThis_after(voidExpression: any) : this
    // Even if voidExpression returns something, the returned data isn't used.

runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?
) : this
```



## Usage

```

// changing the array content:
arr.data = [1,2,3,4,5,6,7];

```

## Performance

PublicArray has a large number of dependencies.  You should keep this in mind when optimizing the 
performance of your app. If your code only uses one property of PublicArray, like for 
instance .replace, you will get a slight performance boost if you just use an instance of
PublicArrayReplacer instead:
```
let replace = new PublicArrayReplacer(arr);
```
## Inheritance Chain

PublicArray<-PublicArrayContent<-PublicArrayContainer<-BatchGetterSetter<-MethodChainable<-SelfIdentifiable


## License
[MIT](https://choosealicense.com/licenses/mit/)