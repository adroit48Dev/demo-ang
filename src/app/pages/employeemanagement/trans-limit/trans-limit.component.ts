import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { EmployeemanagementService } from "../employeemanagement.service";
import { NbToastrService } from "@nebular/theme";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "ngx-trans-limit",
  templateUrl: "./trans-limit.component.html",
  styleUrls: ["./trans-limit.component.scss"],
  providers: [NgbCarouselConfig],
})
export class TransLimitComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _transactionservie: EmployeemanagementService,
    private _helperComponent: HelpersComponent,
    config: NgbCarouselConfig,
    private spinner: NgxSpinnerService
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  transactionLimitForm: FormGroup;
  submitted = false;
  formData = {};

  ngOnInit(): void {
    this.transactionLimitForm = this.formBuilder.group({
      conditionname: new FormControl("", [Validators.required]),
      conditionone: new FormControl("", [Validators.required]),
      conditiontwo: new FormControl("", [Validators.required]),
    });
  }

  get f() {
    return this.transactionLimitForm.controls;
  }

  onReset() {
    this.transactionLimitForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();
    // stop here if form is invalid
    if (this.transactionLimitForm.invalid) {
      return;
    }
    let _Formdata = this.transactionLimitForm.value;

    Object.entries(_Formdata).forEach(([key, values]) => {
      // debugger;

      this.formData[key] = values;
    });
    return this._transactionservie
      .createTransactionLimitMethod(this.formData)
      .subscribe(
        (res) => {
          console.log(res);
          this.spinner.hide();
          this._helperComponent.showToast("success", res["message"]);
          this.submitted = false;
          this.transactionLimitForm.reset();
        },
        (err) => {
          this.spinner.hide();
          this._helperComponent.showToast("danger", err["message"]);
        }
      )
      .add(() => {
        this.spinner.hide();
      });
    // .subscribe(
    //   res => {
    //     console.log(res)
    //     this.spinner.hide()
    //     this._helperComponent.showToast('success', res['message'])
    //     this.submitted = false;
    //     this.transactionLimitForm.reset();

    //   },
    //   err => {
    //     this.spinner.hide()
    //     this._helperComponent.showToast('danger', err['message'])
    //   });
  }

  viewTrans() {
    this.router.navigate(["pages/employeemanagement/viewtrans-limit"]);
  }
}
