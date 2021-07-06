import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-user-accountinterest',
  templateUrl: './user-accountinterest.component.html',
  styleUrls: ['./user-accountinterest.component.scss']
})
export class UserAccountinterestComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private formBuilder: FormBuilder) { }
  UserAccountInterest:  FormGroup;
  submitted = false;

  get f() {
    return this.UserAccountInterest.controls;
  }
  

  ngOnInit(): void {
    this.UserAccountInterest = this.formBuilder.group({
      userid: new FormControl("", [Validators.required]),
      Interestid: new FormControl("", [Validators.required]),
      accountno: new FormControl("", [Validators.required]),
      Interestper: new FormControl("", [Validators.required]),
      Interestgiven: new FormControl("", [Validators.required]),
      Givendate: new FormControl("", [Validators.required]),
      Interesttype: new FormControl("", [Validators.required]),            
    })
  }

  onReset(){
    this.UserAccountInterest.reset();
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid

    if (this.UserAccountInterest.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.UserAccountInterest.value
    

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {

      formData.append(key, values.toString())
    })

    
  }

}
