/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var SumService = /** @class */ (function () {
    function SumService() {
    }
    /**
     * Calculates the sum.
     * @param addends Numbers to be added
     */
    /**
     * Calculates the sum.
     * @param {...?} addends Numbers to be added
     * @return {?}
     */
    SumService.prototype.calculate = /**
     * Calculates the sum.
     * @param {...?} addends Numbers to be added
     * @return {?}
     */
    function () {
        var addends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            addends[_i] = arguments[_i];
        }
        this.sum = 0;
        for (var _a = 0, addends_1 = addends; _a < addends_1.length; _a++) {
            var addend = addends_1[_a];
            this.sum += addend;
        }
    };
    SumService.decorators = [
        { type: Injectable }
    ];
    return SumService;
}());
export { SumService };
if (false) {
    /**
     * Stores the last sum.
     * @type {?}
     */
    SumService.prototype.sum;
}
//# sourceMappingURL=sum.service.js.map