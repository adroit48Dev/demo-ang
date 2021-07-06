import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { resolveCname } from "dns";
import { NgxSpinnerService } from "ngx-spinner";
import { AlertService } from "../../../helpers/alert.service";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { EmployeemanagementService } from "../employeemanagement.service";

@Component({
  selector: "ngx-allemprolelist",
  templateUrl: "./allemprolelist.component.html",
  styleUrls: ["./allemprolelist.component.scss"],
})
export class AllEmpRoleListComponent implements OnInit {
  empRoleDetails: any;
  createRole = false;

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute,
    private _employeeManagementService: EmployeemanagementService
  ) {}

  ngOnInit(): void {
    this._employeeManagementService
      .allEmpRole()
      .subscribe(
        (res) => {
          console.log(res);
          if (res.length > 0) {
            this.empRoleDetails = res;
            this.createRole = false;
          } else {
            this.createRole = true;
          }
          this.empRoleDetails = res;
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //     res => {
    //       console.log(res)
    //       if (res.length > 0) {
    //         this.empRoleDetails = res
    //         this.createRole = false;
    //       }
    //       else {
    //         this.createRole = true;
    //       }
    //       this.empRoleDetails = res;
    //     }
    //   );
  }

  CreateRole() {
    this.router.navigate(["pages/employeemanagement/employeerole"]);
  }

  updateEmployeeRole(data) {
    const _id = data._id;
    this.router.navigate(["pages/employeemanagement/update-employeerole", _id]);
  }
}
