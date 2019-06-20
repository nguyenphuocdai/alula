import { Injectable, EventEmitter } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { product } from "../_mockup/product";
import { LocalStorageService } from "./local.storage.service";
import { AppConstant } from "../_const/app.constant";

@Injectable({ providedIn: "root" })
export class OrderSerivce {
  //   Products: product[] = [];
  public currentOrders: Observable<any[]>;
  private currentOrderSubject: BehaviorSubject<any[]>;

  constructor(private localStorageService: LocalStorageService) {
    this.currentOrderSubject = new BehaviorSubject<any[]>(
      this.localStorageService.get(AppConstant.BILL_ORDER)
    );
    this.currentOrders = this.currentOrderSubject.asObservable();
  }

  subjectOrders(arrOrders) {
    console.log(arrOrders);
    this.currentOrderSubject.next(arrOrders);
  }

  intervalOrders() {
    let intervalData = this.localStorageService.get(AppConstant.BILL_ORDER);
    this.currentOrderSubject.next(intervalData);
  }
}
