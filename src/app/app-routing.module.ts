import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {CarListComponent} from './components/car-list/car-list.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cars', component: CarListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
