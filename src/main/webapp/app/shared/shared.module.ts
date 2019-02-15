import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { WeatherSharedLibsModule, WeatherSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [WeatherSharedLibsModule, WeatherSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [WeatherSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeatherSharedModule {
    static forRoot() {
        return {
            ngModule: WeatherSharedModule
        };
    }
}
