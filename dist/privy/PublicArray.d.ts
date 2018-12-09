import { PublicArrayContent } from '@writetome51/public-array-content';


/*********************
 These imports are commented out to help improve performance.
 They're still kept here as a record of the npm module each comes from.

 // import { PublicArrayRemover } from '@writetome51/public-array-remover';
 // import { PublicArrayGetter } from '@writetome51/public-array-getter';
 // import { PublicArrayInserter } from '@writetome51/public-array-inserter';
 // import { PublicArraySorter } from '@writetome51/public-array-sorter';
 // import { PublicArrayReplacer } from '@writetome51/public-array-replacer';
 // import { PublicArrayGetterConverter } from '@writetome51/public-array-getter-converter';
 // import { PublicArrayGetterRemover } from '@writetome51/public-array-getter-remover';
 // import { PublicArrayFilter } from '@writetome51/public-array-filter';
 ********************/
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

	private _filter;
	private _getConverted;
	private _get;
	private _getAndRemove;
	private _insert;
	private _remove;
	private _replace;
	private _sort;


	// Public Properties:

	// readonly  copy: PublicArray (an independent copy of this instance).
	// readonly  filter: PublicArrayFilter;
	// readonly  getConverted: PublicArrayGetterConverter;
	// readonly  get: PublicArrayGetter;
	// readonly  getAndRemove: PublicArrayGetterRemover;
	// readonly  insert: PublicArrayInserter;
	// readonly  remove: PublicArrayRemover;
	// readonly  replace: PublicArrayReplacer;
	// readonly  sort: PublicArraySorter;


	constructor(_filter: any, // PublicArrayFilter,
				_getConverted: any, // PublicArrayGetterConverter,
				_get: any, // PublicArrayGetter,
				_getAndRemove: any, // PublicArrayGetterRemover,
				_insert: any, // PublicArrayInserter,
				_remove: any, // PublicArrayRemover,
				_replace: any, // PublicArrayReplacer,
				_sort: any, // PublicArraySorter,
				data?: any[]);


	readonly copy: PublicArray;


	append(values: any[]): this;


	prepend(values: any[]): this;


	forEach(iterationFunction: (currentValue: any, currentIndex?: number, entireArray?: any[]) => any): this;


	set(newArray: any[]): this;
}
