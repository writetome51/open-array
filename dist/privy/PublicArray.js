"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var array_append_prepend_1 = require("@writetome51/array-append-prepend");
var set_array_1 = require("@writetome51/set-array");
var di_factory_1 = require("@writetome51/di-factory");
var public_array_content_1 = require("@writetome51/public-array-content");
var public_array_filter_1 = require("@writetome51/public-array-filter");
var public_array_getter_converter_1 = require("@writetome51/public-array-getter-converter");
var public_array_getter_1 = require("@writetome51/public-array-getter");
var public_array_getter_remover_1 = require("@writetome51/public-array-getter-remover");
var public_array_inserter_1 = require("@writetome51/public-array-inserter");
var public_array_remover_1 = require("@writetome51/public-array-remover");
var public_array_sorter_1 = require("@writetome51/public-array-sorter");
var public_array_replacer_1 = require("@writetome51/public-array-replacer");
/***********************
 This class is for general array manipulation.  It's called PublicArray because it
 contains an array in a public property: 'data' .

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names, and a lot more of them.

 A few examples of usage:

 let arr = getPublicArray([1,2,3,4,5,6]);
 arr.remove.tail(2); // arr.data is now [1,2,3,4]
 if (arr.notEmpty) arr.prepend([10]); // arr.data is now [10,1,2,3,4]
 **********************/
var PublicArray = /** @class */ (function (_super) {
    __extends(PublicArray, _super);
    // Public Properties:
    // readonly  copy: PublicArray (an independent copy of this instance).
    // Lazy-Loading is used to instantiate these properties:
    // readonly  filter: PublicArrayFilter;
    // readonly  getConverted: PublicArrayGetterConverter;
    // readonly  get: PublicArrayGetter;
    // readonly  getAndRemove: PublicArrayGetterRemover;
    // readonly  insert: PublicArrayInserter;
    // readonly  remove: PublicArrayRemover;
    // readonly  replace: PublicArrayReplacer;
    // readonly  sort: PublicArraySorter;
    function PublicArray(data // the actual array, represented by inherited property this.data
    ) {
        if (data === void 0) { data = []; }
        var _this = _super.call(this, data) || this;
        _this._createGetterAndOrSetterForEach(
        // each of these represents a public property:
        [
            { name: 'filter', class: public_array_filter_1.PublicArrayFilter },
            { name: 'getConverted', class: public_array_getter_converter_1.PublicArrayGetterConverter },
            { name: 'get', class: public_array_getter_1.PublicArrayGetter },
            { name: 'getAndRemove', class: public_array_getter_remover_1.PublicArrayGetterRemover },
            { name: 'insert', class: public_array_inserter_1.PublicArrayInserter },
            { name: 'remove', class: public_array_remover_1.PublicArrayRemover },
            { name: 'replace', class: public_array_replacer_1.PublicArrayReplacer },
            { name: 'sort', class: public_array_sorter_1.PublicArraySorter }
        ], {
            get_getterFunction: function (property) {
                // Lazy-Loading is used to instantiate these properties:
                if (!(_this["_" + property.name])) { // if property not set...
                    _this["_" + property.name] = di_factory_1.DIFactory.getInstance(property.class);
                }
                return function () {
                    _this["_" + property.name].data = _this.data;
                    return _this["_" + property.name];
                };
            }
        });
        return _this;
    }
    Object.defineProperty(PublicArray.prototype, "copy", {
        // this.copy  -- returns independent copy of 'this', not linked to 'this' in any way.
        get: function () {
            // @ts-ignore
            return di_factory_1.DIFactory.getInstance(PublicArray, [this.get.copy()]);
        },
        enumerable: true,
        configurable: true
    });
    PublicArray.prototype.append = function (values) {
        return this.returnThis_after(array_append_prepend_1.append(values, this.data));
    };
    PublicArray.prototype.prepend = function (values) {
        return this.returnThis_after(array_append_prepend_1.prepend(values, this.data));
    };
    PublicArray.prototype.forEach = function (iterationFunction) {
        return this.returnThis_after(this.data.forEach(iterationFunction));
    };
    // Use this to change the value of this.data without breaking its memory reference.
    PublicArray.prototype.set = function (newArray) {
        return this.returnThis_after(set_array_1.setArray(this.data, newArray));
    };
    return PublicArray;
}(public_array_content_1.PublicArrayContent));
exports.PublicArray = PublicArray;
