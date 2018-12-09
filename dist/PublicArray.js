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
    function PublicArray(data // the actual array, represented by inherited property this.data
    ) {
        if (data === void 0) { data = []; }
        var _this = _super.call(this, data) || this;
        var dependencyClasses = [
            { path: '@writetome51/public-array-filter', name: 'PublicArrayFilter' },
            { path: '@writetome51/public-array-getter-converter', name: 'PublicArrayGetterConverter' },
            { path: '@writetome51/public-array-getter', name: 'PublicArrayGetter' },
            { path: '@writetome51/public-array-getter-remover', name: 'PublicArrayGetterRemover' },
            { path: '@writetome51/public-array-inserter', name: 'PublicArrayInserter' },
            { path: '@writetome51/public-array-remover', name: 'PublicArrayRemover' },
            { path: '@writetome51/public-array-replacer', name: 'PublicArrayReplacer' },
            { path: '@writetome51/public-array-sorter', name: 'PublicArraySorter' }
        ];
        _this._createGetterAndOrSetterForEach(
        // each of these is a public property:
        ['filter', 'getConverted', 'get', 'getAndRemove', 'insert',
            'remove', 'replace', 'sort'], {
            get_getterFunction: function (property, index) {
                return function () {
                    // Lazy-Loading is used to instantiate these properties:
                    if (!(_this["_" + property])) { // if property not set...
                        var dependencyClass = dependencyClasses[index];
                        // @ts-ignore
                        var modul = require(dependencyClass.path);
                        _this["_" + property] = di_factory_1.DIFactory.getInstance(modul[dependencyClass.name]);
                    }
                    _this["_" + property].data = _this.data;
                    return _this["_" + property];
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