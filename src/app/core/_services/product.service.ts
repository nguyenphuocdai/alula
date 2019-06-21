import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { product, productsCollection, productsNew } from "../_mockup/product";
import { LocalStorageService } from "./local.storage.service";
import { AppConstant } from "../_const/app.constant";

@Injectable({ providedIn: "root" })
export class ProductSerivce {
  Products: product[] = [];
  public currentProducts: Observable<any[]>;
  private currentProductSubject: BehaviorSubject<any[]>;

  constructor(private localStorageService: LocalStorageService) {
    this.currentProductSubject = new BehaviorSubject<any[]>(
      this.localStorageService.get(AppConstant.ALL_PRODUCTS)
    );
    this.currentProducts = this.currentProductSubject.asObservable();
  }

  getAllProducts(): Observable<any> {
    this.Products = productsCollection.concat(productsNew);
    this.localStorageService.set(AppConstant.ALL_PRODUCTS, this.Products);
    return of(this.Products);
  }

  generateUniqueID() {
    return new Date().valueOf();
  }


  subjectProducts(arrProducts) {
    console.log(arrProducts);
    this.currentProductSubject.next(arrProducts);
  }

  intervalOrders() {
    let intervalData = this.localStorageService.get(AppConstant.ALL_PRODUCTS);
    this.currentProductSubject.next(intervalData);
  }
}
