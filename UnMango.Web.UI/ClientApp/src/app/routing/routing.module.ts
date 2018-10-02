import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MinecraftComponent } from '../minecraft';
import { DashboardComponent } from '../dashboard';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'minecraft', component: MinecraftComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
