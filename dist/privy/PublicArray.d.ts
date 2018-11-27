import { PublicArrayRemover } from '@writetome51/public-array-remover';
import { PublicArrayContent } from '@writetome51/public-array-content';
import { PublicArrayGetter } from '@writetome51/public-array-getter';
import { PublicArrayInserter } from '@writetome51/public-array-inserter';
import { PublicArraySorter } from '@writetome51/public-array-sorter';
import { PublicArrayReplacer } from '@writetome51/public-array-replacer';
import { PublicArrayGetterConverter } from '@writetome51/public-array-getter-converter';
import { PublicArrayGetterRemover } from '@writetome51/public-array-getter-remover';
import { PublicArrayFilter } from '@writetome51/public-array-filter';


/**************
 This class is called PublicArray because an array is contained inside it, in a public property.

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names.

 A few examples of usage:

 let arr = getPublicArray( [1,2,3,4,5,6] );
 arr.remove.tail(2); // arr.data is now [1,2,3,4]
 if (arr.notEmpty) arr.prepend([10]); // arr.data is now [10,1,2,3,4]

 To access the array itself, you access the 'data' property.
 *************/
export declare class PublicArray extends PublicArrayContent {

	private _filter;
	private _getConverted;
	private _get;
	private _getAndRemove;
	private _insert;
	private _remove;
	private _replace;
	private _sort;


	constructor(
		_filter: PublicArrayFilter,
		_getConverted: PublicArrayGetterConverter,
		_get: PublicArrayGetter,
		_getAndRemove: PublicArrayGetterRemover,
		_insert: PublicArrayInserter,
		_remove: PublicArrayRemover,
		_replace: PublicArrayReplacer,
		_sort: PublicArraySorter,

		// The actual array:
		data?: any[]
	);


	readonly filter: PublicArrayFilter;
	readonly getConverted: PublicArrayGetterConverter;
	readonly get: PublicArrayGetter;
	readonly getAndRemove: PublicArrayGetterRemover;
	readonly insert: PublicArrayInserter;
	readonly remove: PublicArrayRemover;
	readonly replace: PublicArrayReplacer;
	readonly sort: PublicArraySorter;
	readonly copy: PublicArray;



	append(values: any[]): this;


	prepend(values: any[]): this;


	forEach(iterationFunction: Function): this;
}
