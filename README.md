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
###### Has methods that narrow down the content of the array and return the PublicArrayFilter instance:
<details>
<summary>view methods</summary>

```
filter.byTest(testFunction: ((currentValue, currentIndex?, array?) => boolean)): PublicArrayFilter
    // Narrows down the array to only the values that pass testFunction.

filter.byType(
    type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'
): PublicArrayFilter
    // Narrows down the array to only values that are the specified type.
```
</details>


#### getConverted: PublicArrayGetterConverter (read-only)
###### Has the Array methods .map()  and  .reduce() , but renamed to  .each()  and  .toOne() , respectively.  None of them modify the array.
<details>
<summary>view methods</summary>

```
getConverted.toOne(
    reducingFunction: ((previousValue: any, currentValue: any, index?, array?) => any)
): any
    // reduces all values in array down to a single value, and returns that value.

getConverted.each(mappingFunction: ((item, index?, array?) => any)): any[]
    // returns new array where each value in current array is converted into something else.
```
</details>

#### get: PublicArrayGetter (read-only)
###### Has methods that return items copied from the array.  None of them modify the array.
<details>
<summary>view methods</summary>

```     
get.copy(): any[]
    // Returns independent copy of the array.

get.byIndex(index): any
    // Returns item identified by passed index.  index can be negative or positive.
           
get.byIndexes(indexes): any[]
    // Returns items identified by passed indexes.  indexes can be negative or positive.
       
get.head(numItems): any[]
    // returns numItems from beginning

get.tail(numItems): any[]
    // returns numItems from end

get.between(numItemsToIgnoreAtEachEnd): any[]
    // Returns middle of array, between numItemsToIgnoreAtEachEnd
       
get.adjacentAt(startingIndex, numItemsToGet): any[]
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
        // this.data is [1,2,3,4,5,6,7,8,9,10]
        let numbers = this.get.adjacentToValue({value:5, offset: -2, howMany:3});
        // numbers is now [3,4,5]
    ***************/	

// For all the functions below, the parameter 'value' cannot be object.

get.allAfterFirst(value): any[]
    // returns all items after the first instance of value.
       
get.allBeforeFirst(value): any[]
    // returns all items before the first instance of value.
       
get.allAfterLast(value): any[]
    // returns all items after the last instance of value.
       
get.allBeforeLast(value): any[]
    // returns all items before the last instance of value.
       
get.uniqueItems(): any[]
    // returns no duplicates.
       
get.duplicates(): any[]
    // returns every instance of a duplicate, so you may get multiple instances.       
       
get.shuffled(): any[]
    // returns new version of the array with the order of items randomized.

get.byTest(testFunction: ((currentValue, currentIndex?, array?) => boolean)): IValueIndexPair[]
    /***************
    Almost exactly like Array.filter(), except it returns array of IValueIndexPairs.
    A IValueIndexPair is this object: {value: any, index: integer}
    It's both the value filtered by the testFunction and its index.
    ***************/
        
get.byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
):  IValueIndexPair[]
    // For explanation of IValueIndexPair, see explanation of get.byTest().
```
</details>

 
#### getAndRemove: PublicArrayGetterRemover (read-only)
######  Has methods that both remove and return items from the array:
<details>
<summary>view methods</summary>

```
getAndRemove.byIndex(index): any
    // removes and returns item identified by passed index.  index can be negative or positive.

getAndRemove.byIndexes(indexes): any[]
    // removes and returns items identified by passed indexes.  indexes can be negative or positive.

getAndRemove.head(numItemsToRemove): any[]
    // removes and returns numItemsToRemove from beginning

getAndRemove.tail(numItemsToRemove): any[]
    // removes and returns numItemsToRemove from end

getAndRemove.between(numItemsToKeepAtEachEnd): any[]
    // removes and returns middle of array, between numItemsToKeepAtEachEnd

getAndRemove.adjacentAt(startingIndex, numItemsToRemove): any[]
    // removes and returns adjacent items.  startingIndex can be negative or positive.

getAndRemove.adjacentToValue(info: IAdjacentToValueInfo): any[]
    /********
    Removes and returns adjacent items including, or near, a particular value.
    Only applies to the first instance of value found in array.
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                	items to remove/return.  If offset is zero, the selection will begin with value.)
        howMany: integer greater than zero (it's how many adjacent items to remove/return)
    }
    Example:
    	 // this.data is [1,2,3,4,5,6,7,8,9,10]
    	 let numbers = this.getAndRemove.adjacentToValue({value:5, offset: -2, howMany:3});
    	 // numbers is now [3,4,5].  this.data is now [1,2,6,7,8,9,10]
    *********/

// For all the functions below, the parameter 'value' cannot be object.
    
getAndRemove.allAfterFirst(value): any[]
    // removes and returns all items after first instance of value

getAndRemove.allBeforeFirst(value): any[]
    // removes and returns all items before first instance of value

getAndRemove.allAfterLast(value): any[]
    // removes and returns all items after last instance of value

getAndRemove.allBeforeLast(value): any[]
    // removes and returns all items before last instance of value

getAndRemove.duplicates(): any[]
    // removes and returns every instance of a duplicate, so you may receive multiple instances.

/************
These last 2 methods both return an array of IValueIndexPairs.  A IValueIndexPair looks like this:
{value: any,  index: number}

Each one represents a removed array item.
************/
 
getAndRemove.byTest(
    testFunction: (currentValue, currentIndex?, array?) => boolean
): IValueIndexPair[]
    // removes and returns any value that passes test.

getAndRemove.byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
): IValueIndexPair[]
```
</details>

 
#### insert: PublicArrayInserter (read-only)
######  Has methods that increase the length of the array and return the PublicArrayInserter instance:
```
insert.at(index, values: any[]): PublicArrayInserter
    // inserts values at index.  index can be negative or positive.

insert.middle(values: any[], offset = 0): PublicArrayInserter
    // inserts values in middle of the array.
    // By default, if the array has odd number of items, values will be inserted just before the
    // middle item. If you want to change the insert position, set the optional offset parameter 
    // to + or - whatever integer you want.
```
 
