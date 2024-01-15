import { Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EventBildingComponent } from './event-bilding/event-bilding.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { FormsComponent } from './forms/forms.component';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'event-bilding', component: EventBildingComponent },
  { path: 'http-test', component: HttpTestComponent },
  { path: 'forms', component: FormsComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
];
