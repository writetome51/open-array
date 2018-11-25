import { DIFactory } from '@writetome51/di-factory';
import { PublicArrayItemRemover } from '@writetome51/public-array-item-remover';
import { PublicArrayContent } from '@writetome51/public-array-content';
import { PublicArrayItemGetter } from '@writetome51/public-array-item-getter';
import { PublicArrayItemInserter } from '@writetome51/public-array-item-inserter';
import { PublicArraySorter } from '@writetome51/public-array-sorter';
import { PublicArrayItemReplacer } from '@writetome51/public-array-item-replacer';
import { PublicArrayGetterConverter } from '@writetome51/public-array-getter-converter';
import { PublicArrayItemGetterRemover } from '@writetome51/public-array-item-getter-remover';
import { PublicArrayFilter } from '@writetome51/public-array-filter';
import { append, prepend } from '@writetome51/array-append-prepend/append-prepend';


/**************
 This class is called PublicArray because although the class instance is not the array itself, and the
 actual array is contained inside it in a property, that property is public (or, in other words, open).

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names.

 A few examples of usage:

 let arr = DIFactory.getInstance(PublicArray, [[1,2,3,4,5,6]]);
 arr.remove.tail(2); // arr.data is now [1,2,3,4]
 if (arr.notEmpty) arr.prepend([10]); // arr.data is now [10,1,2,3,4]

 To access the array itself, you access the 'data' property.
 *************/


export class PublicArray extends PublicArrayContent {


	constructor(
		// begin injected dependencies...
		private _filter: PublicArrayFilter,
		private _getConverted: PublicArrayGetterConverter,
		private _get: PublicArrayItemGetter,
		private _getAndRemove: PublicArrayItemGetterRemover,
		private _insert: PublicArrayItemInserter,
		private _remove: PublicArrayItemRemover,
		private _replace: PublicArrayItemReplacer,
		private _sort: PublicArraySorter,
		// ... end injected dependencies

		data = []
	) {

		super(data);

		this._createGetterAndOrSetterForEach(
			// each of these is a public property:
			['filter', 'getConverted', 'get', 'getAndRemove', 'insert',
				'remove', 'replace', 'sort'],
			{
				get_getterFunction: (property) => {
					return () => {
						this[`_${property}`].data = this.data;
						return this[`_${property}`];
					};
				}
			}
		);
	}


	// this.copy  -- returns independent copy of this.
	get copy() {
		// @ts-ignore
		return DIFactory.getInstance(PublicArray, [this.get.copy()]);
	}


	append(values: any[]) {
		return this.returnThis_after(append(values, this.data));
	}


	prepend(values: any[]) {
		return this.returnThis_after(prepend(values, this.data));
	}


	// this.forEach(iterationFunction)
	// iterationFunction = function(currentItem, currentIndex, entireArray){...}
	forEach(iterationFunction) {
		this.returnThis_after(this.data.forEach(iterationFunction));
	}


}
