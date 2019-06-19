import { CartState } from "./cart-state";
import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable, of, BehaviorSubject } from "rxjs";
import { product, productsCollection } from "../_mockup/product";
import { LocalStorageService } from "./local.storage.service";
import { AppConstant } from "../_const/app.constant";

const url = "http://localhost:3000/api";
@Injectable({ providedIn: "root" })
export class CartService {

  // private cartProductsSubject: BehaviorSubject<product[]>;
  // public currentCart: Observable<product[]>;
  cartProducts = new EventEmitter<boolean>();
  private cartSubject = new Subject<CartState>();
  Products: product[] = [];
  CartState = this.cartSubject.asObservable();

  constructor(private localStorageService: LocalStorageService) {
    // this.cartProductsSubject = new BehaviorSubject<product[]>(
    //   this.localStorageService.get(AppConstant.CART_PRODUCTS)
    // );
    // this.currentCart = this.cartProductsSubject.asObservable();
  }

  // public get currentCartProducts(): product[] {
  //   return this.cartProductsSubject.value;
  // }

  addProduct(_product: product) {
    this.Products = this.localStorageService.get(AppConstant.CART_PRODUCTS);

    if (!this.Products) {
      this.Products = [];
      this.Products.push(_product);
    } else {
      for (let i = 0; i < this.Products.length; i++) {
        const element: product = this.Products[i];
        if (element.id === _product.id) {
          _product.quatity = element.quatity + 1;
          this.Products[i] = _product;
        }
      }
    }
    if (this.Products.findIndex(x => x.id === _product.id) === -1) {
      this.Products.push(_product);
    }
    this.cartSubject.next(<CartState>{ loaded: true, products: this.Products });
    // this.cartProductsSubject.next(this.Products);
    this.cartProducts.emit(true);
    this.localStorageService.set(AppConstant.CART_PRODUCTS, this.Products);
  }

  removeProduct(id: number) {
    this.Products = this.Products.filter(_item => _item.id !== id);
    this.cartSubject.next(<CartState>{
      loaded: false,
      products: this.Products
    });
  }

  getAllProducts(): Observable<any> {
    return of(productsCollection);
  }

  getCartProducts(): Observable<any> {
    this.Products = this.localStorageService.get(AppConstant.CART_PRODUCTS);
    return of(this.Products);
  }
}
