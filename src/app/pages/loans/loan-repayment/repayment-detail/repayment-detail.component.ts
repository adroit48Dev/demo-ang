import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";
import { LoansService } from "../../loans.service";

@Component({
  selector: "ngx-repayment-detail",
  templateUrl: "./repayment-detail.component.html",
  styleUrls: ["./repayment-detail.component.scss"],
})
export class RepaymentDetailComponent implements OnInit {
  elements: any = [];

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private route: ActivatedRoute,
    private _loanService: LoansService
  ) {}

  ngOnInit(): void {
    this._loanService
      .getLoanRepayListMethod()
      .subscribe(
        (res) => {
          this.elements = res;
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
    //     this.elements = res;
    //   }
    // );
  }

  onProceed() {
    if (confirm("Repayment Amount has collected")) {
      this.router.navigate(["pages/loans/loan-acc-overview"]);
    } else {
      console.log("cancelled");
    }
  }

  // elements: any = [
  //   {
  //     Due: '01-01-2021',
  //     PrincipalExpected: 10000,
  //     InterestExpected: 10000,
  //     FeesExpected: 0,
  //     TotalExpected: 10000,
  //     PrincipalPaid: 10000,
  //     InterestPaid: 10000,
  //     FeesPaid: 0,
  //     TotalPaid: 10000,
  //     PaidDate: '01-02-2021',
  //     PrincipalDue: 10000,
  //     InterestDue: 0,
  //     FeeDue: 10000,
  //     TotalDue: 10000,
  //     State: 'Late',
  //   },
  //   {
  //     Due: '01-02-2021',
  //     PrincipalExpected: 10000,
  //     InterestExpected: 10000,
  //     FeesExpected: 0,
  //     TotalExpected: 10000,
  //     PrincipalPaid: 10000,
  //     InterestPaid: 10000,
  //     FeesPaid: 0,
  //     TotalPaid: 10000,
  //     PaidDate: '01-02-2021',
  //     PrincipalDue: 10000,
  //     InterestDue: 0,
  //     FeeDue: 10000,
  //     TotalDue: 10000,
  //     State: 'Pending',
  //   },
  //   {
  //     Due: '01-03-2021',
  //     PrincipalExpected: 10000,
  //     InterestExpected: 10000,
  //     FeesExpected: 0,
  //     TotalExpected: 10000,
  //     PrincipalPaid: 10000,
  //     InterestPaid: 10000,
  //     FeesPaid: 0,
  //     TotalPaid: 10000,
  //     PaidDate: '01-02-2021',
  //     PrincipalDue: 10000,
  //     InterestDue: 0,
  //     FeeDue: 10000,
  //     TotalDue: 10000,
  //     State: 'Partially Paid',
  //   },
  // ];
  // headElements = ['Due', 'Principal Expected', 'Interest Expected', 'Fees Expected', 'Total Expected', 'Principal Paid', 'Interest Paid', 'Fees Paid', 'Total Paid', 'Paid Date', 'Principal Due', 'Interest Due', 'Fee Due', 'Total Due', 'State'];
}
