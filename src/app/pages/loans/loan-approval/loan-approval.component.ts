import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { LoansService } from "../loans.service";

export interface LoanApproval {
  loanName: String;
  userName: string;
  loanAmount: number;
  tenure: number;
}
const ELEMENT_DATA: LoanApproval[] = [
  { loanName: "home loan", userName: "Vignesh", loanAmount: 20000, tenure: 20 },
  { loanName: "home loan", userName: "Vignesh", loanAmount: 20000, tenure: 20 },
  { loanName: "home loan", userName: "Vignesh", loanAmount: 20000, tenure: 20 },
  { loanName: "home loan", userName: "Vignesh", loanAmount: 20000, tenure: 20 },
];
@Component({
  selector: "ngx-loan-approval",
  templateUrl: "./loan-approval.component.html",
  styleUrls: ["./loan-approval.component.scss"],
})
export class LoanApprovalComponent implements OnInit {
  displayedColumns: string[] = [
    "loanName",
    "userName",
    "loanAmount",
    "tenure",
    "Action",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private route: ActivatedRoute,
    private router: Router,
    private _loanService: LoansService
  ) {}
  loanApprovalData: any = [];

  ngOnInit(): void {
    this._loanService
      .loanApprovalListMethod()
      .subscribe(
        (res) => {
          console.log(res);
          this.loanApprovalData = res;
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
          alert(err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res);
    //     this.loanApprovalData = res;
    //   },
    //   err => {
    //     alert(err);
    //   }
    // );
  }

  loanDetails() {
    this.router.navigate(["loan-application-details"], {
      relativeTo: this.route,
    });
  }
}
