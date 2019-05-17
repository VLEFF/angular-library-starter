/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { SumService } from '../services/sum.service';
import { SumComponent } from '../components/sum.component';
// Consider registering providers using a forRoot() method
// when the module exports components, directives or pipes that require sharing the same providers instances.
// Consider registering providers also using a forChild() method
// when they requires new providers instances or different providers in child modules.
export class ArithmeticModule {
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
//# sourceMappingURL=arithmetic.module.js.map