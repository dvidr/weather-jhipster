import { NgModule } from '@angular/core';

import { WeatherSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WeatherSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WeatherSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WeatherSharedCommonModule {}
