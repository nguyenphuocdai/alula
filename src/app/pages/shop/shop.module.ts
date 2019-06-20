import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShopIndexComponent } from './shop-index/shop-index.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ShopComponent, ShopIndexComponent],
  exports: [ShopComponent, ShopIndexComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ]
})
export class ShopModule { }
