# PublicArray

A TypeScript/JavaScript class for general array manipulation.

The main reason you would use PublicArray is if you hate JavaScript's built-in Array methods,  
like `.slice()`, `.splice()`, `.push()`, and `.shift()`.  PublicArray has much clearer and expressive   
method names, and a lot more of them.  Examples:
```
let arr = getPublicArray([1,2,3,4,5,6]);
arr.remove.tail(2); // arr.data is now [1,2,3,4]
arr.remove.head(1); // arr.data is now [2,3,4]

if (arr.notEmpty) arr.prepend([10,11]); // arr.data is now [10,11,2,3,4]
arr.append([100,200,300]); // arr.data is now [10,11,2,3,4,100,200,300]
```
To actually see or get the array itself, you must access PublicArray's `data` property:

`console.log(arr.data); // logs '[10,11,2,3,4,100,200,300]' `

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

#### data: any[] (read-writable)  
###### This is the array to be operated on.

#### copy: PublicArray (read-only)  
###### an independent copy of the PublicArray instance

#### length: number (read-writable) 
###### length of array

#### isEmpty: boolean (read-only) 
###### true if this.data is empty

#### notEmpty: boolean (read-only)

#### filter: PublicArrayFilter (read-only)
###### This has methods that narrow down the content of the array and return the PublicArrayFilter instance:
```
filter.byTest(testFunction): PublicArrayFilter
    // Narrows down the array to only the values that pass testFunction.
    // testFunction = function(currentValue, currentIndex?, theArray?): boolean

filter.byType(
    type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'
): PublicArrayFilter
    // Narrows down the array to only values that are the specified type.
```

#### getConverted: PublicArrayGetterConverter (read-only)
###### This has the Array methods .map()  and  .reduce() , but renamed to  .each()  and  .toOne() , respectively.  None of them modify the array.
```
getConverted.toOne(
    reducingFunction: ((previousValue: any, currentValue: any, index?, array?) => any)
): any
    // reduces all values in array down to a single value, and returns that value.

getConverted.each(mappingFunction: ((item, index?, array?) => any)): any[]
    // returns new array where each value in current array is converted into something else.
```

#### get: PublicArrayGetter (read-only)
###### This has methods that return items copied from the array.  None of them modify the array.
```     
get.copy(): any[]
    // Returns independent copy of the array.

get.byIndex(index): any
    // Returns 1 item.  index can be negative or positive.
           
get.byIndexes(indexes): any[]
    // indexes can be negative or positive.
       
get.head(numItems): any[]
    // returns numItems from beginning

get.tail(numItems): any[]
    // returns numItems from end

get.between(numItemsToIgnoreAtEachEnd): any[]
    // Returns middle of array, between numItemsToIgnoreAtEachEnd
       
get.adjacentAt(startingIndex, numItems): any[]
    // Returns adjacent items.  startingIndex can be negative or positive.
       
get.adjacentToValue(info: IAdjacentToValueInfo): any[]
    /**************
    Returns adjacent items including, or near, a particular value.
    Only applies to the first instance of value found in array.
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                items to return.  If offset is zero, the selection will begin with value.)
        howMany: integer greater than zero (it's how many adjacent items to return)
    }
    Example:
        // arr.data is [1,2,3,4,5,6,7,8,9,10]
        let numbers = arr.get.adjacentToValue({value:5, offset: -2, howMany:3});
        // numbers is now [3,4,5]
    ***************/	

get.allAfterFirst(value: any): any[]
    // value cannot be object
       
get.allBeforeFirst(value: any): any[]
    // value cannot be object
       
get.allAfterLast(value: any): any[]
    // value cannot be object
       
get.allBeforeLast(value: any): any[]
    // value cannot be object
       
get.uniqueItems(): any[]
    // returns no duplicates.
       
get.duplicates(): any[]
    // returns every instance of a duplicate, so you may get multiple instances.       
       
get.shuffled(): any[]
    // returns new, shuffled version of the array

get.byTest(testFunction: ((currentValue, currentIndex?, array?) => boolean)): IValueIndexPair[]
    /***************
    Almost exactly like Array.filter(), except it returns array of IValueIndexPairs.
    A IValueIndexPair is this object: {value: any, index: integer}
    It's both the value filtered by the testFunction and its index.
    ***************/
        
get.byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
):  IValueIndexPair[]
    // For explanation of IValueIndexPair, see explanation of byTest().
```
 
#### getAndRemove: PublicArrayGetterRemover (read-only)
 
#### insert: PublicArrayInserter (read-only)
 
#### remove: PublicArrayRemover (read-only)
 
#### replace: PublicArrayReplacer (read-only)
 
#### sort: PublicArraySorter (read-only)

#### className: string (read-only)


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

allPass(testFunction): boolean
    // returns true if all items pass test.

anyPass(testFunction): boolean
    // returns true if only 1 value passes.

indexesThatPass(testFunction): number[]
    // returns all indexes of items that pass test.

firstIndexOf(value): number
    // Does not work if value is object.

lastIndexOf(value): number
    // Does not work if value is object.

indexesOf(value): number[]
    // Does not work if value is object.

append(values: any[]): this

prepend(values: any[]): this

forEach(iterationFunction): this
    // iterationFunction = function(currentItem, currentIndex?, entireArray?){...}

protected  _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: GetterSetterConfiguration
	   ) : void 
	   
returnThis_after(voidExpression: any) : this
    // Executes voidExpression and returns this.
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

PublicArray has a large number of dependencies.  You should keep this in mind when optimizing  
the performance of your app. If your code only uses one property of PublicArray, like for  
instance `.replace`, you will get a slight performance boost if you just use an instance of  
PublicArrayReplacer instead:
```
let replace = new PublicArrayReplacer(arr);
```
## Inheritance Chain

PublicArray<-PublicArrayContent<-PublicArrayContainer<-BatchGetterSetter<-MethodChainable<-SelfIdentifiable


## License
[MIT](https://choosealicense.com/licenses/mit/)