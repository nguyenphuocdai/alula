import { PNotifyService } from "./../../../core/_services/pnotify.service";
import { ProductSerivce } from "./../../../core/_services/product.service";
import { Component, OnInit, AfterViewInit, Inject } from "@angular/core";
import * as $ from "jquery";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { product } from "src/app/core/_mockup/product";
declare var PNotify: any;
@Component({
  selector: "app-admin-product-create",
  templateUrl: "./admin-product-create.component.html",
  styleUrls: ["./admin-product-create.component.scss"]
})
export class AdminProductCreateComponent implements OnInit, AfterViewInit {
  productForm: FormGroup;
  isSubmitted: boolean = false;
  loading: boolean = false;
  pnotify = undefined;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminProductCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductSerivce,
    private pnotifyService: PNotifyService
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

  ngAfterViewInit(): void {
    (function($) {
      ($("#dropzone-example") as any).dropzone({
        url: "http://file.io"
      });
    })(jQuery);
  }

  onSubmit() {
    this.loading = true;
    this.isSubmitted = true;
    console.log(this.productForm.value);

    let images = this.dzImages();
    if (this.productForm.valid === false || images.length === 0) {
      this.loading = false;
      this.isSubmitted = false;

      this.pnotifyService.getNotify(
        "error",
        "Alert",
        "Please, Fill all field on Forms !"
      );

      return;
    }

    let id = this.productService.generateUniqueID();
    let name = this.productForm.controls["name"].value;
    let price = this.productForm.controls["price"].value;
    let currency = this.productForm.controls["currency"].value;
    let description = this.productForm.controls["description"].value;

    let obj: product = {
      id: id,
      name: name,
      price: price,
      priceDiscount: price * 0.9,
      currency: currency,
      shortDesc: description,
      imageThumnail: images,
      image: images[0],
      url:
        "https://static2.jassets.com/p/Puma-917-Mid-2.0-Ind.-Blue-Sneakers-4118-935263-1-product2.jpg"
    };
    console.log(obj);
    let result = this.productService.addProduct(obj);
    if (result === false) {
      this.pnotifyService.getNotify("error", "Alert", "Add product's failed !");
    }
    setTimeout(() => {
      this.dialogRef.close();
      this.pnotifyService.getNotify(
        "success",
        "Alert",
        "Add product's successfully !"
      );
    }, 3000);
  }

  dzImages() {
    let collection = $(".dz-image > img");
    if (collection.length === 0) {
      return [];
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
