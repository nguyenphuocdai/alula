import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminOrderComponent } from 'src/app/shared/admin/admin-order/admin-order.component';
import { AdminProductComponent } from 'src/app/shared/admin/admin-product/admin-product.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'product', component: AdminProductComponent },
      { path: 'customer-order', component: AdminOrderComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
