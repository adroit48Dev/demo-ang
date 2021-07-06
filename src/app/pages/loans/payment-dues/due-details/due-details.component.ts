import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";
import { LoansService } from "../../loans.service";

@Component({
  selector: "ngx-due-details",
  templateUrl: "./due-details.component.html",
  styleUrls: ["./due-details.component.scss"],
})
export class DueDetailsComponent implements OnInit {
  dueDetailsData: any = [];

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
        (res) => {
          console.log(res[0]);
          this.dueDetailsData = res[0];
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res)=>{
    //     console.log(res[0])
    //     this.dueDetailsData = res[0];
    //   },
    //   err=>{
    //     alert(err);
    //   }
    // )
  }
}
