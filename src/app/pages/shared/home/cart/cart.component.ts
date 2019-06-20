import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "../../../../core/_services/cart.service";
import { product } from "../../../../core/_mockup/product";
import { LocalStorageService } from "../../../../core/_services/local.storage.service";
import { AppConstant } from "../../../../core/_const/app.constant";
import { MatDialog } from "@angular/material";
import { ConfirmComponent } from "../../shop/confirm/confirm.component";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cartSubscription: Subscription;
  cartProducts: product[] = [];
  totalAmount: number = 0;

  constructor(
    private cartService: CartService,
    private localstorage: LocalStorageService,
    private dialog: MatDialog
  ) {
    this.cartSubscription = this.cartService.currentCart.subscribe(products => {
      this.cartProducts = products;
      this.totalAmount = this.handleTotalAmount(this.cartProducts);
    });
  }

  ngOnInit() {}

  handleTotalAmount(cartProductArrray: product[]) {
    let cartProducts = cartProductArrray;

    if (cartProducts.length > 0) {
      let total = 0;
      for (var i in cartProducts) {
        if (cartProducts.hasOwnProperty(i)) {
          total += cartProducts[i].priceDiscount * cartProducts[i].quatity;
        }
      }
      return Number(total);
    }
    return 0;
  }

  removeItemCart(item) {
    let index = this.cartProducts.findIndex(x => x.id === item.id);
    this.cartProducts.splice(index, 1);
    this.localstorage.set(AppConstant.CART_PRODUCTS, this.cartProducts);
    this.totalAmount = this.handleTotalAmount(this.cartProducts);
  }

  openDialog(item) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: { name: "name" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.removeItemCart(item);
      }
    });
  }
}
