import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MinecraftComponent } from '../minecraft';
import { DashboardComponent } from '../dashboard';
import { LoginComponent } from '../login';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'minecraft', component: MinecraftComponent },
  { path: 'login', component: LoginComponent }
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
