import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../features/login/login.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { PendingComponent } from '../features/dashboard/pending/pending.component';
import { UploadedComponent } from '../features/dashboard/uploaded/uploaded.component';
import { ApprovedComponent } from '../features/dashboard/approved/approved.component';

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, children: 	[
		{ path: 'pending', component: PendingComponent },
		{ path: 'uploaded', component: UploadedComponent},
		{ path: 'approved', component: ApprovedComponent }
	]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}