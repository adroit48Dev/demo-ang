import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { _finally } from "rxjs-compat/operator/finally";

import { EmployeemanagementService } from "../employeemanagement.service";
import { AlertService } from "../../../helpers/alert.service";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { NbToastrService } from "@nebular/theme";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "ngx-employeerole",
  templateUrl: "./employeerole.component.html",
  styleUrls: ["./employeerole.component.scss"],
})
export class EmployeeRoleComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _emproleservice: EmployeemanagementService,
    config: NgbCarouselConfig
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  employeeRoleForm: FormGroup;
  submitted = false;
  // formData = {};
  TransLimit = [];

  ngOnInit(): void {
    this.employeeRoleForm = this.formBuilder.group({
      rolename: new FormControl("", [Validators.required]),
      create: new FormControl("", [Validators.required]),
      edit: new FormControl("", [Validators.required]),
      view: new FormControl("", [Validators.required]),
      delete: new FormControl("", [Validators.required]),
      restrict_logincount: new FormControl(null, [Validators.required]),
      access_service_id: new FormControl("", [Validators.required]),
      transaction_limit_id: new FormControl("", [Validators.required]),
    });
    this.transactionLimit();
  }
  transactionLimit() {
    this._emproleservice
      .getAllTransactionLimit()
      .subscribe(
        (res) => {
          this.TransLimit = res;
        },
        (err) => {
          console.log(err);
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });
    // .subscribe(res => {
    //   this.TransLimit = res
    // },
    //   err => {
    //     console.log(err);

    //     this._helperComponent.showToast('danger', err)
    //   })
  }

  get f() {
    return this.employeeRoleForm.controls;
  }

  onReset() {
    this.employeeRoleForm.reset();
  }

  onSubmit(event) {
    this.submitted = true;
    this.spinner.show();
    // stop here if form is invalid
    if (this.employeeRoleForm.invalid) {
      return;
    }
    // let formData = new FormData();
    let formData = {};
    let _Formdata = this.employeeRoleForm.value;

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {
      formData[key] = values;
    });
    if (event.target.files.length > 0) {
      console.log(event.target.files[0].name);
    }

    this._emproleservice
      .createEmpRoleMethod(formData)
      .subscribe(
        (res) => {
          this.spinner.hide();
          this._helperComponent.showToast("success", res["message"]);
          this.submitted = false;
          this.employeeRoleForm.reset();
        },
        (err) => {
          console.log(err);

          this.spinner.hide();
          this._helperComponent.showToast("danger", err["message"]);
          this.submitted = false;
          this.employeeRoleForm.reset();
        }
      )
      .add(() => {
        this.spinner.hide();
      });
    // .subscribe(
    //   res => {
    //     this.spinner.hide()

    //     this._helperComponent.showToast('success', res['message'])
    //     this.submitted = false;
    //     this.employeeRoleForm.reset();

    //   },
    //   err => {
    //     console.log(err);

    //     this.spinner.hide()
    //     this._helperComponent.showToast('danger', err['message'])
    //     this.submitted = false;
    //     this.employeeRoleForm.reset();
    //   })
  }

  viewEmployeeRole() {
    this.router.navigate(["pages/employeemanagement/allemprolelist"]);
  }
}
