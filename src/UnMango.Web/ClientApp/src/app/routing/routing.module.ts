import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as app from '../components';

export const routes: Routes = [
  { path: '', component: app.HomeComponent, pathMatch: 'full' },
  { path: 'counter', component: app.CounterComponent },
  { path: 'fetch-data', component: app.FetchDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
