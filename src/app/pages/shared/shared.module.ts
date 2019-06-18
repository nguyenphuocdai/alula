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
import { FormsModule } from '@angular/forms';

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
    ProductModalComponent
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
    MaterialModule
  ],
  entryComponents: [ProductModalComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule {}
