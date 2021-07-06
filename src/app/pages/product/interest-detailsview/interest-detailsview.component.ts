import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { InterestDetailsService } from "../interest-details/interest-details.service";
import { ProductService } from "../product.service";

@Component({
  selector: "ngx-interest-detailsview",
  templateUrl: "./interest-detailsview.component.html",
  styleUrls: ["./interest-detailsview.component.scss"],
})
export class InterestDetailsviewComponent implements OnInit {
  InterestDetailsData: any = [];

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute,
    private _interestDetailsservice: InterestDetailsService,
    private _productervice: ProductService
  ) {}

  ngOnInit(): void {
    this._productervice
      .allinterestDetailsGet()
      .subscribe(
        (res) => {
          console.log(res);
          this.InterestDetailsData = res;
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
    //     this.InterestDetailsData = res;
    //   },
    //   err  => alert(err)
    // );
  }

  Createinterest() {
    this.router.navigate(["/pages/product/interestdetails"]);
  }

  interestdetailsid(id) {
    this.router.navigate(["pages/product/interestdetailsupdate", id]);
    console.log(id);
  }
}
