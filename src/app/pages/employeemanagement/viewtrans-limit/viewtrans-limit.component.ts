import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { EmployeemanagementService } from "../employeemanagement.service";

@Component({
  selector: "ngx-viewtrans-limit",
  templateUrl: "./viewtrans-limit.component.html",
  styleUrls: ["./viewtrans-limit.component.scss"],
})
export class ViewTransLimitComponent implements OnInit {
  transDetails: any;

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute,
    private _employeeManagementService: EmployeemanagementService
  ) {}

  ngOnInit(): void {
    this._employeeManagementService
      .getAllTransactionLimit()
      .subscribe(
        (res) => {
          console.log(res);
          this.transDetails = res;
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
    //     console.log(res);
    //     this.transDetails = res;
    //   }
    // );
  }

  createTransLimit() {
    this.router.navigate(["pages/employeemanagement/trans-limit"]);
  }
  updateTransLimit(id: Number) {
    this.router.navigate(["pages/employeemanagement/update-trans-limit", id]);
  }
}
