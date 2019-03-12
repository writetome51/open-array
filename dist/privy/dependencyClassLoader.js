"use strict";
// We're loading these lazily inside PublicArray's getter functions to boost performance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.__dependencyClasses = [
    'PublicArrayFilter',
    'PublicArrayGetterConverter',
    'PublicArrayGetter',
    'PublicArrayGetterRemover',
    'PublicArrayInserter',
    'PublicArrayRemover',
    'PublicArrayReplacer',
    'PublicArraySorter'
];
function __getPublicArrayFilter() {
    // @ts-ignore
    return require('@writetome51/public-array-filter').PublicArrayFilter;
}
exports.__getPublicArrayFilter = __getPublicArrayFilter;
function __getPublicArrayGetterConverter() {
    // @ts-ignore
    return require('@writetome51/public-array-getter-converter').PublicArrayGetterConverter;
}
exports.__getPublicArrayGetterConverter = __getPublicArrayGetterConverter;
function __getPublicArrayGetter() {
    // @ts-ignore
    return require('@writetome51/public-array-getter').PublicArrayGetter;
}
exports.__getPublicArrayGetter = __getPublicArrayGetter;
function __getPublicArrayGetterRemover() {
    // @ts-ignore
    return require('@writetome51/public-array-getter-remover').PublicArrayGetterRemover;
}
exports.__getPublicArrayGetterRemover = __getPublicArrayGetterRemover;
function __getPublicArrayInserter() {
    // @ts-ignore
    return require('@writetome51/public-array-inserter').PublicArrayInserter;
}
exports.__getPublicArrayInserter = __getPublicArrayInserter;
function __getPublicArrayRemover() {
    // @ts-ignore
    return require('@writetome51/public-array-remover').PublicArrayRemover;
}
exports.__getPublicArrayRemover = __getPublicArrayRemover;
function __getPublicArrayReplacer() {
    // @ts-ignore
    return require('@writetome51/public-array-replacer').PublicArrayReplacer;
}
exports.__getPublicArrayReplacer = __getPublicArrayReplacer;
function __getPublicArraySorter() {
    // @ts-ignore
    return require('@writetome51/public-array-sorter').PublicArraySorter;
}
exports.__getPublicArraySorter = __getPublicArraySorter;
