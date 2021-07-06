import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-user-account-charge',
  templateUrl: './user-account-charge.component.html',
  styleUrls: ['./user-account-charge.component.scss']
})
export class UserAccountChargeComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private formBuilder: FormBuilder) { }
  UserAccountCharge:  FormGroup;
  submitted = false;

  get f() {
    return this.UserAccountCharge.controls;
  }
  

  ngOnInit(): void {
    this.UserAccountCharge = this.formBuilder.group({
      userid: new FormControl("", [Validators.required]),
      charges: new FormControl("", [Validators.required]),
      accountno: new FormControl("", [Validators.required]),
      feeid: new FormControl("", [Validators.required]),
      chargedreason: new FormControl("", [Validators.required]),
      chargeddate: new FormControl("", [Validators.required]),
      isonetime: new FormControl("", [Validators.required]),      
      isfinecharged: new FormControl("", [Validators.required]),      
      recurringtime: new FormControl("", [Validators.required]),      
    })
  }

  onReset(){
    this.UserAccountCharge.reset();
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid

    if (this.UserAccountCharge.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.UserAccountCharge.value
    

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {

      formData.append(key, values.toString())
    })

    
  }

}
