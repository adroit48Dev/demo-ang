import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { LoansService } from "../../loans.service";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";

export interface loanApplicationDetails {
  ConditionName: String;
  ConditionDetails: string;
  ConditionAmount: String;
}

@Component({
  selector: "ngx-loan-application-details",
  templateUrl: "./loan-application-details.component.html",
  styleUrls: ["./loan-application-details.component.scss"],
})
export class LoanApplicationDetailsComponent implements OnInit {
  // to view document
  document: boolean = false;
  incomplete: boolean = false;
  reject: boolean = false;

  displayedColumns: string[] = [
    "ConditionName",
    "ConditionDetails",
    "ConditionAmount",
    "Document",
  ];
  dataSource: MatTableDataSource<loanApplicationDetails> = null;
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private route: ActivatedRoute,
    private _loanService: LoansService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this._loanService
      .loanApprovalListMethod()
      .subscribe(
        (res: loanApplicationDetails[]) => {
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
    //   (res: loanApplicationDetails[]) => {
    //     console.log(res);
    //     this.dataSource = new MatTableDataSource(res);
    //   },
    //   err => {
    //     alert(err);
    //   }
    // );
  }

  toBack() {
    this._location.back();
  }
  toIncomplete() {
    this.incomplete = true;
    this.reject = false;
  }
  toReject() {
    this.reject = true;
    this.incomplete = false;
  }
  toApprove() {
    this.reject = false;
    this.incomplete = false;
    if (window.confirm("Are you sure to approve the loan application")) {
      this._location.back();
    }
  }
  submitOnIncomplete() {
    if (window.confirm("Loan Application form is incomplete")) {
      this._location.back();
    }
  }

  submitOnReject() {
    if (window.confirm("Loan Application form rejected")) {
      this._location.back();
    }
  }
}
