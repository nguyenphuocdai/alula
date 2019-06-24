import {
  Component,
  OnInit,
  HostListener,
  Inject,
  OnDestroy
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Subscription } from "rxjs";
import { CartService } from "../core/_services/cart.service";
import { ProductSerivce } from "../core/_services/product.service";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html"
})
export class PagesComponent implements OnInit, OnDestroy {
  isVisible: boolean = false;
  cartSubscription: Subscription;
  compareSubscription: Subscription;
  cartProducts = [];
  compareProducts = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cartService: CartService,
    private productService: ProductSerivce
  ) {}
  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    let number =
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;

    this.isVisible = number >= 150 ? true : false;
  }
  ngOnInit() {
    this.cartSubscription = this.cartService.currentCart.subscribe(products => {
      this.cartProducts = products;
    });

    this.compareSubscription = this.productService.currentCompareProducts.subscribe(
      arrCompares => {
        this.compareProducts = arrCompares;
      }
    );
  }
  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.compareSubscription.unsubscribe();
  }

  toTop(){
    window.scrollTo(0, 0);
  }
}
