import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductSerivce } from "src/app/core/_services/product.service";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AdminProductCreateComponent } from "../admin-product-create/admin-product-create.component";
import * as $ from "jquery";

@Component({
  selector: "app-admin-product",
  templateUrl: "./admin-product.component.html",
  styleUrls: ["./admin-product.component.scss"]
})
export class AdminProductComponent implements OnInit, OnDestroy, AfterViewInit {
  arrProducts: any;
  headerColumnKey: Array<string> = [];
  orderSubscription: Subscription;
  intervalTimer: any;
  constructor(
    private productService: ProductSerivce,
    private dialog: MatDialog
  ) {
    this.orderSubscription = this.productService.currentProducts.subscribe(
      products => {
        this.arrProducts = products.reverse();
      }
    );
  }

  ngOnInit() {
    if (this.arrProducts) {
      if (this.headerColumnKey === undefined) {
        this.headerColumnKey = [];
      }
      for (var k in this.arrProducts[0]) {
        if (typeof this.arrProducts[0][k] !== "function") {
          if (k === "url") {
            continue;
          }
          if(k === "image" && typeof this.arrProducts[0][k] === "object"){
            continue;
          }
          this.headerColumnKey.push(k);
        }
      }
    }
    this.intervalTimer = setInterval(() => {
      this.productService.intervalOrders();
    }, 5000);
  }
  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
    }
  }

  ngAfterViewInit(): void {

    let dom = $("#datatable-default");
    if(!dom){
      return;
    }
    (function($) {
      "use strict";
      var datatableInit = function() {
        ($("#datatable-default") as any).dataTable({
          dom: '<"row"<"col-lg-6"l><"col-lg-6"f>><"table-responsive"t>p'
        });
      };

      $(function() {
        datatableInit();
      });
    }.apply(this, [jQuery]));
  }

  addProduct() {
    let hasCollapsed = $("html").hasClass("sidebar-left-collapsed");
    let paddingClass = ["paddingLeft-custom", "mx-auto"];
    if (hasCollapsed) {
      paddingClass = ["mx-auto"];
    }
    this.dialog
      .open(AdminProductCreateComponent, {
        width: "100%",
        panelClass: paddingClass,
        minWidth: "500px",
        height: "70vh"
      })
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }

  identify(index, item) {
    return item.id;
  }
  onEditItem(item) {
    console.log(item);
  }
  onDeleteItem(item) {
    console.log(item);
  }
  isString(val) {
    return typeof val === "string";
  }
}
