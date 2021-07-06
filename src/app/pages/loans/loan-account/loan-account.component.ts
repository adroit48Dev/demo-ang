import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { LoansService } from "../loans.service";

export interface LoanAccount {
  loanName: String;
  userName: string;
  loanAmount: number;
  tenure: number;
  status: string;
}
const ELEMENT_DATA: LoanAccount[] = [
  {
    loanName: "home loan",
    userName: "Vignesh",
    loanAmount: 20000,
    tenure: 20,
    status: "Pending",
  },
  {
    loanName: "home loan",
    userName: "Vignesh",
    loanAmount: 20000,
    tenure: 20,
    status: "Rejected",
  },
  {
    loanName: "home loan",
    userName: "Vignesh",
    loanAmount: 20000,
    tenure: 20,
    status: "Pending",
  },
  {
    loanName: "home loan",
    userName: "Vignesh",
    loanAmount: 20000,
    tenure: 20,
    status: "Approved",
  },
];

@Component({
  selector: "ngx-loan-account",
  templateUrl: "./loan-account.component.html",
  styleUrls: ["./loan-account.component.scss"],
})
export class LoanAccountComponent implements OnInit {
  displayedColumns: string[] = [
    "loanName",
    "userName",
    "loanAmount",
    "tenure",
    "status",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private _loanservice: LoansService
  ) {}
  loanAccountData: any = [];

  ngOnInit(): void {
    this._loanservice
      .getAllLoanAccountListMethod()
      .subscribe(
        (res) => {
          // Form data
          this.loanAccountData = res;
          console.log(this.loanAccountData);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => { // Form data

    //     this.loanAccountData = res;
    //     console.log(this.loanAccountData);
    //   },
    //   err =>
    //     console.log(err)
    // );
  }
}
