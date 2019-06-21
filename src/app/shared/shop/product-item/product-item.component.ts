import { PNotifyService } from "./../../../core/_services/pnotify.service";
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
  constructor(
    private _cartService: CartService,
    public dialog: MatDialog,
    private PNotify: PNotifyService
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
    this.PNotify.getNotify(
      "success",
      "Thông báo",
      "Thêm sản phẩm vào giỏ hàng thành công !"
    );
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
