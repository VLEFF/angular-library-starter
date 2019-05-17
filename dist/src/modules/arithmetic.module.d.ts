import { ModuleWithProviders } from '@angular/core';
export declare class ArithmeticModule {
    /**
     * Use in AppModule: new instance of SumService.
     */
    static forRoot(): ModuleWithProviders<ArithmeticModule>;
    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    static forChild(): ModuleWithProviders<ArithmeticModule>;
}
