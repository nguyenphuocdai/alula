import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy
} from "@angular/core";
import { ProductSerivce } from "src/app/core/_services/product.service";
import { ConfirmComponent } from "../confirm/confirm.component";
import { MatDialog } from "@angular/material";
import { PNotifyService } from "src/app/core/_services/pnotify.service";
import { Subscription } from "rxjs";
import { CartService } from "src/app/core/_services/cart.service";

@Component({
  selector: "app-product-compare",
  templateUrl: "./product-compare.component.html",
  styleUrls: ["./product-compare.component.scss"]
})
export class ProductCompareComponent
  implements OnInit, AfterViewInit, OnDestroy {
  arrItems = [];
  arrCompare = [];
  isShowTableCompare: boolean = false;
  compareProductSubscription: Subscription;
  constructor(
    private productService: ProductSerivce,
    private ref: ChangeDetectorRef,
    private dialog: MatDialog,
    private PNotify: PNotifyService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.compareProductSubscription = this.productService.currentCompareProducts.subscribe(
      arrCompare => {
        this.arrItems = arrCompare;
        if (arrCompare.length === 0) {
          this.arrCompare = [];
          this.isShowTableCompare = false;
        }
        this.ngAfterViewInit();
      }
    );
  }

  ngAfterViewInit(): void {
    if (this.arrItems.length > 0) {
      let displayCoulumnCompare = this.bindingColumnCompare(this.arrItems[0]);
      let arrTemp = this.bindingArrayTemporary(displayCoulumnCompare);

      let itemDefaults = [];
      for (let i = 0; i < this.arrItems.length; i++) {
        itemDefaults.push(i);
      }

      let defaultColumn = [
        {
          columnCompare: "Delete",
          value: itemDefaults
        },
        {
          columnCompare: "Add to cart",
          value: itemDefaults
        }
      ];
      this.arrCompare = this.mergeArrayBinding(arrTemp).concat(defaultColumn);
      this.isShowTableCompare = true;
    }
  }

  bindingArrayTemporary(displayCoulumnCompare) {
    let arrTemp = [];
    displayCoulumnCompare.forEach(element => {
      this.arrItems.forEach(item => {
        Object.keys(item).forEach(keyItems => {
          if (keyItems === element.key) {
            let obj = {
              columnCompare: element.key,
              item: item[keyItems]
            };
            arrTemp.push(obj);
          }
        });
      });
    });
    return arrTemp;
  }

  bindingColumnCompare(item) {
    let arrCompare = [];
    Object.keys(item).forEach(function(key, index) {
      let obj = {
        index: index,
        key: key
      };
      arrCompare.push(obj);
    });
    return arrCompare;
  }

  mergeArrayBinding(arrTemp) {
    let output = [];
    arrTemp.forEach(function(item, index) {
      var existing = output.filter(function(v, i) {
        return v.columnCompare == item.columnCompare;
      });
      if (existing.length) {
        var existingIndex = output.indexOf(existing[0]);
        output[existingIndex].value = output[existingIndex].value.concat(
          item.item
        );
      } else {
        if (typeof item.value == "string") console.log(item.value);
        item.id = index;
        item.value = [item.item];
        output.push(item);
      }
    });
    return output;
  }

  notBinding(str: string) {
    let arrNotBinding = ["image", "url", "Delete", "Add to cart"];
    if (arrNotBinding.includes(str)) {
      return false;
    }
    return true;
  }

  onDeleteItem(index: number) {
    console.log(index);
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: { name: "name" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        let resultRemove = this.productService.removeCompareProduct(index);
        if (resultRemove) {
          this.PNotify.getNotify(
            "success",
            "Thông báo",
            "Xóa sản phẩm thành công !",
            "fa fa-trash-o"
          );
        }
      }
    });
  }
  onAddCart(index: number) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: { name: "name" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        let product = this.arrItems[index];
        product.added = true;
        product.quatity = 1;
        this.cartService.addProduct(product);
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this.PNotify.getNotify(
      "success",
      "Thông báo",
      "Thêm sản phẩm vào giỏ hàng thành công !"
    );
  }

  ngOnDestroy() {
    this.compareProductSubscription.unsubscribe();
  }
}
