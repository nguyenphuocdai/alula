import { Component, OnInit } from "@angular/core";
import { CartService } from 'src/app/core/_services/cart.service';
import { product, productsCollection } from 'src/app/core/_mockup/product';

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
