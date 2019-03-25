import { PublicArrayContent } from '@writetome51/public-array-content';
import * as dependencyClassLoader from './privy/dependencyClassLoader';


/***********************
 This class is for general array manipulation.  It's called PublicArray because it
 contains an array in a public property: 'data' .

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names, and a lot more of them.
 **********************/


export class PublicArray extends PublicArrayContent {


	// These are all created with getter functions in the constructor.

	readonly filter; // PublicArrayFilter
	readonly getConverted; // PublicArrayGetterConverter;
	readonly get; // PublicArrayGetter;
	readonly getAndRemove; // PublicArrayGetterRemover;
	readonly insert; // PublicArrayInserter;
	readonly remove; // PublicArrayRemover;
	readonly replace; // PublicArrayReplacer;
	readonly sort; // PublicArraySorter;


	// These are all instances gotten from dependencyClasses in the constructor.

	private __filter; // PublicArrayFilter
	private __getConverted; // PublicArrayGetterConverter
	private __get; // PublicArrayGetter
	private __getAndRemove; // PublicArrayGetterRemover
	private __insert; // PublicArrayInserter
	private __remove; // PublicArrayRemover
	private __replace; // PublicArrayReplacer
	private __sort; // PublicArraySorter


	constructor(
		data = [] // the actual array, represented by inherited property this.data
	) {

		super(data);

		this._createGetterAndOrSetterForEach(
			// each of these is a public property:
			['filter', 'getConverted', 'get', 'getAndRemove', 'insert', 'remove', 'replace', 'sort'],

			{
				get_getterFunction: (property, index) => {
					return () => {

						// Lazy-Loading is used to instantiate each property:
						if (!(this[`_${property}`])) { // if property not set...
							let className = dependencyClassLoader.__dependencyClasses[index];
							let dependencyClassConstructor = dependencyClassLoader[`__get${className}`]();
							this[`__${property}`] = new dependencyClassConstructor();
						}
						this[`__${property}`].data = this.data;
						return this[`__${property}`];
					};
				}
			}
		);
	}


}
