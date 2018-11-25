"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var di_factory_1 = require("@writetome51/di-factory");
var public_array_item_remover_1 = require("@writetome51/public-array-item-remover");
var public_array_content_1 = require("@writetome51/public-array-content");
var public_array_item_getter_1 = require("@writetome51/public-array-item-getter");
var public_array_item_inserter_1 = require("@writetome51/public-array-item-inserter");
var public_array_sorter_1 = require("@writetome51/public-array-sorter");
var public_array_item_replacer_1 = require("@writetome51/public-array-item-replacer");
var public_array_getter_converter_1 = require("@writetome51/public-array-getter-converter");
var public_array_item_getter_remover_1 = require("@writetome51/public-array-item-getter-remover");
var public_array_filter_1 = require("@writetome51/public-array-filter");
var append_prepend_1 = require("@writetome51/array-append-prepend/append-prepend");
/**************
 This class is called PublicArray because although the class instance is not the array itself, and the
 actual array is contained inside it in a property, that property is public (or, in other words, open).

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names.

 A few examples of usage:

 let arr = ObjectFactory.getInstance(PublicArray, [[1,2,3,4,5,6]]);
 arr.remove.tail(2); // arr.data is now [1,2,3,4]
 if (arr.notEmpty) arr.prepend([10]); // arr.data is now [10,1,2,3,4]

 To access the array itself, you access the 'data' property.
 *************/
var PublicArray = /** @class */ (function (_super) {
    __extends(PublicArray, _super);
    function PublicArray(
    // begin injected dependencies...
    _filter, _getConverted, _get, _getAndRemove, _insert, _remove, _replace, _sort, 
    // ... end injected dependencies
    data) {
        if (data === void 0) { 
        // ... end injected dependencies
        data = []; }
        var _this = _super.call(this, data) || this;
        _this._filter = _filter;
        _this._getConverted = _getConverted;
        _this._get = _get;
        _this._getAndRemove = _getAndRemove;
        _this._insert = _insert;
        _this._remove = _remove;
        _this._replace = _replace;
        _this._sort = _sort;
        _this._createGetterAndOrSetterForEach(
        // each of these is a public property:
        ['filter', 'getConverted', 'get', 'getAndRemove', 'insert',
            'remove', 'replace', 'sort'], {
            get_getterFunction: function (property) {
                return function () {
                    _this["_" + property].data = _this.data;
                    return _this["_" + property];
                };
            }
        });
        return _this;
    }
    Object.defineProperty(PublicArray.prototype, "copy", {
        // this.copy  -- returns independent copy of this.
        get: function () {
            // @ts-ignore
            return di_factory_1.ObjectFactory.getInstance(PublicArray, [this.get.copy()]);
        },
        enumerable: true,
        configurable: true
    });
    PublicArray.prototype.append = function (values) {
        return this.returnThis_after(append_prepend_1.append(values, this.data));
    };
    PublicArray.prototype.prepend = function (values) {
        return this.returnThis_after(append_prepend_1.prepend(values, this.data));
    };
    // this.forEach(iterationFunction)
    // iterationFunction = function(currentItem, currentIndex, entireArray){...}
    PublicArray.prototype.forEach = function (iterationFunction) {
        this.returnThis_after(this.data.forEach(iterationFunction));
    };
    return PublicArray;
}(public_array_content_1.PublicArrayContent));
exports.PublicArray = PublicArray;
di_factory_1.ObjectFactory.register({
    class: PublicArray,
    dependencies: [
        public_array_filter_1.PublicArrayFilter, public_array_getter_converter_1.PublicArrayGetterConverter, public_array_item_getter_1.PublicArrayItemGetter,
        public_array_item_getter_remover_1.PublicArrayItemGetterRemover, public_array_item_inserter_1.PublicArrayItemInserter,
        public_array_item_remover_1.PublicArrayItemRemover, public_array_item_replacer_1.PublicArrayItemReplacer, public_array_sorter_1.PublicArraySorter
    ]
});
