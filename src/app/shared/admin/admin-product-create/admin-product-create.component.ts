import { Component, OnInit, AfterViewInit, Inject } from "@angular/core";
import * as $ from "jquery";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-admin-product-create",
  templateUrl: "./admin-product-create.component.html",
  styleUrls: ["./admin-product-create.component.scss"]
})
export class AdminProductCreateComponent implements OnInit, AfterViewInit {
  productForm: FormGroup;
  isSubmitted: boolean = false;
  loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminProductCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      currency: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  ngAfterViewInit(): void {}

  onSubmit() {
    this.loading = true;
    this.isSubmitted = true;
    console.log(this.productForm.value);
  }

  dzImages() {
    let collection = $(".dz-image > img");
    if (collection.length === 0) {
      return;
    }
    let arrImageBase64 = [];

    for (let i = 0; i < collection.length; i++) {
      const element: any = collection[i];
      let obj = {
        base64: "",
        name: ""
      };
      obj.base64 = element.src;
      obj.name = element.alt;

      arrImageBase64.push(obj);
    }
    return arrImageBase64;
  }
}
