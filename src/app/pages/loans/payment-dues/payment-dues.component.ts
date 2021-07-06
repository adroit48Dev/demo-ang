import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { LoansService } from "../loans.service";

export interface LoanPaymentDues {
  AccountNumber: String;
  UserName: string;
  DaysInArrear: string;
  DaysLate: String;
}

@Component({
  selector: "ngx-payment-dues",
  templateUrl: "./payment-dues.component.html",
  styleUrls: ["./payment-dues.component.scss"],
})
export class PaymentDuesComponent implements OnInit {
  displayedColumns: string[] = [
    "AccountNumber",
    "UserName",
    "DaysInArrear",
    "DaysLate",
    "Action",
  ];

  dataSource: MatTableDataSource<LoanPaymentDues> = null;
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private route: ActivatedRoute,
    private _loanService: LoansService
  ) {}

  ngOnInit(): void {
    this._loanService
      .dualPaymentListMethod()
      .subscribe(
        (res: LoanPaymentDues[]) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res: LoanPaymentDues[]) => {
    //     console.log(res);
    //     this.dataSource = new MatTableDataSource(res);
    //   },
    //   err => {
    //     alert(err);
    //   }
    // );
  }

  // material table filter method
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  details() {
    this.router.navigate(["due-details"], { relativeTo: this.route });
  }
}
