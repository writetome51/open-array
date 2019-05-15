import { PublicArrayContent } from '@writetome51/public-array-content';
import { PublicArrayFilter } from '@writetome51/public-array-filter';
import { PublicArrayGetterConverter } from '@writetome51/public-array-getter-converter';
import { PublicArrayGetter } from '@writetome51/public-array-getter';
import { PublicArrayGetterRemover } from '@writetome51/public-array-getter-remover';
import { PublicArrayInserter } from '@writetome51/public-array-inserter';
import { PublicArrayRemover } from '@writetome51/public-array-remover';
import { PublicArrayReplacer } from '@writetome51/public-array-replacer';
import { PublicArraySorter } from '@writetome51/public-array-sorter';


/***********************
 This class is for general array manipulation.  It's called PublicArray because it
 contains an array in a public property: 'data' .

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names, and a lot more of them.
 **********************/

export declare class PublicArray extends PublicArrayContent {

	readonly filter: PublicArrayFilter;
	readonly getConverted: PublicArrayGetterConverter;
	readonly get: PublicArrayGetter;
	readonly getAndRemove: PublicArrayGetterRemover;
	readonly insert: PublicArrayInserter;
	readonly remove: PublicArrayRemover;
	readonly replace: PublicArrayReplacer;
	readonly sort: PublicArraySorter;

	private __filter;
	private __getConverted;
	private __get;
	private __getAndRemove;
	private __insert;
	private __remove;
	private __replace;
	private __sort;


	constructor(data?: any[]);

}
