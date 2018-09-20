import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from '../common/user.service';
import { PendingComponent } from '../features/dashboard/pending/pending.component';
import { UploadedComponent } from '../features/dashboard/uploaded/uploaded.component';
import { ApprovedComponent } from '../features/dashboard/approved/approved.component';

import { LoginComponent } from '../features/login/login.component';
import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { HeaderComponent } from '../common/components/header/header.component';
import { FooterComponent } from '../common/components/footer/footer.component';
import {UsermappingService} from './usermapping.service'
import {DashboardService} from '../features/dashboard/dashboard.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PendingComponent,
    UploadedComponent,
    ApprovedComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    CardModule,
    TableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
],
  providers: [UserService,UsermappingService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }//RouterModule.forRoot([])