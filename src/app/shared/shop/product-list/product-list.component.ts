import { ProductSerivce } from "src/app/core/_services/product.service";
import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/core/_services/cart.service";
import { product, productsCollection } from "src/app/core/_mockup/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductSerivce) {}

  Products: product[];
  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.Products = products;
    });
  }
}
