import { PublicArrayContent } from '@writetome51/public-array-content';


/***********************
 This class is for general array manipulation.  It's called PublicArray because it
 contains an array in a public property: 'data' .

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names, and a lot more of them.
 **********************/

export declare class PublicArray extends PublicArrayContent {

	readonly filter: any;
	readonly getConverted: any;
	readonly get: any;
	readonly getAndRemove: any;
	readonly insert: any;
	readonly remove: any;
	readonly replace: any;
	readonly sort: any;

	private _filter;
	private _getConverted;
	private _get;
	private _getAndRemove;
	private _insert;
	private _remove;
	private _replace;
	private _sort;


	constructor(data?: any[]);


	set(newArray: any[]): void;


	append(values: any[]): this;


	prepend(values: any[]): this;


	forEach(
		iterationFunction: (currentValue: any, currentIndex?: number, entireArray?: any[]) => any
	): this;

}
