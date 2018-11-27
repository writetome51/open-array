import { DIFactory } from '@writetome51/di-factory';
import { PublicArrayFilter } from '@writetome51/public-array-filter';
import { PublicArrayGetter } from '@writetome51/public-array-getter';
import { PublicArrayGetterConverter } from '@writetome51/public-array-getter-converter';
import { PublicArrayGetterRemover } from '@writetome51/public-array-getter-remover';
import { PublicArrayInserter } from '@writetome51/public-array-inserter';
import { PublicArrayRemover } from '@writetome51/public-array-remover';
import { PublicArrayReplacer } from '@writetome51/public-array-replacer';
import { PublicArraySorter } from '@writetome51/public-array-sorter';
import { PublicArray } from './privy/PublicArray';


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


export function getPublicArray(array = []) {
	return DIFactory.getInstance(PublicArray, [array]);
}
