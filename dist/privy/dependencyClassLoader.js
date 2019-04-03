"use strict";
// We're loading these lazily inside PublicArray's getter functions to boost performance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.__instanceProperties = [
    'filter', 'getConverted', 'get', 'getAndRemove', 'insert', 'remove', 'replace', 'sort'
];
// These must be in the same order as __instanceProperties.
exports.__classNames = [
    'PublicArrayFilter',
    'PublicArrayGetterConverter',
    'PublicArrayGetter',
    'PublicArrayGetterRemover',
    'PublicArrayInserter',
    'PublicArrayRemover',
    'PublicArrayReplacer',
    'PublicArraySorter'
];
exports.__classGetter = {
    getPublicArrayFilter: function () {
        // @ts-ignore
        return require('@writetome51/public-array-filter').PublicArrayFilter;
    },
    getPublicArrayGetterConverter: function () {
        // @ts-ignore
        return require('@writetome51/public-array-getter-converter').PublicArrayGetterConverter;
    },
    getPublicArrayGetter: function () {
        // @ts-ignore
        return require('@writetome51/public-array-getter').PublicArrayGetter;
    },
    getPublicArrayGetterRemover: function () {
        // @ts-ignore
        return require('@writetome51/public-array-getter-remover').PublicArrayGetterRemover;
    },
    getPublicArrayInserter: function () {
        // @ts-ignore
        return require('@writetome51/public-array-inserter').PublicArrayInserter;
    },
    getPublicArrayRemover: function () {
        // @ts-ignore
        return require('@writetome51/public-array-remover').PublicArrayRemover;
    },
    getPublicArrayReplacer: function () {
        // @ts-ignore
        return require('@writetome51/public-array-replacer').PublicArrayReplacer;
    },
    getPublicArraySorter: function () {
        // @ts-ignore
        return require('@writetome51/public-array-sorter').PublicArraySorter;
    },
};
function __getInstance(dependencyIndex) {
    var className = exports.__classNames[dependencyIndex];
    var dependencyClass = exports.__classGetter["get" + className]();
    return new dependencyClass();
}
exports.__getInstance = __getInstance;
