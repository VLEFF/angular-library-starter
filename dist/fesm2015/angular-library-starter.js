/**
 * @license angular-library-starter
 * MIT license
 */

import { Injectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SumService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SumComponent {
    /**
     * @param {?} sumService
     */
    constructor(sumService) {
        this.sumService = sumService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sumService.calculate(45, 78, 90, 674);
        this.sum = this.sumService.sum;
    }
}
SumComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmp-sum',
                template: "<div class=\"sum\">\n    <p>Somma</p>\n    <p>{{ sum }}</p>\n</div>",
                styles: [".sum p {\n  color: red; }\n"]
            }] }
];
/** @nocollapse */
SumComponent.ctorParameters = () => [
    { type: SumService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
class ArithmeticModule {
    /**
     * Use in AppModule: new instance of SumService.
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ArithmeticModule,
            providers: [SumService]
        };
    }
    /**
     * Use in features modules with lazy loading: new instance of SumService.
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: ArithmeticModule,
            providers: [SumService]
        };
    }
}
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
