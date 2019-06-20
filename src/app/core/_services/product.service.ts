import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { product, productsCollection, productsNew } from "../_mockup/product";
import { LocalStorageService } from "./local.storage.service";
import { AppConstant } from "../_const/app.constant";

@Injectable({ providedIn: "root" })
export class ProductSerivce {
  Products: product[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  getAllProducts(): Observable<any> {
    this.Products = productsCollection.concat(productsNew);
    this.localStorageService.set(AppConstant.ALL_PRODUCTS, this.Products);
    return of(this.Products);
  }
}
