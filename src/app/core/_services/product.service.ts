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

  public currentCompareProducts: Observable<any[]>;
  private currentCompareSubject: BehaviorSubject<any[]>;

  constructor(private localStorageService: LocalStorageService) {
    // subject all product
    this.currentProductSubject = new BehaviorSubject<any[]>(
      this.localStorageService.get(AppConstant.ALL_PRODUCTS)
    );
    this.currentProducts = this.currentProductSubject.asObservable();

    // subject Compare
    this.currentCompareSubject = new BehaviorSubject<any[]>(
      this.localStorageService.get(AppConstant.COMPARE_PRODUCT_LIST)
    );
    this.currentCompareProducts = this.currentCompareSubject.asObservable();
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

  addCompareProduct(product: product): number {
    // invalid data
    if (!product) {
      return 422;
    }
    let localProducts = this.localStorageService.get(
      AppConstant.COMPARE_PRODUCT_LIST
    );

    // data compare full default 3
    if (localProducts.length === 3) {
      return 303;
    }

    let existProduct = this.existCompareProduct(product);
    if (existProduct) {
      localProducts.push(product);
      this.localStorageService.set(
        AppConstant.COMPARE_PRODUCT_LIST,
        localProducts
      );
      this.currentCompareSubject.next(localProducts);
      return 200;
    } else {
      return 409;
    }
  }
  existCompareProduct(product): boolean {
    let localProducts = this.localStorageService.get(
      AppConstant.COMPARE_PRODUCT_LIST
    );
    let indexProduct = localProducts.findIndex(x => x.id === product.id);

    if (indexProduct === -1) {
      return true;
    }

    return false;
  }
}
