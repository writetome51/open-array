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
var public_array_content_1 = require("@writetome51/public-array-content");
var dependencyClassLoader = require("./privy/dependencyClassLoader");
/***********************
 This class is for general array manipulation.  It's called PublicArray because it
 contains an array in a public property: 'data' .

 The main reason you would use this class is if you hate JavaScript's built-in Array
 methods, like .slice(), .splice(), .push(), and .shift().  This class has much clearer
 and expressive method names, and a lot more of them.
 **********************/
var PublicArray = /** @class */ (function (_super) {
    __extends(PublicArray, _super);
    function PublicArray(data // the actual array, represented by inherited property this.data
    ) {
        if (data === void 0) { data = []; }
        var _this = _super.call(this, data) || this;
        _this._createGetterAndOrSetterForEach(dependencyClassLoader.__instanceProperties, {
            get_getterFunction: function (property, index) {
                return function () {
                    // Lazy-Loading is used to instantiate each property:
                    if (!(_this["__" + property])) { // if property not set...
                        _this["__" + property] = dependencyClassLoader.__getInstance(index);
                    }
                    _this["__" + property].data = _this.data;
                    return _this["__" + property];
                };
            }
        });
        return _this;
    }
    return PublicArray;
}(public_array_content_1.PublicArrayContent));
exports.PublicArray = PublicArray;
