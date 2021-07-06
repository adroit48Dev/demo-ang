import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { DepositSchemeService } from "../../deposit-scheme.service";

@Component({
  selector: "ngx-deposit-condition-form",
  templateUrl: "./deposit-condition-form.component.html",
  styleUrls: ["./deposit-condition-form.component.scss"],
})
export class DepositConditionFormComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _conservice: DepositSchemeService
  ) {}

  conditionForm: FormGroup;
  submitted = false;
  postdata = {};
  ngOnInit(): void {
    this.conditionForm = this.formBuilder.group({
      Condition_name: new FormControl("", Validators.required),
      Condition_amount: new FormControl(null, Validators.required),
      Condition_rate: new FormControl(null, Validators.required),
      Condition_min_period: new FormControl(null, Validators.required),
      Condition_max_period: new FormControl(null, Validators.required),
      Condition_detail: new FormControl("", Validators.required),
    });
  }

  get f() {
    return this.conditionForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.conditionForm.invalid) {
      return;
    }

    let formData = new FormData();
    let _Formdata = this.conditionForm.value;

    // Form data
    Object.entries(_Formdata).forEach(([key, values]) => {
      this.postdata[key] = values;
    });
    this.postdata["ischarge"] = 0;
    return this._conservice
      .Condition(this.postdata)
      .subscribe(
        (res) => {
          alert(res["message"]);
          this.conditionForm.reset();
          this.router.navigate(["/pages/deposit/deposit-condition"]);
        },
        (err) => {
          alert(err.json);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {

    //     alert(res['message']);
    //     this.conditionForm.reset();
    //     this.router.navigate(['/pages/deposit/deposit-condition']);
    //   },
    //   err => {

    //     alert(err.json);
    //   });
  }
  onReset() {
    this.conditionForm.reset();
  }
  viewCondition() {
    this.router.navigate(["pages/deposit/deposit-condition"]);
  }
}
