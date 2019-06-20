import { Component, OnInit } from "@angular/core";
import {
  MatDialog,
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition
} from "@angular/material";
import { ProductModalComponent } from "../product-modal/product-modal.component";
import { product, productsCollection } from "src/app/core/_mockup/product";
import { CartService } from "src/app/core/_services/cart.service";
import { SnackComponent } from "../../component/snack/snack.component";
import { ConfirmComponent } from "../../shop/confirm/confirm.component";

@Component({
  selector: "app-product-deals",
  templateUrl: "./product-deals.component.html",
  styleUrls: ["./product-deals.component.scss"]
})
export class ProductDealsComponent implements OnInit {
  Products: product[];
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = "right";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor(
    private _cartService: CartService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.Products = productsCollection;
  }

  handleDialog(item) {
    this.dialog.open(ProductModalComponent, {
      width: "auto",
      data: { item: item }
    });
  }

  AddProduct(_product: product) {
    _product.added = true;
    _product.quatity = 1;
    this._cartService.addProduct(_product);
    this.openSnackBar();
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
