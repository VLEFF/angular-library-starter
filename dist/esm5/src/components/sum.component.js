/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SumService } from '../services/sum.service';
var SumComponent = /** @class */ (function () {
    function SumComponent(sumService) {
        this.sumService = sumService;
    }
    /**
     * @return {?}
     */
    SumComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.sumService.calculate(45, 78, 90, 674);
        this.sum = this.sumService.sum;
    };
    SumComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmp-sum',
                    template: "<div class=\"sum\">\n    <p>Somma</p>\n    <p>{{ sum }}</p>\n</div>",
                    styles: [".sum p {\n  color: red; }\n"]
                }] }
    ];
    /** @nocollapse */
    SumComponent.ctorParameters = function () { return [
        { type: SumService }
    ]; };
    return SumComponent;
}());
export { SumComponent };
if (false) {
    /** @type {?} */
    SumComponent.prototype.sum;
    /** @type {?} */
    SumComponent.prototype.sumService;
}
//# sourceMappingURL=sum.component.js.map