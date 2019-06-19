import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: "./home/home.module#HomeModule"
      },
      {
        path: "shop",
        loadChildren: "./shop/shop.module#ShopModule"
      },
      // {
      //   path: "account",
      //   loadChildren: "./account/account.module#AccountModule"
      // },
      // { path: "page-not-found", component: NotFoundComponent },
      { path: "**", redirectTo: "/home" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, RouterModule],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
