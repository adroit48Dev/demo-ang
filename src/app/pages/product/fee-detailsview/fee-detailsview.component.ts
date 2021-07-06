import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { FeeDetailsService } from "../fee-details/fee-details.service";
import { ProductService } from "../product.service";

@Component({
  selector: "ngx-fee-detailsview",
  templateUrl: "./fee-detailsview.component.html",
  styleUrls: ["./fee-detailsview.component.scss"],
})
export class FeeDetailsviewComponent implements OnInit {
  FeeDetailsData: any = [];

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute,
    private _feeDetailsservice: FeeDetailsService,
    private _productervice: ProductService
  ) {}

  ngOnInit(): void {
    this._productervice
      .allfeeDetailsGet()
      .subscribe(
        (res) => {
          console.log(res);
          this.FeeDetailsData = res;
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res =>{
    //     console.log(res);
    //     this.FeeDetailsData = res;
    //   },
    //   err  => alert(err)
    // );
  }

  Createfee() {
    this.router.navigate(["/pages/product/feedetails"]);
  }

  feedetailsid(id) {
    this.router.navigate(["pages/product/feedetailsupdate", id]);
    console.log(id);
  }
}
