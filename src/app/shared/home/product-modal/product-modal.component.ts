import { PNotifyService } from './../../../core/_services/pnotify.service';
import { Component, OnInit, AfterViewInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
  MatDialog
} from "@angular/material";
import { product } from "src/app/core/_mockup/product";
import { SnackComponent } from "../../component/snack/snack.component";
import { CartService } from "src/app/core/_services/cart.service";
import { ConfirmComponent } from "../../shop/confirm/confirm.component";
import * as $ from "jquery";
import 'slick-carousel';
import { ProductSerivce } from 'src/app/core/_services/product.service';
@Component({
  selector: "app-product-modal",
  templateUrl: "./product-modal.component.html",
  styleUrls: ["./product-modal.component.scss"]
})
export class ProductModalComponent implements OnInit, AfterViewInit {
  item: product;
  constructor(
    public dialogProductModalRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _cartService: CartService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private productService: ProductSerivce,
    private PNotify: PNotifyService
  ) {}

  ngOnInit() {
    this.item = this.data.item;
    console.log(this.item);
  }

  AddProduct(_product: product) {
    _product.added = true;
    _product.quatity = 1;
    this._cartService.addProduct(_product);
    this.openSnackBar();
  }

  openSnackBar() {
    this.PNotify.getNotify("success", "Thông báo", "Thêm sản phẩm vào giỏ hàng thành công !")
  }
  openDialog(_product: product) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: "400px",
      data: { name: "name" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.AddProduct(_product);
        this.dialogProductModalRef.close();
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

  ngAfterViewInit(): void {
    /*=============================================
    =            slick slider active            =
    =============================================*/
    var $htSlickSlider = $(".container-slick .ht-slick-slider");

    /*For RTL*/
    if ($("html").attr("dir") == "rtl" || $("body").attr("dir") == "rtl") {
      $htSlickSlider.attr("dir", "rtl");
    }

    $htSlickSlider.each(function() {
      /*Setting Variables*/
      var $this = $(this),
        $setting = $this.data("slick-setting"),
        $autoPlay = $setting.autoplay ? $setting.autoplay : false,
        $autoPlaySpeed = parseInt($setting.autoplaySpeed, 10) || 2000,
        $speed = parseInt($setting.speed, 10) || 2000,
        $asNavFor = $setting.asNavFor ? $setting.asNavFor : null,
        $appendArrows = $setting.appendArrows ? $setting.appendArrows : $this,
        $appendDots = $setting.appendDots ? $setting.appendDots : $this,
        $arrows = $setting.arrows ? $setting.arrows : false,
        $prevArrow = $setting.prevArrow
          ? '<button class="' +
            $setting.prevArrow.buttonClass +
            '"><i class="' +
            $setting.prevArrow.iconClass +
            '"></i></button>'
          : '<button class="slick-prev">previous</button>',
        $nextArrow = $setting.nextArrow
          ? '<button class="' +
            $setting.nextArrow.buttonClass +
            '"><i class="' +
            $setting.nextArrow.iconClass +
            '"></i></button>'
          : '<button class="slick-next">next</button>',
        $centerMode = $setting.centerMode ? $setting.centerMode : false,
        $centerPadding = $setting.centerPadding
          ? $setting.centerPadding
          : "50px",
        $dots = $setting.dots ? $setting.dots : false,
        $fade = $setting.fade ? $setting.fade : false,
        $focusOnSelect = $setting.focusOnSelect
          ? $setting.focusOnSelect
          : false,
        $infinite = $setting.infinite ? $setting.infinite : false,
        $pauseOnHover = $setting.pauseOnHover ? $setting.pauseOnHover : true,
        $rows = parseInt($setting.rows, 10) || 1,
        $slidesToShow = parseInt($setting.slidesToShow, 10) || 1,
        $slidesToScroll = parseInt($setting.slidesToScroll, 10) || 1,
        $swipe = $setting.swipe ? $setting.swipe : true,
        $swipeToSlide = $setting.swipeToSlide ? $setting.swipeToSlide : false,
        $variableWidth = $setting.variableWidth
          ? $setting.variableWidth
          : false,
        $vertical = $setting.vertical ? $setting.vertical : false,
        $verticalSwiping = $setting.verticalSwiping
          ? $setting.verticalSwiping
          : false,
        $rtl =
          $setting.rtl ||
          $("html").attr('dir="rtl"') ||
          $("body").attr('dir="rtl"')
            ? true
            : false;

      /*Responsive Variable, Array & Loops*/
      var $responsiveSetting =
          typeof $this.data("slick-responsive") !== "undefined"
            ? $this.data("slick-responsive")
            : "",
        $responsiveSettingLength = $responsiveSetting.length,
        $responsiveArray = [];
      for (var i = 0; i < $responsiveSettingLength; i++) {
        $responsiveArray[i] = $responsiveSetting[i];
      }
      var initialized: any = $this;
      /*Slider Start*/
      initialized.slick({
        autoplay: $autoPlay,
        autoplaySpeed: $autoPlaySpeed,
        speed: $speed,
        asNavFor: $asNavFor,
        appendArrows: $appendArrows,
        appendDots: $appendDots,
        arrows: $arrows,
        dots: $dots,
        centerMode: $centerMode,
        centerPadding: $centerPadding,
        fade: $fade,
        focusOnSelect: $focusOnSelect,
        infinite: $infinite,
        pauseOnHover: $pauseOnHover,
        rows: $rows,
        slidesToShow: $slidesToShow,
        slidesToScroll: $slidesToScroll,
        swipe: $swipe,
        swipeToSlide: $swipeToSlide,
        variableWidth: $variableWidth,
        vertical: $vertical,
        verticalSwiping: $verticalSwiping,
        rtl: $rtl,
        prevArrow: $prevArrow,
        nextArrow: $nextArrow,
        responsive: $responsiveArray
      });
    });
  }
}
