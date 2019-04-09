import { NgModule } from '@angular/core';

import { SeleniumRoutingModule, routedComponents } from './selenium-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
  ThemeModule,
    SeleniumRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class SeleniumModule { }
