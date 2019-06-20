import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LocalStorageService } from "src/app/core/_services/local.storage.service";
import { AppConstant } from "src/app/core/_const/app.constant";

@Component({
  selector: "app-checkout-result",
  templateUrl: "./checkout-result.component.html",
  styleUrls: ["./checkout-result.component.scss"]
})
export class CheckoutResultComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  billData: any;

  constructor(
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      let localData = this.localStorageService.get(AppConstant.BILL_ORDER);
      for (let i = 0; i < localData.length; i++) {
        const element = localData[i];
        if (element.id === this.id) {
          this.billData = element;
        }
      }
      console.log(this.billData);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
