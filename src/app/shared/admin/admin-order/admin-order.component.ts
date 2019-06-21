import { OrderSerivce } from "./../../../core/_services/order.service";
import { LocalStorageService } from "./../../../core/_services/local.storage.service";
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-admin-order",
  templateUrl: "./admin-order.component.html",
  styleUrls: ["./admin-order.component.scss"]
})
export class AdminOrderComponent implements OnInit, OnDestroy {
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
