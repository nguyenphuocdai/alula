import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { AuthenticationService } from "../../../../core/_services";
import { User } from "../../../../core/_models";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { CartService } from "src/app/core/_services/cart.service";
import { product } from "src/app/core/_mockup/product";
import { CartState } from "src/app/core/_services/cart-state";
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
  subscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    private router: Router
  ) {
    // user
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
        this.updateUserDropdown();
      }
    );

    // cart
    // this.cartSubscription = this.cartService
    //   .currentCartProducts()
    //   .subscribe(cartProducts => {
    //     this.cartProducts = cartProducts;
    //     console.log(this.cartProducts);
    //   });
    // this.cartSubscription = this.cartService.currentCart.subscribe(
    //   cartProducts => {
    //     this.cartProducts = cartProducts;
    //     console.log(this.cartProducts);
    //   }
    // );
    this.subscription = this.cartService.cartProducts.subscribe(
      x => {
        // this.products = state.products;
        // this.cartProducts = state.products;
        console.log(x);
      }
    );
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
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
    this.cartSubscription.unsubscribe();
  }
}
