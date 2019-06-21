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
    let localProduct = this.localStorageService.get(AppConstant.ALL_PRODUCTS);
    let mergeArray = localProduct
      .concat(productsCollection)
      .concat(productsNew);
    this.Products = mergeArray.filter(function(item, pos) {
      return mergeArray.indexOf(item) == pos;
    });

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

  addProduct(product: product): boolean {
    if (!product) {
      return false;
    }
    let localProducts = this.localStorageService.get(AppConstant.ALL_PRODUCTS);
    localProducts.push(product);
    this.localStorageService.set(AppConstant.ALL_PRODUCTS, localProducts);
    return true;
  }
  isString(val) {
    return typeof val === "string";
  }
}
