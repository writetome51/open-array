import { append, prepend } from '@writetome51/array-append-prepend';
import { setArray } from '@writetome51/set-array';
import { DIFactory } from '@writetome51/di-factory';
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


export class PublicArray extends PublicArrayContent {


	// readonly  copy: PublicArray (an independent copy of this instance).
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
	private _get; // PublicArrayGetter
	private _getAndRemove; // PublicArrayGetterRemover
	private _insert; // PublicArrayInserter
	private _remove; // PublicArrayRemover
	private _replace; // PublicArrayReplacer
	private _sort; // PublicArraySorter


	constructor(
		data = [] // the actual array, represented by inherited property this.data
	) {

		super(data);

		let dependencyClasses = [
			{path: '@writetome51/public-array-filter', name: 'PublicArrayFilter'},
			{path: '@writetome51/public-array-getter-converter', name: 'PublicArrayGetterConverter'},
			{path: '@writetome51/public-array-getter', name: 'PublicArrayGetter'},
			{path: '@writetome51/public-array-getter-remover', name: 'PublicArrayGetterRemover'},
			{path: '@writetome51/public-array-inserter', name: 'PublicArrayInserter'},
			{path: '@writetome51/public-array-remover', name: 'PublicArrayRemover'},
			{path: '@writetome51/public-array-replacer', name: 'PublicArrayReplacer'},
			{path: '@writetome51/public-array-sorter', name: 'PublicArraySorter'}
		];

		this._createGetterAndOrSetterForEach(
			// each of these is a public property:
			['filter', 'getConverted', 'get', 'getAndRemove', 'insert',
				'remove', 'replace', 'sort'],
			{
				get_getterFunction: (property, index) => {
					return () => {
						// Lazy-Loading is used to instantiate these properties:
						if (!(this[`_${property}`])) { // if property not set...
							let dependencyClass = dependencyClasses[index];
							// @ts-ignore
							let modul = require(dependencyClass.path);
							this[`_${property}`] = DIFactory.getInstance(modul[dependencyClass.name]);
						}
						this[`_${property}`].data = this.data;
						return this[`_${property}`];
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
