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
