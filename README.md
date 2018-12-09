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
To actually see or get the array itself, you must access PublicArray's `.data` property:

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


## Instantiation
```
getPublicArray(array = []): PublicArray
    // Examples:
    // let arr = getPublicArray([1,2,3,4,5]);
    // Or, instantiate with an empty array:
    // let arr = getPublicArray();
```

## Properties
<details>
<summary>view properties</summary>

#### data: any[] (read-writable)  
###### This is the array to be operated on.

#### copy: PublicArray (read-only)  
###### an independent copy of the PublicArray instance

#### length: number (read-writable) 
###### length of this.data

#### isEmpty: boolean (read-only) 
###### true if this.data is empty

#### notEmpty: boolean (read-only)

#### className: string (read-only)

## Properties with methods

Helpful tidbit:  These properties all contain their own `.data` property, which always matches `this.data`

#### filter: PublicArrayFilter (read-only)
###### Its methods narrow down the content of this.data and return the PublicArrayFilter instance:
<details>
<summary>view methods</summary>

```
filter.byTest(testFunction: ((currentValue, currentIndex?, array?) => boolean)): PublicArrayFilter
    // Narrows down this.data to only the values that pass testFunction.

filter.byType(
    type: 'number' | 'boolean' | 'string' | 'array' | 'object' | 'function' | 'undefined'
): PublicArrayFilter
    // Narrows down this.data to only the values that are the specified type.
```
</details>


#### get: PublicArrayGetter (read-only)
###### Its methods return items copied from this.data .  None of them modify this.data .
<details>
<summary>view methods</summary>

```     
get.copy(): any[]
    // Returns independent copy of this.data .

get.byIndex(index): any
    // Returns item identified by passed index.  index can be negative or positive.
           
get.byIndexes(indexes): any[]
    // Returns items identified by passed indexes.  indexes can be negative or positive.
       
get.head(numItems): any[]
    // returns numItems from beginning of this.data

get.tail(numItems): any[]
    // returns numItems from end of this.data

get.between(numItemsToIgnoreAtEachEnd): any[]
    // Returns middle of this.data, between numItemsToIgnoreAtEachEnd
       
get.adjacentAt(startingIndex, numItemsToGet): any[]
    // Returns adjacent items.  startingIndex can be negative or positive.
       
get.adjacentToValue(info: IAdjacentToValueInfo): any[]
    /**************
    Returns adjacent items including, or near, a particular value.
    Only applies to the first instance of value found in this.data.
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
    // returns copy of this.data with the order of items randomized.
    
/************
These last 2 methods both return an array of IValueIndexPairs.  A IValueIndexPair looks like this:
{value: any,  index: number}

Each one represents an item from this.data .
************/

get.byTest(testFunction: ((currentValue, currentIndex?, array?) => boolean)): IValueIndexPair[]
    // returns any item that passes testFunction.
        
get.byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
):  IValueIndexPair[]
    // returns any item that is passed type.
```
</details>


#### getConverted: PublicArrayGetterConverter (read-only)
###### Has the Array methods .map()  and  .reduce() , but renamed to  .each()  and  .toOne() , respectively.  None of them modify this.data .
<details>
<summary>view methods</summary>

```
getConverted.toOne(
    reducingFunction: ((previousValue: any, currentValue: any, index?, array?) => any)
): any
    // reduces all values in this.data down to a single value, and returns that value.

getConverted.each(mappingFunction: ((item, index?, array?) => any)): any[]
    // returns new array where each value in this.data is converted into something else.
```
</details>

 
#### getAndRemove: PublicArrayGetterRemover (read-only)
######  Its methods both remove and return items from this.data:
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
    // removes and returns middle of this.data, between numItemsToKeepAtEachEnd

getAndRemove.adjacentAt(startingIndex, numItemsToRemove): any[]
    // removes and returns adjacent items.  startingIndex can be negative or positive.

getAndRemove.adjacentToValue(info: IAdjacentToValueInfo): any[]
    /********
    Removes and returns adjacent items including, or near, a particular value.
    Only applies to the first instance of value found in this.data .
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                	items to remove/return.  If offset is zero, the selection will begin with value.)
        howMany: integer greater than zero (it's how many adjacent items to remove/return)
    }
    Example:
    	 // this.data is [1,2,3,4,5,6,7,8,9,10]
    	 let numbers = this.getAndRemove.adjacentToValue({value:5, offset: 0, howMany:4});
    	 // numbers is now [5,6,7,8].  this.data is now [1,2,3,4,9,10]
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

Each one represents an item removed from this.data .
************/
 
getAndRemove.byTest(
    testFunction: (currentValue, currentIndex?, array?) => boolean
): IValueIndexPair[]
    // removes and returns any item that passes testFunction.

getAndRemove.byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
): IValueIndexPair[]
    // removes and returns any item that is passed type.
```
</details>

 
#### insert: PublicArrayInserter (read-only)
######  Has methods that increase the length of this.data and return the PublicArrayInserter instance:
<details>
<summary>view methods</summary>

```
insert.at(index, values: any[]): PublicArrayInserter
    // inserts values at index.  index can be negative or positive.

insert.middle(values: any[], offset = 0): PublicArrayInserter
    // inserts values in middle of this.data .
    // By default, if this.data has odd number of items, values will be inserted just before the
    // middle item. If you want to change the insert position, set the optional offset parameter 
    // to + or - whatever integer you want.
