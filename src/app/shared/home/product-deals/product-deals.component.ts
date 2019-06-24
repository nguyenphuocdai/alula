import { PNotifyService } from "./../../../core/_services/pnotify.service";
import { PNotify } from "pnotify/dist/es/PNotify";
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
import { ProductSerivce } from "src/app/core/_services/product.service";

@Component({
  selector: "app-product-deals",
  templateUrl: "./product-deals.component.html",
  styleUrls: ["./product-deals.component.scss"]
})
export class ProductDealsComponent implements OnInit {
  Products: product[];

  constructor(
    private _cartService: CartService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private PNotify: PNotifyService,
    private productService: ProductSerivce
  ) {}

  ngOnInit() {
    this.Products = productsCollection;
  }

  handleDialog(item) {
    this.dialog.open(ProductModalComponent, {
      width: "auto",
      height: "70vh",
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
    this.PNotify.getNotify(
      "success",
      "Thông báo",
      "Thêm sản phẩm vào giỏ hàng thành công !",
      "fa fa-shopping-cart"
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
  addCompareItem(product: product) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: { name: "name" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        let resultAddCompare = this.productService.addCompareProduct(product);

        switch (resultAddCompare) {
          case 200:
            this.PNotify.getNotify(
              "success",
              "Thông báo",
              "Thêm sản phẩm vào danh sách so sánh thành công!",
              "icon-sliders"
            );
            break;
          case 409:
            this.PNotify.getNotify(
              "error",
              "Thông báo",
              "Sản phẩm đã có trong danh sách so sánh!",
              "icon-sliders"
            );
            break;
          case 303:
            this.PNotify.getNotify(
              "error",
              "Thông báo",
              "Danh sách sản phẩm so sánh hiện tại đã đầy!",
              "icon-sliders"
            );
            break;
          default:
            this.PNotify.getNotify("success", "Thông báo", "Có lỗi xảy ra !");
            break;
        }
      }
    });
  }
}
