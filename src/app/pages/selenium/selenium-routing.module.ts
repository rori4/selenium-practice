import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeleniumComponent } from './selenium.component';

import { SimpleRegistrationComponent } from './simple-registration/simple-registration.component';
import { CheckboxFormComponent } from './checkbox-form/checkbox-form.component';
import { RadioButtonFormComponent } from './radio-button-form/radio-button-form.component';
import { DropdownFormComponent } from './dropdown-form/dropdown-form.component';
import { DatepickerFormComponent } from './datepicker-form/datepicker-form.component';
import { IframeFormComponent } from './iframe-form/iframe-form.component';
import { FileFormComponent } from './file-form/file-form.component';

const routes: Routes = [
  {
    path: '',
    component: SeleniumComponent,
    children: [
      {
        path: 'simple-registration',
        component: SimpleRegistrationComponent,
      },
      {
        path: 'radio-button-form',
        component: RadioButtonFormComponent,
      },
      {
        path: 'checkbox-form',
        component: CheckboxFormComponent,
      },
      {
        path: 'dropdown-form',
        component: DropdownFormComponent,
      },
      {
        path: 'datepicker-form',
        component: DatepickerFormComponent,
      },
      {
        path: 'iframe-form',
        component: IframeFormComponent,
      },
      {
        path: 'file-form',
        component: FileFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleniumRoutingModule {}

export const routedComponents = [
  SeleniumComponent,
  SimpleRegistrationComponent,
  CheckboxFormComponent,
  RadioButtonFormComponent,
  DropdownFormComponent,
  DatepickerFormComponent,
  IframeFormComponent,
  FileFormComponent,
];