#### remove: PublicArrayRemover (read-only)
###### Has methods that all remove items from the array and return the PublicArrayRemover instance:
```
remove.byIndex(index): PublicArrayRemover
    // index can be negative or positive.

remove.byIndexes(indexes): PublicArrayRemover
    // indexes can be negative or positive.

remove.adjacentAt(startingIndex, numItemsToRemove): PublicArrayRemover
   // Removes adjacent items.  startingIndex can be negative or positive.  

remove.adjacentToValue(info: IAdjacentToValueInfo): PublicArrayRemover
    /************
    Removes adjacent items including, or near, a particular value.
    Only applies to the first instance of value found in array.
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                items to remove.  If offset is zero, the selection will begin with value.)
        howMany: integer greater than zero (it's how many adjacent items to remove)
    }
    Example:
        // arr.data is [1,2,3,4,5,6,7,8,9,10]
        arr.remove.adjacentToValue({value:5, offset: -2, howMany:3});
        // arr.data is now [1,2,6,7,8,9,10]
    *************/

remove.head(numItemsToRemove): PublicArrayRemover
    // Removes numItemsToRemove from array's beginning.

remove.tail(numItemsToRemove): PublicArrayRemover
    // Removes numItemsToRemove from array's end.
    
remove.between(numItemsToKeepAtEachEnd): PublicArrayRemover
    // Removes everything between numItemsToKeepAtEachEnd.
    // i.e., if numItemsToKeepAtEachEnd = 2, then only the first 2 items and last 2 items will remain.
    
/************
 For all the functions below:
     Any parameter called 'value' cannot be an object.
     Any parameter called 'values' cannot contain an object.
************/

remove.firstOf(value): PublicArrayRemover
    // Removes first instance of value. 

remove.firstOfEach(values: any[]): PublicArrayRemover
    // Removes first instance of each value.

remove.allOf(value): PublicArrayRemover
    // Removes all instances of value.
    
remove.allOfEach(values: any[]): PublicArrayRemover
    // Removes all instances of each value.

remove.allAfterFirst(value): PublicArrayRemover
    // Removes all items after first instance of value.

remove.allBeforeFirst(value): PublicArrayRemover
    // Removes all items before first instance of value.

remove.allAfterLast(value): PublicArrayRemover
    // Removes all items after last instance of value.

remove.allBeforeLast(value): PublicArrayRemover
    // Removes all items before last instance of value.

remove.duplicates(): PublicArrayRemover

remove.byTest(testFunction: (currentValue, currentIndex?, array?) => boolean): PublicArrayRemover
    // if currentValue passes test, it is removed.

remove.byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
): PublicArrayRemover
```
 
