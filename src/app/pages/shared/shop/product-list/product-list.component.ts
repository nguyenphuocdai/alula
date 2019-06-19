import { Component, OnInit } from "@angular/core";
import { product, productsCollection } from "../../../../core/_mockup/product";
import { CartService } from "../../../../core/_services/cart.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  constructor(private cartService: CartService) {}

  Products: product[];
  ngOnInit() {
    this.Products = productsCollection;
  }
}
