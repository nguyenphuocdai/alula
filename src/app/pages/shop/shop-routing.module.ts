import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShopComponent } from "./shop.component";
import { ShopIndexComponent } from "./shop-index/shop-index.component";

const routes: Routes = [
  {
    path: "",
    component: ShopComponent,
    children: [{ path: "", component: ShopIndexComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
