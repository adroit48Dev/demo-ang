import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { error } from "jquery";
import { NgxSpinnerService } from "ngx-spinner";
import { _finally } from "rxjs-compat/operator/finally";
import { AlertService } from "../../../helpers/alert.service";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { BankregisterService } from "../../layout/bankregister.service";
import { EmployeemanagementService } from "../employeemanagement.service";

@Component({
  selector: "ngx-update-employeerole",
  templateUrl: "./update-employeerole.component.html",
  styleUrls: ["./update-employeerole.component.scss"],
})
export class UpdateEmployeeroleComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _empservice: EmployeemanagementService,
    private _alertService: AlertService,
    private router: Router,
    config: NgbCarouselConfig,
    private _bankservice: BankregisterService
  ) {}

  employeeRoleForm: FormGroup;
  submitted = false;
  empRoleId;
  empRoleData = [];
  formData = {};

  ngOnInit(): void {
    console.log("Employee Role");
    this.employeeRoleForm = this.formBuilder.group({
      can_create: new FormControl("", [Validators.required]),
      can_edit: new FormControl("", [Validators.required]),
      can_view: new FormControl("", [Validators.required]),
      can_delete: new FormControl("", [Validators.required]),
      restrict_login_count: new FormControl(null, [Validators.required]),
      can_access_service_id: new FormControl(null, [Validators.required]),
    });

    this._route.paramMap.subscribe((params) => {
      const id = this._route.snapshot.paramMap.get("id");
      if (id) {
        this.empRoleId = id;
        this.getEmpRoleDetails(id);
      }
    });
  }

  getEmpRoleDetails(id) {
    this._empservice
      .EmpRoleBasedonID(id + "s")
      // .subscribe(
      //   res => {
      //     console.log(res)
      //     this.empRoleData.push(res);
      //     // this.empRoleId = res._id;
      //   },
      //   err => this._alertService.error(err)
      // );
      .subscribe(
        (res) => {
          this.empRoleData.push(res);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });
  }

  get f() {
    return this.employeeRoleForm.controls;
  }

  onReset() {
    this.employeeRoleForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.employeeRoleForm.invalid) {
      return;
    }
    let _Formdata = this.employeeRoleForm.value;
    console.log(_Formdata);

    Object.entries(_Formdata).forEach(([key, values]) => {
      // debugger;

      this.formData[key] = values;
    });
    return this._empservice
      .updateEmpRole(this.empRoleId, this.formData)
      .subscribe(
        (res) => {
          this._alertService.success(res);
        },
        (err) => {
          this._alertService.error(err);
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });
  }
  viewEmployeeRole() {
    this.router.navigate(["pages/employeemanagement/allemprolelist"]);
  }
}
