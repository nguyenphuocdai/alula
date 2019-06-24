import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { HeaderComponent } from "./home/header/header.component";
import { FooterComponent } from "./home/footer/footer.component";
import { SliderComponent } from "./home/slider/slider.component";
import { BannerComponent } from "./home/banner/banner.component";
import { ProductDealsComponent } from "./home/product-deals/product-deals.component";
import { SpecialOfferComponent } from "./home/special-offer/special-offer.component";
import { ProductNewComponent } from "./home/product-new/product-new.component";
import { ProductServiceComponent } from "./home/product-service/product-service.component";
import { ProductCategoryComponent } from "./home/product-category/product-category.component";
import { BlogLatestComponent } from "./home/blog-latest/blog-latest.component";
import { ClientComponent } from "./home/client/client.component";
import { SubscribeComponent } from "./home/subscribe/subscribe.component";
import { ProductModalComponent } from "./home/product-modal/product-modal.component";
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./home/login/login.component";
import { RegisterComponent } from "./home/register/register.component";
import { CartComponent } from "./home/cart/cart.component";
import { ProductListComponent } from "./shop/product-list/product-list.component";
import { ProductItemComponent } from "./shop/product-item/product-item.component";
import { SnackComponent } from "./component/snack/snack.component";
import { CheckoutComponent } from "./shop/checkout/checkout.component";
import { CheckoutResultComponent } from "./shop/checkout-result/checkout-result.component";
import { ConfirmComponent } from "./shop/confirm/confirm.component";
import { AdminHeaderComponent } from "./admin/admin-header/admin-header.component";
import { AdminAsideComponent } from "./admin/admin-aside/admin-aside.component";
import { AdminOrderComponent } from "./admin/admin-order/admin-order.component";
import { ProductDetailComponent } from "./shop/product-detail/product-detail.component";
import { HomeAccountComponent } from "./home/home-account/home-account.component";
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProductCreateComponent } from './admin/admin-product-create/admin-product-create.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductCompareComponent } from './shop/product-compare/product-compare.component';

@NgModule({
  declarations: [
    // home
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    BannerComponent,
    ProductDealsComponent,
    SpecialOfferComponent,
    ProductNewComponent,
    ProductServiceComponent,
    ProductCategoryComponent,
    BlogLatestComponent,
    ClientComponent,
    SubscribeComponent,
    ProductModalComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProductListComponent,
    ProductItemComponent,
    SnackComponent,
    CheckoutComponent,
    CheckoutResultComponent,
    ConfirmComponent,
    // admin
    AdminHeaderComponent,
    AdminAsideComponent,
    AdminOrderComponent,
    ProductDetailComponent,
    HomeAccountComponent,
    AdminProductComponent,
    AdminProductCreateComponent,
    ProductCompareComponent
  ],
  exports: [
    // home
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    BannerComponent,
    ProductDealsComponent,
    SpecialOfferComponent,
    ProductNewComponent,
    ProductServiceComponent,
    ProductCategoryComponent,
    BlogLatestComponent,
    ClientComponent,
    SubscribeComponent,
    ProductModalComponent,
    MaterialModule,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ProductListComponent,
    ProductItemComponent,
    SnackComponent,
    CheckoutComponent,
    CheckoutResultComponent,
    ConfirmComponent,
    HomeAccountComponent,
    // admin
    AdminHeaderComponent,
    AdminAsideComponent,
    AdminOrderComponent,
    ProductDetailComponent,
    AdminProductComponent,
    AdminProductCreateComponent,
    NgxPaginationModule,
    ProductCompareComponent
  ],
  entryComponents: [ProductModalComponent, SnackComponent, ConfirmComponent,AdminProductCreateComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class SharedModule {}
