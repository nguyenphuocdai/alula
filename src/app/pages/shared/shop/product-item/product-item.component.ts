import { Component, OnInit, Input } from "@angular/core";
import { product } from "src/app/core/_mockup/product";
import { CartService } from "src/app/core/_services/cart.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from "@angular/material/snack-bar";
import { SnackComponent } from "../../component/snack/snack.component";
import { MatDialog } from "@angular/material";
import { ConfirmComponent } from "../confirm/confirm.component";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  @Input() item: product;
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  constructor(
    private _cartService: CartService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

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
      data: "Add item to cart successfully !",
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition
    });
  }
  openDialog(_product: product) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: { name: "name" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.AddProduct(_product);
      }
    });
  }
}
