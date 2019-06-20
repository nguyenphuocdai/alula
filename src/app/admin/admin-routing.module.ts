import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "manage",
        pathMatch: "full"
      },
      {
        path: "manage",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      { path: "**", redirectTo: "/manage" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
