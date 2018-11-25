import { DIFactory } from '@writetome51/di-factory';
import { PublicArrayContent } from '@writetome51/public-array-content';
import { PublicArrayFilter } from '@writetome51/public-array-filter';
import { PublicArrayGetter } from '@writetome51/public-array-item-getter';
import { PublicArrayGetterConverter } from '@writetome51/public-array-getter-converter';
import { PublicArrayGetterRemover } from '@writetome51/public-array-item-getter-remover';
import { PublicArrayInserter } from '@writetome51/public-array-item-inserter';
import { PublicArrayRemover } from '@writetome51/public-array-item-remover';
import { PublicArrayReplacer } from '@writetome51/public-array-item-replacer';
import { PublicArraySorter } from '@writetome51/public-array-sorter';


DIFactory.register(
	{
		class: PublicArray,
		dependencies: [
			PublicArrayFilter, PublicArrayGetterConverter, PublicArrayGetter,
			PublicArrayGetterRemover, PublicArrayInserter,
			PublicArrayRemover, PublicArrayReplacer, PublicArraySorter
		]
	}
);


export function getPublicArray(array){
	return DIFactory.getInstance(PublicArray, [array]);
}
