import { PublicArrayContent } from '@writetome51/public-array-content';


/***********************
 This class is for general array manipulation.  It's called PublicArray because it
 contains an array in a public property: 'data' .

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names, and a lot more of them.

 A few examples of usage:

 let arr = getPublicArray([1,2,3,4,5,6]);
 arr.remove.tail(2); // arr.data is now [1,2,3,4]
 if (arr.notEmpty) arr.prepend([10]); // arr.data is now [10,1,2,3,4]
 **********************/

export declare class PublicArray extends PublicArrayContent {


	readonly copy: PublicArray; // (an independent copy of this instance).
	readonly filter; // PublicArrayFilter
	readonly getConverted; // PublicArrayGetterConverter;
	readonly get; // PublicArrayGetter;
	readonly getAndRemove; // PublicArrayGetterRemover;
	readonly insert; // PublicArrayInserter;
	readonly remove; // PublicArrayRemover;
	readonly replace; // PublicArrayReplacer;
	readonly sort; // PublicArraySorter;


	private _filter; // PublicArrayFilter
	private _getConverted; // PublicArrayGetterConverter
	private _get; // PublicArrayGetter;
	private _getAndRemove; // PublicArrayGetterRemover;
	private _insert; // PublicArrayInserter;
	private _remove; // PublicArrayRemover;
	private _replace; // PublicArrayReplacer;
	private _sort; // PublicArraySorter;


	constructor(data?: any[]);


	append(values: any[]): this;


	prepend(values: any[]): this;


	forEach(
		iterationFunction: (currentValue: any, currentIndex?: number, entireArray?: any[]) => any
	): this;


	set(newArray: any[]): this;
}
