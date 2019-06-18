import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-product-deals',
  templateUrl: './product-deals.component.html',
  styleUrls: ['./product-deals.component.scss']
})
export class ProductDealsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }
  handleDialog(){
    this.dialog.open(ProductModalComponent, {
      width: 'auto',
      data: {name: "test"}
    });
  }
}
