// We're loading these lazily inside PublicArray's getter functions to boost performance.

export let __dependencyClasses = [
	'PublicArrayFilter',
	'PublicArrayGetterConverter',
	'PublicArrayGetter',
	'PublicArrayGetterRemover',
	'PublicArrayInserter',
	'PublicArrayRemover',
	'PublicArrayReplacer',
	'PublicArraySorter'
];


export function __getPublicArrayFilter() {
	// @ts-ignore
	return require('@writetome51/public-array-filter').PublicArrayFilter;
}


export function __getPublicArrayGetterConverter() {
	// @ts-ignore
	return require('@writetome51/public-array-getter-converter').PublicArrayGetterConverter;
}


export function __getPublicArrayGetter() {
	// @ts-ignore
	return require('@writetome51/public-array-getter').PublicArrayGetter;
}


export function __getPublicArrayGetterRemover() {
	// @ts-ignore
	return require('@writetome51/public-array-getter-remover').PublicArrayGetterRemover;
}


export function __getPublicArrayInserter() {
	// @ts-ignore
	return require('@writetome51/public-array-inserter').PublicArrayInserter;
}


export function __getPublicArrayRemover() {
	// @ts-ignore
	return require('@writetome51/public-array-remover').PublicArrayRemover;
}


export function __getPublicArrayReplacer() {
	// @ts-ignore
	return require('@writetome51/public-array-replacer').PublicArrayReplacer;
}


export function __getPublicArraySorter() {
	// @ts-ignore
	return require('@writetome51/public-array-sorter').PublicArraySorter;
}
