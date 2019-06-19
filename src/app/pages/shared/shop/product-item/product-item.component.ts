import { Component, OnInit, Input } from "@angular/core";
import { product } from "src/app/core/_mockup/product";
import { CartService } from "src/app/core/_services/cart.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackComponent } from "../../component/snack/snack.component";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  @Input() item: product;
  durationInSeconds = 5;
  constructor(private _cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit() { }

  AddProduct(_product: product) {
    _product.added = true;
    _product.quatity = 1;
    this._cartService.addProduct(_product);
    this.openSnackBar();
  }
  RemoveProduct(_product: product) {
    _product.added = false;
    this._cartService.removeProduct(_product.id);
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackComponent, {
      duration: 5000,
      data: "Add item to cart successfully !"
    });
  }
}

