import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { LoansService } from "../loans.service";

export interface LoanRepayment {
  AccountNumber: String;
  LoanAmount: number;
  PaidAmount: number;
  RepaymentAmount: number;
  tenure: number;
}

@Component({
  selector: "ngx-loan-repayment",
  templateUrl: "./loan-repayment.component.html",
  styleUrls: ["./loan-repayment.component.scss"],
})
export class LoanRepaymentComponent implements OnInit {
  displayedColumns: string[] = [
    "AccountNumber",
    "LoanAmount",
    "PaidAmount",
    "RepaymentAmount",
    "tenure",
    "Action",
  ];
  dataSource: MatTableDataSource<LoanRepayment> = null;

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
        (res: LoanRepayment[]) => {
          console.log(res);
          this.dataSource = new MatTableDataSource(res);
        },
        (err) => {
          alert(err);
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res:LoanRepayment[])=>{
    //     console.log(res)
    //     this.dataSource = new MatTableDataSource(res);
    //   },
    //   err=>{
    //     alert(err);
    //   }
    // )
  }

  // material table filter method
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  details() {
    this.router.navigate(["repayment-detail"], { relativeTo: this.route });
  }
}
