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
// import { PublicArrayRemover } from '@writetome51/public-array-remover';
// import { PublicArrayGetter } from '@writetome51/public-array-getter';
// import { PublicArrayInserter } from '@writetome51/public-array-inserter';
// import { PublicArraySorter } from '@writetome51/public-array-sorter';
// import { PublicArrayReplacer } from '@writetome51/public-array-replacer';
// import { PublicArrayGetterConverter } from '@writetome51/public-array-getter-converter';
// import { PublicArrayGetterRemover } from '@writetome51/public-array-getter-remover';
// import { PublicArrayFilter } from '@writetome51/public-array-filter';
/**************
 This class is called PublicArray because an array is contained inside it,
 in a public property: 'data'

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names.

 A few examples of usage:

 let arr = getPublicArray( [1,2,3,4,5,6] );
 arr.remove.tail(2); // arr.data is now [1,2,3,4]
 if (arr.notEmpty) arr.prepend([10]); // arr.data is now [10,1,2,3,4]
 *************/
var PublicArray = /** @class */ (function (_super) {
    __extends(PublicArray, _super);
    //Public Properties:
    // readonly  copy: PublicArray (an independent copy of this instance).
    // readonly  filter: PublicArrayFilter;
    // readonly  getConverted: PublicArrayGetterConverter;
    // readonly  get: PublicArrayGetter;
    // readonly  getAndRemove: PublicArrayGetterRemover;
    // readonly  insert: PublicArrayInserter;
    // readonly  remove: PublicArrayRemover;
    // readonly  replace: PublicArrayReplacer;
    // readonly  sort: PublicArraySorter;
    function PublicArray(
    // begin injected dependencies...
    _filter, //: PublicArrayFilter,
    _getConverted, //: PublicArrayGetterConverter,
    _get, //: PublicArrayGetter,
    _getAndRemove, //: PublicArrayGetterRemover,
    _insert, //: PublicArrayInserter,
    _remove, //: PublicArrayRemover,
    _replace, //: PublicArrayReplacer,
    _sort, //: PublicArraySorter,
    // ... end injected dependencies
    data // the actual array, represented by inherited property this.data
    ) {
        if (data === void 0) { data = []; }
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
    // Use this for changing value of this.data without breaking its memory reference.
    PublicArray.prototype.set = function (newArray) {
        return this.returnThis_after(set_array_1.setArray(this.data, newArray));
    };
    return PublicArray;
}(public_array_content_1.PublicArrayContent));
exports.PublicArray = PublicArray;
