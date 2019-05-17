/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class SumService {
    /**
     * Calculates the sum.
     * @param {...?} addends Numbers to be added
     * @return {?}
     */
    calculate(...addends) {
        this.sum = 0;
        for (const addend of addends) {
            this.sum += addend;
        }
    }
}
SumService.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * Stores the last sum.
     * @type {?}
     */
    SumService.prototype.sum;
}
//# sourceMappingURL=sum.service.js.map