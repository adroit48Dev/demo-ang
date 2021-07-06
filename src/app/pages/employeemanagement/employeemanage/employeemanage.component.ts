import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { _finally } from "rxjs-compat/operator/finally";
import { EmployeemanagementService } from "../employeemanagement.service";
import { BranchregisterService } from "../../layout/branchregister.service";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { AnyARecord } from "dns";

@Component({
  selector: "ngx-employeemanage",
  templateUrl: "./employeemanage.component.html",
  styleUrls: ["./employeemanage.component.scss"],
})
export class EmployeemanageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _empservice: EmployeemanagementService,
    private _empBranch: BranchregisterService,
    private _helperComponent: HelpersComponent,
    private cd: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
    config: NgbCarouselConfig
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  employeeRegisterForm: FormGroup;
  submitted = false;
  SelectedValues = "";
  EmpRoleName = [];
  BranhDetails = [];
  formData = {};

  ngOnInit(): void {
    this.employeeRegisterForm = this.formBuilder.group({
      branchid: new FormControl("", [Validators.required]),
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      gender: new FormControl("", [Validators.required]),
      dob: new FormControl(null),
      employeeId: new FormControl("", [Validators.required]),
      mobileno1: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}$"),
      ]),
      mobileno2: new FormControl(null, [Validators.pattern("[0-9]{10}$")]),
      designation: new FormControl("", [Validators.required]),
      emproleid: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      area: new FormControl("", [Validators.required]),
      district: new FormControl("", [Validators.required]),
      pincode: new FormControl("", [
        Validators.required,
        Validators.required,
        Validators.pattern("[0-9]*$"),
      ]),
      document: new FormControl("", [Validators.required]),
    });
    // this.EmpRoleDetails()
    this.BranchDetails();
  }

  BranchDetails() {
    this._empBranch
      .allBranchGet()
      .subscribe(
        (res) => {
          this.BranhDetails = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     this.BranhDetails = res
    //     console.log(res);

    //   },
    //   err => {
    //     console.log(err);
    //   });
  }

  EmpRoleDetails() {
    this._empservice
      .allEmpRole()
      .subscribe(
        (res) => {
          this.EmpRoleName = res;
          console.log(res);
        },
        (err) => {
          console.log(err);
          this._helperComponent.showToast("danger", err["message"]);
          // this._helperComponent.showToast('danger', err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res) => {
    //     this.EmpRoleName = res;
    //     console.log(res);
    //   },
    //   (err) => {
    //     console.log(err);
    //     this._helperComponent.showToast("danger", err["message"]);
    //   }
    // );
  }
  selectedFile: File;
  onFileChange(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }
  get f() {
    return this.employeeRegisterForm.controls;
  }

  onReset() {
    this.employeeRegisterForm.reset();
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid

    debugger;
    if (this.employeeRegisterForm.invalid) {
      return;
    }
    this.spinner.show();

    var formData = new FormData();

    Object.entries(this.employeeRegisterForm.value).forEach(([key, value]) => {
      if (value == null) {
        formData.append(key, "");
      } else {
        formData.append(key, value.toString());
      }
    });
    formData.append("file", this.selectedFile, this.selectedFile.name);
    console.log(this.employeeRegisterForm.value);
    this._empservice
      .EmpRegisterMethod(formData)
      .subscribe(
        (res) => {
          console.log(res);
          this.spinner.hide();
          this._helperComponent.showToast("success", res["message"]);
          this.submitted = false;
          this.employeeRegisterForm.reset();
        },
        (err) => {
          this.spinner.hide();
          this._helperComponent.showToast("danger", err["message"]);
          console.log(err);
          // this._helperComponent.showToast('danger', err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.spinner.hide();
    //     this._helperComponent.showToast("success", res["message"]);
    //     this.submitted = false;
    //     this.employeeRegisterForm.reset();
    //   },
    //   (err) => {
    //     this.spinner.hide();
    //     this._helperComponent.showToast("danger", err["message"]);
    //     console.log(err);
    //   }
    // );
  }
  viewEmployee() {
    this.router.navigate(["pages/employeemanagement/viewemployee"]);
  }
}
