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
  p: number = 1;
  Products: product[];
  
  constructor(private productService: ProductSerivce) {
    this.Products = [];
  }
  
  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.Products = products;
    });
  }
}
