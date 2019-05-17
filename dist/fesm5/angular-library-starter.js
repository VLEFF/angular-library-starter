/**
 * @license angular-library-starter
 * MIT license
 */

import { Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ArithmeticModule = /** @class */ (function () {
    function ArithmeticModule() {
    }
    /**
     * Use in AppModule: new instance of SumService.
     */
    /**
     * Use in AppModule: new instance of SumService.
     * @return {?}
     */
    ArithmeticModule.forRoot = /**
     * Use in AppModule: new instance of SumService.
     * @return {?}
     */
    function () {
        return {
            ngModule: ArithmeticModule,
            providers: [SumService]
        };
    };
    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    /**
     * Use in features modules with lazy loading: new instance of SumService.
     * @return {?}
     */
    ArithmeticModule.forChild = /**
     * Use in features modules with lazy loading: new instance of SumService.
     * @return {?}
     */
    function () {
        return {
            ngModule: ArithmeticModule,
            providers: [SumService]
        };
    };
    ArithmeticModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        // Pipes.
                        // Directives.
                        // Components.
                        SumComponent
                    ],
                    exports: [
                        // Pipes.
                        // Directives.
                        // Components.
                        SumComponent
                    ]
                },] }
    ];
    return ArithmeticModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { SumComponent, SumService, ArithmeticModule };
//# sourceMappingURL=angular-library-starter.js.map
