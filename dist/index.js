"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var di_factory_1 = require("@writetome51/di-factory");
var public_array_filter_1 = require("@writetome51/public-array-filter");
var public_array_getter_1 = require("@writetome51/public-array-getter");
var public_array_getter_converter_1 = require("@writetome51/public-array-getter-converter");
var public_array_getter_remover_1 = require("@writetome51/public-array-getter-remover");
var public_array_inserter_1 = require("@writetome51/public-array-inserter");
var public_array_remover_1 = require("@writetome51/public-array-remover");
var public_array_replacer_1 = require("@writetome51/public-array-replacer");
var public_array_sorter_1 = require("@writetome51/public-array-sorter");
var PublicArray_1 = require("./PublicArray");
di_factory_1.DIFactory.register({
    class: PublicArray_1.PublicArray,
    dependencies: [
        public_array_filter_1.PublicArrayFilter, public_array_getter_converter_1.PublicArrayGetterConverter, public_array_getter_1.PublicArrayGetter,
        public_array_getter_remover_1.PublicArrayGetterRemover, public_array_inserter_1.PublicArrayInserter,
        public_array_remover_1.PublicArrayRemover, public_array_replacer_1.PublicArrayReplacer, public_array_sorter_1.PublicArraySorter
    ]
});
// This must be used to instantiate PublicArray:
function getPublicArray(array) {
    if (array === void 0) { array = []; }
    return di_factory_1.DIFactory.getInstance(PublicArray_1.PublicArray, [array]);
}
exports.getPublicArray = getPublicArray;
