import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";
import { LoansService } from "../../loans.service";

@Component({
  selector: "ngx-prepay",
  templateUrl: "./prepay.component.html",
  styleUrls: ["./prepay.component.scss"],
})
export class PrepayComponent implements OnInit {
  prePayData: any = [];

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private route: ActivatedRoute,
    private _loanService: LoansService
  ) {}

  ngOnInit(): void {
    this._loanService
      .getLoanPrepaymentMethod()
      .subscribe(
        (res: any[]) => {
          console.log("prePayment", res);
          this.prePayData = res;
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res: any[]) => {
    //     console.log("prePayment", res);
    //     this.prePayData = res;
    //   }
    // );
  }
  onProceed() {
    if (confirm("Prepayment Amount has collected")) {
      this.router.navigate(["pages/loans/loan-acc-overview"]);
    } else {
      console.log("cancelled");
    }
  }
}
