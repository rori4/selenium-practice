import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeleniumComponent } from './selenium.component';
import { SimpleRegistrationComponent } from './simple-registration/simple-registration.component';


const routes: Routes = [{
  path: '',
  component: SeleniumComponent,
  children: [
    {
      path: 'simple-registration',
      component: SimpleRegistrationComponent,
    },
  ],
}];

@NgModule({
  imports: [
  RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SeleniumRoutingModule {

}

export const routedComponents = [
  SeleniumComponent,
  SimpleRegistrationComponent,
];
