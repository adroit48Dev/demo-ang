import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { AccoundetailsService } from "../accountdetails/accoundetails.service";
import { ProductService } from "../product.service";

@Component({
  selector: "ngx-account-detailsview",
  templateUrl: "./account-detailsview.component.html",
  styleUrls: ["./account-detailsview.component.scss"],
})
export class AccountDetailsviewComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute,
    private _accountservice: AccoundetailsService,
    private _productervice: ProductService
  ) {}

  AccountData: any = [];

  ngOnInit(): void {
    this._productervice
      .allAccountDetailsGet()
      .subscribe(
        (res) => {
          // Form data
          this.AccountData = res;
          console.log(this.AccountData);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     // Form data
    //     this.AccountData = res;
    //     console.log(this.AccountData);
    //     // Object.entries(res).forEach(([key, values]) => {

    //     //       this.AccountData.push(values)

    //     // })
    //   },

    // );
  }

  CreateAccount() {
    this.router.navigate(["pages/product/accountdetails"]);
  }

  accountdetailsid(id) {
    this.router.navigate(["pages/product/accountdetailsedit", id]);
    console.log(id);
  }
}
