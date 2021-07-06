import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-hqtransaction',
  templateUrl: './hqtransaction.component.html',
  styleUrls: ['./hqtransaction.component.scss']
})
export class HQTransactionComponent implements OnInit {
     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private formBuilder: FormBuilder) { }
  Hqtransaction:  FormGroup;
  submitted = false;

  get f() {
    return this.Hqtransaction.controls;
  }
  

  ngOnInit(): void {
    this.Hqtransaction = this.formBuilder.group({
      Bankname: new FormControl("", [Validators.required]),
      Branchname: new FormControl("", [Validators.required]),
      fromaccount: new FormControl("", [Validators.required]),
      toaccount: new FormControl("", [Validators.required]),
      Transferdamount: new FormControl("", [Validators.required]),
      Description: new FormControl("", [Validators.required]),      
    })
  }

  onReset(){
    this.Hqtransaction.reset();
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid

    if (this.Hqtransaction.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.Hqtransaction.value
    

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {

      formData.append(key, values.toString())
    })

    
  }

}
