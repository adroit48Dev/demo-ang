import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from "../../../../helpers/alert.service";
import { HelpersComponent } from "../../../../helpers/helpers.component";
import { LoansService } from "../../loans.service";

@Component({
  selector: "ngx-loan-view",
  templateUrl: "./loan-view.component.html",
  styleUrls: ["./loan-view.component.scss"],
})
export class LoanViewComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute,
    private _loanservice: LoansService
  ) {}
  LoanData: any = [];
  ngOnInit(): void {
    this._loanservice
      .getAllLoanMethod()
      .subscribe(
        (res) => {
          // Form data
          this.LoanData = res;
          console.log(this.LoanData);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    // res =>{ // Form data

    //   this.LoanData = res
    //   console.log(this.LoanData)
    // },
    // err  =>
    // console.log(err)
    // );
  }

  rowSelected(userid) {
    this.router.navigate(["pages/loans/loan/loan-veiw/" + userid]);
  }
}
