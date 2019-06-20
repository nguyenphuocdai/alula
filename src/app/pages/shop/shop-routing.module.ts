import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShopComponent } from "./shop.component";
import { ShopIndexComponent } from "./shop-index/shop-index.component";
import { CartComponent } from "../shared/home/cart/cart.component";
import { CheckoutComponent } from '../shared/shop/checkout/checkout.component';
import { CheckoutResultComponent } from '../shared/shop/checkout-result/checkout-result.component';

const routes: Routes = [
  {
    path: "",
    component: ShopComponent,
    children: [
      { path: "", component: ShopIndexComponent },
      { path: "cart", component: CartComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "checkout-result/:id", component: CheckoutResultComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
