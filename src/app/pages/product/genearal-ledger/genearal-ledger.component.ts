import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-genearal-ledger',
  templateUrl: './genearal-ledger.component.html',
  styleUrls: ['./genearal-ledger.component.scss']
})
export class GenearalLedgerComponent implements OnInit {
  selectedLevel;
  replytype: string;

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private formBuilder: FormBuilder) { }
  GenearalLedger:  FormGroup;
  submitted = false;

  get f() {
    return this.GenearalLedger.controls;
  }
  

  ngOnInit(): void {
    this.GenearalLedger = this.formBuilder.group({
      Bankname: new FormControl("", [Validators.required]),
      Branchname: new FormControl("", [Validators.required]),
      fromaccount: new FormControl("", [Validators.required]),
      toaccount: new FormControl("", [Validators.required]),
      Transferdamount: new FormControl("", [Validators.required]),
      Description: new FormControl("", [Validators.required]),      
    })

    this.selectedLevel="GL"
    this.replytype="GL"
  }

  selected() {
    
    this.replytype=this.selectedLevel;
  }
  

  onReset(){
    this.GenearalLedger.reset();
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid

    if (this.GenearalLedger.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.GenearalLedger.value
    

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {

      formData.append(key, values.toString())
    })

    
  }

}
