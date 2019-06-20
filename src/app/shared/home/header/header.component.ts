import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { CartService } from "src/app/core/_services/cart.service";
import { product } from "src/app/core/_mockup/product";
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from '../../shop/confirm/confirm.component';
import { User } from 'src/app/core/_models';
import { AuthenticationService } from 'src/app/core/_services';
import { LocalStorageService } from 'src/app/core/_services/local.storage.service';
import { AppConstant } from 'src/app/core/_const/app.constant';
declare var $: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  cartSubscription: Subscription;
  users: User[] = [];
  cartProducts: product[] = [];
  totalAmount: number = 0;

  constructor(
    private authenticationService: AuthenticationService,
    private localstorage: LocalStorageService,
    private cartService: CartService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
        this.updateUserDropdown();
      }
    );

    this.cartSubscription = this.cartService.currentCart.subscribe(products => {
      this.cartProducts = products;
      this.totalAmount = this.handleTotalAmount(this.cartProducts);
    });
  }
  ngOnInit() {}

  ngAfterViewInit(): void {
    $("#small-cart-trigger").on("click", function(event) {
      event.stopPropagation();
      $(this).toggleClass("active");
      $(this)
        .siblings()
        .toggleClass("deactive-dropdown-menu active-dropdown-menu");
    });
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/"]);
  }

  updateUserDropdown() {
    setTimeout(() => {
      $("#user-options-02").on("click", function(event) {
        event.stopPropagation();
        $(this)
          .siblings()
          .toggleClass("deactive-dropdown-menu active-dropdown-menu");
      });
    }, 50);

    setTimeout(() => {
      if ($("#user-options").length > 0) {
        $("#user-options").on("click", function(event) {
          event.stopPropagation();
          $(this)
            .siblings()
            .toggleClass("deactive-dropdown-menu active-dropdown-menu");
        });
      }
    }, 50);
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }

  removeItemCart(item) {
    let index = this.cartProducts.findIndex(x => x.id === item.id);
    this.cartProducts.splice(index, 1);
    this.localstorage.set(AppConstant.CART_PRODUCTS, this.cartProducts);
    this.totalAmount = this.handleTotalAmount(this.cartProducts);
  }

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
