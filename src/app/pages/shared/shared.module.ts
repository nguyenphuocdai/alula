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
import { CartService } from 'src/app/core/_services/cart.service';
import { ProductItemComponent } from './shop/product-item/product-item.component';
import { SnackComponent } from './component/snack/snack.component';

@NgModule({
  declarations: [
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
    SnackComponent
  ],
  exports: [
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
    SnackComponent
  ],
  entryComponents: [ProductModalComponent, SnackComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
