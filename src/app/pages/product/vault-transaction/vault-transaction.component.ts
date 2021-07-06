import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-vault-transaction',
  templateUrl: './vault-transaction.component.html',
  styleUrls: ['./vault-transaction.component.scss']
})
export class VaultTransactionComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private formBuilder: FormBuilder) { }
  Vaulttransaction:  FormGroup;
  submitted = false;

  get f() {
    return this.Vaulttransaction.controls;
  }
  

  ngOnInit(): void {
    this.Vaulttransaction = this.formBuilder.group({
      Bankname: new FormControl("", [Validators.required]),
      Branchname: new FormControl("", [Validators.required]),
      fromaccount: new FormControl("", [Validators.required]),
      toaccount: new FormControl("", [Validators.required]),
      Transferdamount: new FormControl("", [Validators.required]),
      Description: new FormControl("", [Validators.required]),      
    })
  }

  onReset(){
    this.Vaulttransaction.reset();
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid

    if (this.Vaulttransaction.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.Vaulttransaction.value
    

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {

      formData.append(key, values.toString())
    })

    
  }

}
