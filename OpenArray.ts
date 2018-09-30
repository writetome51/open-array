import { ObjectFactory } from '@writetome51/object-factory/ObjectFactory';
import { OpenArrayItemRemover } from '@writetome51/open-array-item-remover/OpenArrayItemRemover';
import { OpenArrayContent } from '@writetome51/open-array-content/OpenArrayContent';
import { OpenArrayItemGetter } from '@writetome51/open-array-item-getter/OpenArrayItemGetter';
import { OpenArrayItemInserter } from '@writetome51/open-array-item-inserter/OpenArrayItemInserter';
import { OpenArraySorter } from '@writetome51/open-array-sorter/OpenArraySorter';
import { OpenArrayItemReplacer } from '@writetome51/open-array-item-replacer/OpenArrayItemReplacer';
import { OpenArrayGetterConverter } 
	from '@writetome51/open-array-getter-converter/OpenArrayGetterConverter';
import { OpenArrayItemGetterRemover } 
	from '@writetome51/open-array-item-getter-remover/OpenArrayItemGetterRemover';
import { OpenArrayFilter } from '@writetome51/open-array-filter/OpenArrayFilter';
import { append, prepend} from '@writetome51/array-append-prepend';


/**************
 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names.

 The difference between this class and ArrayEditor?  ArrayEditor is for performing
 many operations on an array that take multiple lines to do.  This class is intended
 for performing small tasks, for example:

 let arr = ObjectFactory.getInstance(OpenArray, [[1,2,3,4,5,6]]);
 arr.remove.tail(2); // arr.data is now [1,2,3,4]

 Another example: (arr is same as one above)
 if (arr.notEmpty) arr = arr.prepend([10]); // arr.data is now [10,1,2,3,4]

 Another difference from ArrayEditor is here there are no import() or
 export() methods.  To access the array, you access the 'data' property.
 *************/


export class OpenArray extends OpenArrayContent {


	constructor(
		// begin injected dependencies...
		private _filter: OpenArrayFilter,
		private _getConverted: OpenArrayGetterConverter,
		private _get: OpenArrayItemGetter,
		private _getAndRemove: OpenArrayItemGetterRemover,
		private _insert: OpenArrayItemInserter,
		private _remove: OpenArrayItemRemover,
		private _replace: OpenArrayItemReplacer,
		private _sort: OpenArraySorter,
		// ... end injected dependencies

		data = []
	) {

		super(data);

		this._createGetterAndOrSetterForEach(
			// each of these is a public property:
			['filter', 'getConverted',  'get', 'getAndRemove', 'insert',
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

	// becomes this.append(values)
	get append(){
		return (values: any[])=>{
			append(values, this.data);
		};
	}

	
	// becomes this.prepend(values)
	get prepend(){
		return (values: any[])=>{
			prepend(values, this.data);
		};
	}


}


ObjectFactory.register(
	{
		class: OpenArray,
		dependencies: [
			OpenArrayFilter, OpenArrayGetterConverter, OpenArrayItemGetter,
			OpenArrayItemGetterRemover, OpenArrayItemInserter,
			OpenArrayItemRemover, OpenArrayItemReplacer, OpenArraySorter
		]
	}
);
