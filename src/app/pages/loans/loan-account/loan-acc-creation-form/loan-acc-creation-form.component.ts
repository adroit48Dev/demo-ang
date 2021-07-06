import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";
@Component({
  selector: 'ngx-loan-acc-creation-form',
  templateUrl: './loan-acc-creation-form.component.html',
  styleUrls: ['./loan-acc-creation-form.component.scss']
})
export class LoanAccCreationFormComponent implements OnInit {
  variableRate: boolean = false;
  form: boolean = true;
  formPreview: boolean = false;

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private formBuilder: FormBuilder, private router: Router) { }

  loanAccCreationForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.loanAccCreationForm = this.formBuilder.group(
      {
        loanproduct: new FormControl("", Validators.required),
        interesttype: new FormControl("", Validators.required),
        interestmethod: new FormControl("", Validators.required),
        tenure: new FormControl("", Validators.required),
        loan_amount: new FormControl(null, [Validators.required, Validators.pattern("[0-9]*$")]),
        interest_rate: new FormControl(null, Validators.required),
        loanproductid: new FormControl("", Validators.required),
        bank_cus: new FormControl("", Validators.required),
        bankaccno: new FormControl(null, [Validators.required, Validators.pattern("[0-9]*$")]),
        bankname: new FormControl("", Validators.required),
        bankifsc: new FormControl("", Validators.required),
        installment: new FormControl("", Validators.required),
        repaymentmode: new FormControl("", Validators.required),
        loan_repayment_period: new FormControl("", [Validators.required, Validators.pattern("[0-9]{1,2}")]),
        billingcycle: new FormControl("", Validators.required),
        document: new FormControl("", Validators.required),
      }
    );
  }

  get f() {
    return this.loanAccCreationForm.controls;
  }
  onReset() {
    this.loanAccCreationForm.reset();
  }
  onSubmit() {
    this.submitted = true;
    this.form = false;
    this.formPreview = true;
  }

  // to enable interest method text input
  selectOption(eventVal) {
    console.log(eventVal);
    if (eventVal === 'variable-rate') this.variableRate = true;
    else this.variableRate = false;

  }
  viewLoanAcc() {
    this.router.navigate(['pages/loans/loan-account']);
  }

}
