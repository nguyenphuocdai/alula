import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import { ShopIndexComponent } from './shop-index/shop-index.component';
import { CartService } from 'src/app/core/_services/cart.service';

@NgModule({
  declarations: [ShopComponent, ShopIndexComponent],
  exports: [ShopComponent, ShopIndexComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
  providers: [CartService]
})
export class ShopModule { }
