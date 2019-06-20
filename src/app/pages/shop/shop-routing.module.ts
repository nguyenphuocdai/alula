import { ProductDetailComponent } from './../../shared/shop/product-detail/product-detail.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShopComponent } from "./shop.component";
import { ShopIndexComponent } from "./shop-index/shop-index.component";
import { CartComponent } from 'src/app/shared/home/cart/cart.component';
import { CheckoutComponent } from 'src/app/shared/shop/checkout/checkout.component';
import { CheckoutResultComponent } from 'src/app/shared/shop/checkout-result/checkout-result.component';

const routes: Routes = [
  {
    path: "",
    component: ShopComponent,
    children: [
      { path: "", component: ShopIndexComponent },
      { path: "product-detail/:id", component: ProductDetailComponent },
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