#### replace: PublicArrayReplacer (read-only)
###### Has methods that all replace items in the array and return the PublicArrayReplacer instance:
```
replace.at(index, newValue): PublicArrayReplacer
    // Replaces item at index with newValue.  index can be negative or positive.

replace.adjacentAt(startingIndex, newValues: any[]): PublicArrayReplacer
    // Replaces adjacent items beginning at startingIndex with newValues.
    // Number of adjacent items that are replaced is same as number of items in newValues.
    // startingIndex can be negative or positive.
    
replace.adjacentToValue(info: IAdjacentToValueInfo, newValues: any[]): PublicArrayReplacer
    /**********
    Replaces adjacent items including, or near a particular value, with newValues.
    Only applies to the first instance of value found in array.
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                    	items to replace.  If offset is zero, the selection will begin with value.)
       	howMany: integer greater than zero (it's how many adjacent items to replace)
    }
    Example:
	//  array is [1,2,3,4,5,6,7,8] .
	//  let newValues = [20,30,40];
	//  this.adjacentToValue({value: 5, offset: -1, howMany: 2},  newValues);
	//  array is now [1,2,3,20,30,40,6,7,8]
    **********/

replace.between(numItemsToKeepAtEachEnd, newValues: any[]): PublicArrayReplacer
    // Replaces everything between numItemsToKeepAtEachEnd with newValues.
    // Example: if this.data is [1,2,3,4,5,6,7] , and you call .between(2, [9,10])
    // this.data will be [1,2,9,10,6,7] .  It preserves the first 2 items and the last 2.
    
/************
 For all the functions below:
     Any parameter called 'value' cannot be an object.
     Any parameter called 'values' cannot contain an object.
************/
    
replace.firstOf(value, newValue): PublicArrayReplacer
    // Replaces first instance of value with newValue.
    
replace.firstOfEach(values: any[], newValues: any[]): PublicArrayReplacer
    // First instance of values[i] found in array gets replaced with newValues[i].
    
replace.allOf(value, newValue): PublicArrayReplacer
    // Replaces all instances of value with newValue.
    
replace.allOfEach(values: any[], newValues: any[]): PublicArrayReplacer
    // All instances of values[i] found in array get replaced with newValues[i].
    
replace.each(replacementFunction: (currentValue, currentIndex?, array?) => any): PublicArrayReplacer
    /**********
    Loops thru array, passing each item into replacementFunction.
    replacementFunction must return the new value you want to give to that index in the array.
    Example:
    //  this.data is [1,2,3,4,5,6] .
    //  this.replace.each((item) => {
    //      if (item === 2 || item === 6) return item * 3;
    //      else return item;
    //  });
    //  this.data is now [1,6,3,4,5,18]
    **********/
    
    
replace.allWithOne(values: any[], newValue): PublicArrayReplacer
    // Replaces all instances of each value in values with newValue.
```
 
#### sort: PublicArraySorter (read-only)
###### Has methods that change the order of the items and return the PublicArraySorter instance:
```
sort.alphabetize(): PublicArraySorter;
    // No item in the array gets modified, but each is treated as a string during the sorting.

sort.numbersAscending(): PublicArraySorter;
    // If not all items in array are of type 'number', it triggers error.

sort.numbersDescending(): PublicArraySorter;
    // If not all items in array are of type 'number', it triggers error.

sort.reverse(): PublicArraySorter;

sort.shuffle(): PublicArraySorter;
    // randomizes the order of items.
```

#### className: string (read-only)


### Methods

```
asString(glue = ', '): string
    // Does same thing as Array.join()
    
/************
 For all the functions below:
     Any parameter called 'value' cannot be an object.
     Any parameter called 'values' cannot contain an object.
************/
	
has(value): boolean
    // returns true if array contains value.
	
hasAll(values: any[]): boolean
    // returns true if array contains every value in values.
	
hasAny(values: any[]): boolean
    // returns true if array contains at least 1 value in values.
	
hasAdjacent(values: any[]): boolean
    // returns true if array contains exact sequence of values.
    // Example: if this.data is [10,1,2,3,11], then this.hasAdjacent([1,2,3]) returns true.
    
startsWith(values: any[]): boolean
   // returns true if array starts with exact sequence of values.

endsWith(values: any[]): boolean
    // returns true if array ends with exact sequence of values.

matches(array): boolean
    // returns true if entire array matches passed array exactly.
    // returns false if passed array contains object.

// For the next 3 methods:
// testFunction is a callback with same signature as callback passed to
// Array.filter() :
// testFunction(currentValue, currentIndex?, entireArray?): boolean 
// checks if currentValue passes test. If yes, it returns true.

allPass(testFunction): boolean
    // returns true if all items pass test.

anyPass(testFunction): boolean
    // returns true if only 1 value passes.

indexesThatPass(testFunction): number[]
    // returns all indexes of items that pass test.

firstIndexOf(value): number
    // returns index of first instance of value in array. If not found, returns -1.

lastIndexOf(value): number
    // returns index of last instance of value in array.  If not found, returns -1.

indexesOf(value): number[]
    // returns all indexes of value in array. If not found, returns empty array.

append(values: any[]): this
    // attaches values to end of array.

prepend(values: any[]): this
    // attaches values to beginning of array.

forEach(iterationFunction): this
    // Behaves same as Array.forEach()
    // iterationFunction = function(currentValue, currentIndex?, entireArray?){...}

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



## Usage Examples

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