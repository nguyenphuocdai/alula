import { Component, OnInit, Input } from "@angular/core";
import { product } from "src/app/core/_mockup/product";
import { CartService } from "src/app/core/_services/cart.service";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  @Input() item: product;
  constructor(private _cartService: CartService) {}

  ngOnInit() {}

  AddProduct(_product: product) {
    _product.added = true;
    _product.quatity = 1;
    this._cartService.addProduct(_product);
  }
  RemoveProduct(_product: product) {
    _product.added = false;
    this._cartService.removeProduct(_product.id);
  }
}
