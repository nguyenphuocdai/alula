import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home-index/home-index.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeIndexComponent },
      // { path: 'log-out', component: HomeLogOutComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
