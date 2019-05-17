/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SumService } from '../services/sum.service';
import { SumComponent } from '../components/sum.component';
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
export { ArithmeticModule };
//# sourceMappingURL=arithmetic.module.js.map