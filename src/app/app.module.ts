import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarListComponent} from './components/car-list/car-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './components/navbar/navbar.component';
import {LoginComponent} from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
