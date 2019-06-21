import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from 'src/app/shared/home/login/login.component';
import { RegisterComponent } from 'src/app/shared/home/register/register.component';
import { HomeAccountComponent } from 'src/app/shared/home/home-account/home-account.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeIndexComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'account', component: HomeAccountComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
