import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccountsService } from './user-accounts.service'
import { ProductService } from '../product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';
@Component({
  selector: 'ngx-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.scss']
})
export class UserAccountsComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private formBuilder: FormBuilder, private router: Router, private _UserAccountsService: UserAccountsService,
    private _productervice: ProductService) { }
  useraccountsform: FormGroup;
  submitted = false;
  useraccountspostdata = {};
  branchnamelist = [];
  AccountData: any = [];
  get f() {
    return this.useraccountsform.controls;
  }


  ngOnInit(): void {
    this.useraccountsform = this.formBuilder.group({
      userId: new FormControl("", [Validators.required]),
      accountsId: new FormControl("", [Validators.required]),
      netBankingStatus: new FormControl("", [Validators.required]),
      mobileBankingStatus: new FormControl("", [Validators.required]),
      netBankId: new FormControl("", [Validators.required]),
      NetbankPin: new FormControl("", [Validators.required]),
      netBankPass: new FormControl("", [Validators.required]),
      amount: new FormControl("", [Validators.required]),
      chargesId: new FormControl("", [Validators.required]),
      blockedBalance: new FormControl("", [Validators.required]),
      interestGiven: new FormControl("", [Validators.required]),
      branchName: new FormControl("", [Validators.required]),
      aveMonthBalance: new FormControl("", [Validators.required]),
    })
    this.getbranchvalue();
    this.getaccountdetails();
  }


  getbranchvalue() {
    return this._productervice.allBranch().subscribe(
      res => {
        console.log(res, '321')
        this.branchnamelist.push(res)
      },
      err => {
        console.log("error");
        alert(err.json);
      });
  }
  getaccountdetails() {
    return this._productervice.allAccountDetailsGet().subscribe(
      res => {
        // Form data
        this.AccountData = res;
        console.log(this.AccountData);
        // Object.entries(res).forEach(([key, values]) => {

        //       this.AccountData.push(values)


        // })
      },

    );
  }
  onReset() {
    this.useraccountsform.reset();
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid

    if (this.useraccountsform.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.useraccountsform.value


    Object.entries(_Formdata).forEach(([key, values]) => {
      this.useraccountspostdata[key] = values;
    });
    this.useraccountspostdata['CreatedBy'] = JSON.parse(localStorage.getItem('Bank_Name'));
    this.useraccountspostdata['Status'] = 'active';
    this.useraccountspostdata['approvedDate'] = '22-02-2021';
    console.log(this.useraccountspostdata);
    this._UserAccountsService.userDetailsRegisterMethod(this.useraccountspostdata).subscribe(
      res => {
        console.log(res)
        this.useraccountsform.reset();
      },
      err => {
        alert(err)
        console.log(err)
      })

  }
}
