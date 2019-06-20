import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Subscription } from "rxjs";
import { product } from "src/app/core/_mockup/product";
import { CartService } from "src/app/core/_services/cart.service";
import { LocalStorageService } from "src/app/core/_services/local.storage.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SnackComponent } from "../../component/snack/snack.component";
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition
} from "@angular/material";
import { AppConstant } from 'src/app/core/_const/app.constant';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  cartSubscription: Subscription;
  cartProducts: product[] = [];
  totalAmount: number = 0;
  checkoutForm: FormGroup;
  loading = false;
  submitted = false;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor(
    private cartService: CartService,
    private localstorage: LocalStorageService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.cartSubscription = this.cartService.currentCart.subscribe(products => {

      if(products.length === 0){
        this.openSnackBar("Sorry, Cart's Empty !");
        this.router.navigate(['/shop/cart']);
        return;
      }

      this.cartProducts = products;
      let cartProducts = this.cartProducts;

      if (cartProducts.length > 0) {
        let total = 0;
        for (var i in cartProducts) {
          if (cartProducts.hasOwnProperty(i)) {
            total += cartProducts[i].priceDiscount;
          }
        }
        this.totalAmount = Number(total);
      }
    });
  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.checkoutForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      phonenumber: ["", Validators.required],
      company: [""],
      address01: ["", Validators.required],
      address02: ["", Validators.required],
      country: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      zipcode: ["", Validators.required],
      methodPayment: ["cash", Validators.required],
      agree: ["", Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.submitted = true;

    setTimeout(()=>{
      this.loading = true;
      window.scrollTo(0, 0);

      if (this.checkoutForm.invalid) {
        this.openSnackBar("Please, fill all required fields !");
        this.submitted = false;
        this.loading = false;
        return;
      }
  
      let firstname = this.checkoutForm.controls["firstname"].value;
      let lastname = this.checkoutForm.controls["lastname"].value;
      let email = this.checkoutForm.controls["email"].value;
      let phonenumber = this.checkoutForm.controls["phonenumber"].value;
      let company = this.checkoutForm.controls["company"].value;
      let address01 = this.checkoutForm.controls["address01"].value;
      let address02 = this.checkoutForm.controls["address02"].value;
      let country = this.checkoutForm.controls["country"].value;
      let city = this.checkoutForm.controls["city"].value;
      let state = this.checkoutForm.controls["state"].value;
      let zipcode = this.checkoutForm.controls["zipcode"].value;
      let methodPayment = this.checkoutForm.controls["methodPayment"].value;
  
      let objBill = {
        id: this.generateUUID(),
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        company: company,
        address01: address01,
        address02: address02,
        country: country,
        city: city,
        state: state,
        zipcode: zipcode,
        methodPayment: methodPayment,
        product: this.cartProducts,
        totalAmount: this.totalAmount
      };
      let datalocal = this.localstorage.get(AppConstant.BILL_ORDER);
      datalocal.push(objBill);
      this.localstorage.set(AppConstant.BILL_ORDER, datalocal);
  
      setTimeout(()=>{
        this.loading = false;
        this.submitted = false;
        this.cartService.clearCartProducts();
        this.localstorage.set(AppConstant.CART_PRODUCTS, []);
        this.router.navigate(['/shop/checkout-result', objBill["id"]]);
      },3000)

    } ,2000)
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 5000,
      data: message,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition
    });
  }

  ngAfterViewInit(): void {
    $(".payment-method").on("click", function() {
      let $value = $(this).attr("value");
      $(".single-method p").slideUp();
      $('[data-method="' + $value + '"]').slideDown();
    });
    // default payment method
    $('[data-method="' + "cash" + '"]').slideDown();
    //   $('[data-shipping]').on('click', function () {
    //     if ($('[data-shipping]:checked').length > 0) {
    //       $('#shipping-form').slideDown();
    //     } else {
    //       $('#shipping-form').slideUp();
    //     }
    // });
  }
  generateUUID() {
    var d = new Date().getTime();
    if(Date.now){
        d = Date.now();
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};
}
