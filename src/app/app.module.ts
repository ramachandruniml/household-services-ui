import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BusinessComponent } from './pages/business/business.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SearchComponent,
    AppRoutingModule,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    BusinessComponent,
    HttpClientModule
  ],
  providers: []
})
export class AppModule { }
