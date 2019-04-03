"use strict";
// We're loading these lazily inside PublicArray's getter functions to boost performance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.__instanceProperties = [
    'filter', 'getConverted', 'get', 'getAndRemove', 'insert', 'remove', 'replace', 'sort'
];
// These must be listed in same order as __instanceProperties.
exports.__dependencyClasses = [
    { name: 'PublicArrayFilter', path: '@writetome51/public-array-filter' },
    { name: 'PublicArrayGetterConverter', path: '@writetome51/public-array-getter-converter' },
    { name: 'PublicArrayGetter', path: '@writetome51/public-array-getter' },
    { name: 'PublicArrayGetterRemover', path: '@writetome51/public-array-getter-remover' },
    { name: 'PublicArrayInserter', path: '@writetome51/public-array-inserter' },
    { name: 'PublicArrayRemover', path: '@writetome51/public-array-remover' },
    { name: 'PublicArrayReplacer', path: '@writetome51/public-array-replacer' },
    { name: 'PublicArraySorter', path: '@writetome51/public-array-sorter' }
];
function __getInstance(dependencyIndex) {
    var dependency = exports.__dependencyClasses[dependencyIndex];
    // @ts-ignore
    var constructorFn = require(dependency.path)[dependency.name];
    return new constructorFn();
}
exports.__getInstance = __getInstance;
