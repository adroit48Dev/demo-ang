import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LoansService } from "../../loans.service";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";

@Component({
  selector: "ngx-loan-creation-form",
  templateUrl: './loan-creation-form.component.html',
  styleUrls: ["./loan-creation-form.component.scss"],
})
export class LoanCreationFormComponent implements OnInit {
     constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _loansService: LoansService,
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent
  ) { }

  loanCreationForm: FormGroup;
  submitted = false;
  postdata = {};

  countCondition: number = 1;

  ngOnInit(): void {
    this.loanCreationForm = this.formBuilder.group(
      {
        productname: new FormControl("", Validators.required),
        shortname: new FormControl("", Validators.required),
        interesttype: new FormControl("", Validators.required),
        penaltyrate: new FormControl("", [Validators.required, Validators.pattern("[0-9]{1,2}(\.[0-9]{1,2})?")]),
        tenure: new FormControl("", Validators.required),
        bouncecharge: new FormControl(null, [Validators.required, Validators.pattern("[0-9]*$")]),
        overdueinterest: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,2}(\.[0-9]{1,2})?$")]),
        processingfees: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,2}(\.[0-9]{1,2})?$")]),
        processingfee_transferfromaccount: new FormControl("", Validators.required),
        prepaymentfees: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,2}(\.[0-9]{1,2})?$")]),
        prepaymentlockingperiod: new FormControl("", Validators.required),
        documentname: new FormControl("", Validators.required),
        minimumamount: new FormControl(null, [Validators.required, Validators.pattern("[0-9]*")]),
        maximumamount: new FormControl(null, [Validators.required, Validators.pattern("[0-9]*")]),
        minimuminterestrate: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,2}(\.[0-9]{1,2})?$")]),
        maximuminterestrate: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,2}(\.[0-9]{1,2})?$")]),
        arrear_tolerance_days: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{1,2}")]),
        nonworking_days_tolerance_period: new FormControl("", Validators.required),
        NPADays: new FormControl("", [Validators.required, Validators.pattern("[0-9]{1,2}")]),

        conditionForms: this.formBuilder.array([this.initConditionForms()])
      }
    );
  }
  // condition form field for adding more fields *******
  initConditionForms() {
    return this.formBuilder.group({ conditionname: [''], conditionvalue: [''], conditiontype: [''] });
  }
  get formArr() {
    return this.loanCreationForm.get('conditionForms') as FormArray;
  }
  onCondition() {
    this.countCondition++;
    this.formArr.push(this.initConditionForms());
  }
  deleteForm(index: number) {
    this.countCondition--;
    this.formArr.removeAt(index);
  }
  // **********

  get f() {
    return this.loanCreationForm.controls;
  }
  onReset() {

    this.loanCreationForm.reset();
  }

  onSubmit() {
    console.log(this.loanCreationForm);
    this.spinner.hide();
    this.submitted = true;

    if (this.loanCreationForm.invalid) {
      return;
    }
    // Form data
    let _Formdata = this.loanCreationForm.value;

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.postdata[key] = values;
    });

    return this._loansService.createLoanMethod(this.postdata)
      // .subscribe(
      //   (res) => {
      //     alert(res["message"]);
      //     this.loanCreationForm.reset();
      //   },
      //   (err) => {
      //     alert(err.json);
      //   }
      // );
      .subscribe(
        (res) => {
          console.log(res)
          this.loanCreationForm.reset();
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

  viewLoan() {
    this.router.navigate(['pages/loans/loan']);
  }
}
