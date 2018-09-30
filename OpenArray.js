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
var ObjectFactory_1 = require("@writetome51/object-factory/ObjectFactory");
var OpenArrayItemRemover_1 = require("@writetome51/open-array-item-remover/OpenArrayItemRemover");
var OpenArrayContent_1 = require("@writetome51/open-array-content/OpenArrayContent");
var OpenArrayItemGetter_1 = require("@writetome51/open-array-item-getter/OpenArrayItemGetter");
var OpenArrayItemInserter_1 = require("@writetome51/open-array-item-inserter/OpenArrayItemInserter");
var OpenArraySorter_1 = require("@writetome51/open-array-sorter/OpenArraySorter");
var OpenArrayItemReplacer_1 = require("@writetome51/open-array-item-replacer/OpenArrayItemReplacer");
var OpenArrayGetterConverter_1 = require("@writetome51/open-array-getter-converter/OpenArrayGetterConverter");
var OpenArrayItemGetterRemover_1 = require("@writetome51/open-array-item-getter-remover/OpenArrayItemGetterRemover");
var OpenArrayFilter_1 = require("@writetome51/open-array-filter/OpenArrayFilter");
var array_append_prepend_1 = require("@writetome51/array-append-prepend");
/**************
 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names.

 The difference between this class and ArrayEditor?  ArrayEditor is for performing
 many operations on an array that take multiple lines to do.  This class is intended
 for performing small tasks, for example:

 let arr = ObjectFactory.getInstance(OpenArray, [[1,2,3,4,5,6]]);
 arr.remove.tail(2); // arr.data is now [1,2,3,4]

 Another example: (arr is same as one above)
 if (arr.notEmpty) arr = arr.prepend([10]); // arr.data is now [10,1,2,3,4]

 Another difference from ArrayEditor is here there are no import() or
 export() methods.  To access the array, you access the 'data' property.
 *************/
var OpenArray = /** @class */ (function (_super) {
    __extends(OpenArray, _super);
    function OpenArray(
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
    Object.defineProperty(OpenArray.prototype, "append", {
        // becomes this.append(values)
        get: function () {
            var _this = this;
            return function (values) {
                array_append_prepend_1.append(values, _this.data);
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpenArray.prototype, "prepend", {
        // becomes this.prepend(values)
        get: function () {
            var _this = this;
            return function (values) {
                array_append_prepend_1.prepend(values, _this.data);
            };
        },
        enumerable: true,
        configurable: true
    });
    return OpenArray;
}(OpenArrayContent_1.OpenArrayContent));
exports.OpenArray = OpenArray;
ObjectFactory_1.ObjectFactory.register({
    class: OpenArray,
    dependencies: [
        OpenArrayFilter_1.OpenArrayFilter, OpenArrayGetterConverter_1.OpenArrayGetterConverter, OpenArrayItemGetter_1.OpenArrayItemGetter,
        OpenArrayItemGetterRemover_1.OpenArrayItemGetterRemover, OpenArrayItemInserter_1.OpenArrayItemInserter,
        OpenArrayItemRemover_1.OpenArrayItemRemover, OpenArrayItemReplacer_1.OpenArrayItemReplacer, OpenArraySorter_1.OpenArraySorter
    ]
});
