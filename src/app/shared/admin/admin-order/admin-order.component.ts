import { OrderSerivce } from "./../../../core/_services/order.service";
import { LocalStorageService } from "./../../../core/_services/local.storage.service";
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  AfterViewInit
} from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-admin-order",
  templateUrl: "./admin-order.component.html",
  styleUrls: ["./admin-order.component.scss"]
})
export class AdminOrderComponent implements OnInit, OnDestroy, AfterViewInit {
  arrOrders: any;
  headerColumnKey: Array<string> = [];
  orderSubscription: Subscription;
  intervalTimer: any;
  constructor(
    private localStorageService: LocalStorageService,
    private orderSerivce: OrderSerivce,
    private cd: ChangeDetectorRef
  ) {
    this.orderSubscription = this.orderSerivce.currentOrders.subscribe(
      orders => {
        this.arrOrders = orders.reverse();
      }
    );
  }

  ngOnInit() {
    if (this.arrOrders) {
      if (this.headerColumnKey === undefined) {
        this.headerColumnKey = [];
      }
      for (var k in this.arrOrders[0]) {
        if (typeof this.arrOrders[0][k] !== "function") {
          this.headerColumnKey.push(k);
        }
      }
    }
    this.intervalTimer = setInterval(() => {
      this.orderSerivce.intervalOrders();
    }, 5000);
  }
  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
    }
  }

  ngAfterViewInit(): void {
    (function($) {
      "use strict";

      var datatableInit = function() {
        ($("#datatable-orders") as any).dataTable({
          dom: '<"row"<"col-lg-6"l><"col-lg-6"f>><"table-responsive"t>p'
        });
      };

      $(function() {
        datatableInit();
      });
    }.apply(this, [jQuery]));
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
}
