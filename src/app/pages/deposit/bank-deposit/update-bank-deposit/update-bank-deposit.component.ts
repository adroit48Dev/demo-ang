import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { BankdepositService } from '../bankdeposit.service';

@Component({
  selector: 'ngx-update-bank-deposit',
  templateUrl: './update-bank-deposit.component.html',
  styleUrls: ['./update-bank-deposit.component.scss']
})
export class UpdateBankDepositComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    private _updateservice: BankdepositService) { }
  private routeSub: Subscription;

  depositForm: FormGroup;
  submitted = false;
  bankdata = [];
  bankid = "";
  postdata = {};
  ngOnInit(): void {
    this.depositForm = this.formBuilder.group(
      {
        product_name: new FormControl("", Validators.required),
        product_detail: new FormControl("", Validators.required),
      }
    );
    this.routeSub = this._route.params.subscribe(params => {
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
      this.get_data(params['id']);
    });
  }

  get f() {
    return this.depositForm.controls;
  }

  get_data(id) {
    this._updateservice.bankGet(id)
      .subscribe(
        (res) => {
          this.bankdata.push(res[0]);
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.depositForm.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.depositForm.value;
    // Form data
    Object.entries(_Formdata).forEach(([key, values]) => {
      this.postdata[key] = values;
    });
    return this._updateservice.bankupdate(this.bankid, this.postdata)
      .subscribe(
        (res) => {
          this.router.navigate(['/pages/deposit/bank-deposit']);
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

  onReset() {
    this.depositForm.reset();
  }
  ViewDeposit() {
    this.router.navigate(['pages/deposit/bank-deposit']);
  }
}