```
</details>


#### remove: PublicArrayRemover (read-only)
###### Has methods that all remove items from this.data and return the PublicArrayRemover instance:
<details>
<summary>view methods</summary>

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
    Only applies to the first instance of value found in this.data .
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                items to remove.  If offset is zero, the selection will begin with value.)
        howMany: integer greater than zero (it's how many adjacent items to remove)
    }
    Example:
        // arr.data is [1,2,3,4,5,6,7,8,9,10]
        arr.remove.adjacentToValue({value:5, offset: 1, howMany:2});
        // arr.data is now [1,2,3,4,5,8,9,10]
    *************/

remove.head(numItemsToRemove): PublicArrayRemover
    // Removes numItemsToRemove from beginning of this.data .

remove.tail(numItemsToRemove): PublicArrayRemover
    // Removes numItemsToRemove from end of this.data .
    
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
</details>

 
#### replace: PublicArrayReplacer (read-only)
###### Its methods all replace items in this.data and return the PublicArrayReplacer instance:
<details>
<summary>view methods</summary>

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
    Only applies to the first instance of value found in this.data .
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                    	items to replace.  If offset is zero, the selection will begin with value.)
       	howMany: integer greater than zero (it's how many adjacent items to replace)
    }
    Example:
	//  this.data is [1,2,3,4,5,6,7,8]
	//  let newValues = [20,30,40];
	//  this.adjacentToValue({value: 5, offset: -1, howMany: 2},  newValues);
	//  this.data is now [1,2,3,20,30,40,6,7,8]
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
    // First instance of values[i] found in this.data gets replaced with newValues[i].
    
replace.allOf(value, newValue): PublicArrayReplacer
    // Replaces all instances of value with newValue.
    
replace.allOfEach(values: any[], newValues: any[]): PublicArrayReplacer
    // All instances of values[i] found in this.data get replaced with newValues[i].
    
replace.each(replacementFunction: (currentValue, currentIndex?, array?) => any): PublicArrayReplacer
    /**********
    Loops thru this.data, passing each item into replacementFunction.
    replacementFunction must return the new value you want to give to that item in this.data .
    If you don't want to give a particular item a new value, simply return the value it already 
    has.
    Important to remember: even if the currentValue should not be replaced, you still must return
        something, or else that item will become undefined.
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
</details>

 
#### sort: PublicArraySorter (read-only)
###### Its methods change the order of items in this.data and return the PublicArraySorter instance:
<details>
<summary>view methods</summary>

```
sort.alphabetize(): PublicArraySorter;
    // No item in this.data gets modified, but each is treated as a string during the sorting.

sort.numbersAscending(): PublicArraySorter;
    // If not all items in this.data are of type 'number', it triggers error.

sort.numbersDescending(): PublicArraySorter;
    // If not all items in this.data are of type 'number', it triggers error.

sort.reverse(): PublicArraySorter;

sort.shuffle(): PublicArraySorter;
    // randomizes the order of items.
```
</details>


</details>


## Methods
<details>
<summary>view methods</summary>

```
asString(glue = ', '): string
    // Does same thing as Array.join()
    
/************
 For all the functions below:
     Any parameter called 'value' cannot be an object.
     Any parameter called 'values' cannot contain an object.
************/
	
has(value): boolean
    // returns true if this.data contains value.
	
hasAll(values: any[]): boolean
    // returns true if this.data contains every value in values.
	
hasAny(values: any[]): boolean
    // returns true if this.data contains at least 1 value in values.
	
hasAdjacent(values: any[]): boolean
    // returns true if this.data contains exact sequence of values.
    // Example: if this.data is [10,1,2,3,11], then this.hasAdjacent([1,2,3]) returns true.
    
startsWith(values: any[]): boolean
   // returns true if this.data starts with exact sequence of values.

endsWith(values: any[]): boolean
    // returns true if this.data ends with exact sequence of values.

matches(array): boolean
    // returns true if this.data matches passed array exactly.
    // will return false if this.data or passed array contains object.

// For the next 3 methods:
// testFunction is a callback with same signature as callback passed to
// Array.filter() :
// testFunction(currentValue, currentIndex?, entireArray?): boolean 
// checks if currentValue passes test. If yes, it returns true.

allPass(testFunction): boolean
    // returns true if all items in this.data pass test.

anyPass(testFunction): boolean
    // returns true if at least 1 item passes test.

indexesThatPass(testFunction): number[]
    // returns indexes of all items that pass test. If none pass, returns empty array.

firstIndexOf(value): number
    // returns index of first instance of value in this.data. If not found, returns -1.

lastIndexOf(value): number
    // returns index of last instance of value in this.data.  If not found, returns -1.

indexesOf(value): number[]
    // returns all indexes of value in this.data. If not found, returns empty array.

append(values: any[]): this
    // attaches values to end of this.data.

prepend(values: any[]): this
    // attaches values to beginning of this.data.

forEach(iterationFunction): this
    // Behaves same as Array.forEach()
    // iterationFunction = function(currentValue, currentIndex?, entireArray?){...}
    
set(newArray): this
    // Changes value of this.data to newArray without breaking its memory reference.
    // So if there are copies of this.data, the copies will be updated as well.

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
</details>


## Usage Examples

```
// changing the array content:
arr.data = [item1, item2, item3, ...];

// changing the array content without breaking its memory reference:
arr.set( [item1, item2, item3, ...] );
```

## Performance

PublicArray has a large number of dependencies.  You should keep this in mind when optimizing  
the performance of your app. For example, say your code only uses PublicArray's `.replace` property  
and nothing else.  Since `.replace` is an instance of PublicArrayReplacer, you will get a   
performance boost if you just instantiate PublicArrayReplacer instead of PublicArray:
```
let replace = new PublicArrayReplacer(array);
replace.adjacentAt(2, ['just', 'an', 'example']);
```
## Inheritance Chain

PublicArray<-PublicArrayContent<-PublicArrayContainer<-BatchGetterSetter<-MethodChainable<-SelfIdentifiable


## License
[MIT](https://choosealicense.com/licenses/mit/)