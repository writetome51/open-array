import { append, prepend } from '@writetome51/array-append-prepend';
import { setArray } from '@writetome51/set-array';
import { DIFactory } from '@writetome51/di-factory';
import { PublicArrayContent } from '@writetome51/public-array-content';
import { PublicArrayFilter } from '@writetome51/public-array-filter';
import { PublicArrayGetterConverter } from '@writetome51/public-array-getter-converter';
import { PublicArrayGetter } from '@writetome51/public-array-getter';
import { PublicArrayGetterRemover } from '@writetome51/public-array-getter-remover';
import { PublicArrayInserter } from '@writetome51/public-array-inserter';
import { PublicArrayRemover } from '@writetome51/public-array-remover';
import { PublicArraySorter } from '@writetome51/public-array-sorter';
import { PublicArrayReplacer } from '@writetome51/public-array-replacer';


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


export class PublicArray extends PublicArrayContent {

	private _filter; // PublicArrayFilter
	private _getConverted; // PublicArrayGetterConverter
	private _get; // PublicArrayGetter
	private _getAndRemove; // PublicArrayGetterRemover
	private _insert; // PublicArrayInserter
	private _remove; // PublicArrayRemover
	private _replace; // PublicArrayReplacer
	private _sort; // PublicArraySorter


	// Public Properties:

	// readonly  copy: PublicArray (an independent copy of this instance).

	// Lazy-Loading is used to instantiate these properties:
	// readonly  filter: PublicArrayFilter;
	// readonly  getConverted: PublicArrayGetterConverter;
	// readonly  get: PublicArrayGetter;
	// readonly  getAndRemove: PublicArrayGetterRemover;
	// readonly  insert: PublicArrayInserter;
	// readonly  remove: PublicArrayRemover;
	// readonly  replace: PublicArrayReplacer;
	// readonly  sort: PublicArraySorter;


	constructor(
		data = [] // the actual array, represented by inherited property this.data
	) {

		super(data);

		this._createGetterAndOrSetterForEach(
			// each of these represents a public property:
			[
				{name: 'filter', class: PublicArrayFilter},
				{name: 'getConverted', class: PublicArrayGetterConverter},
				{name: 'get', class: PublicArrayGetter},
				{name: 'getAndRemove', class: PublicArrayGetterRemover},
				{name: 'insert', class: PublicArrayInserter},
				{name: 'remove', class: PublicArrayRemover},
				{name: 'replace', class: PublicArrayReplacer},
				{name: 'sort', class: PublicArraySorter}
			],
			{
				get_getterFunction: (property) => {
					// Lazy-Loading is used to instantiate these properties:
					if (!(this[`_${property.name}`])) { // if property not set...
						this[`_${property.name}`] = DIFactory.getInstance(property.class);
					}
					return () => {
						this[`_${property.name}`].data = this.data;
						return this[`_${property.name}`];
					};
				}
			}
		);
	}


	// this.copy  -- returns independent copy of 'this', not linked to 'this' in any way.
	get copy(): PublicArray {
		// @ts-ignore
		return DIFactory.getInstance(PublicArray, [this.get.copy()]);
	}


	append(values: any[]): this {
		return this.returnThis_after(append(values, this.data));
	}


	prepend(values: any[]): this {
		return this.returnThis_after(prepend(values, this.data));
	}


	forEach(iterationFunction: (currentValue, currentIndex?, entireArray?) => any): this {
		return this.returnThis_after(this.data.forEach(iterationFunction));
	}


	// Use this to change the value of this.data without breaking its memory reference.
	set(newArray): this {
		return this.returnThis_after(setArray(this.data, newArray));
	}


}

