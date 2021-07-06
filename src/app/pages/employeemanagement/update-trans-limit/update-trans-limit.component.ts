import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { _finally } from 'rxjs-compat/operator/finally';
import { AlertService } from '../../../helpers/alert.service';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { EmployeemanagementService } from '../employeemanagement.service';

@Component({
  selector: 'ngx-update-trans-limit',
  templateUrl: './update-trans-limit.component.html',
  styleUrls: ['./update-trans-limit.component.scss']
})
export class UpdateTransLimitComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _empservice: EmployeemanagementService,
    private _alertService: AlertService,
    private router: Router) { }

  transactionLimitForm: FormGroup;
  submitted = false;
  transId;
  transData = [];

  ngOnInit(): void {
    console.log('update-trans-limit')
    this.transactionLimitForm = this.formBuilder.group({
      conditionname: new FormControl("", [Validators.required]),
      conditionone: new FormControl("", [Validators.required]),
      conditiontwo: new FormControl("", [Validators.required]),
    });

    this._route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getTransDetails(id);
      }
    });

  }

  getTransDetails(id) {
    this.spinner.show();
    this._empservice.getTransactionLimit()
      .subscribe(
        (res) => {
          console.log(res);
          this.transData.push(res[0]);
          this.transId = res[0].id;
          console.log(this.transId, this.transData);
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });

  }


  get f() {
    return this.transactionLimitForm.controls;
  }

  onReset() {
    this.transactionLimitForm.reset();
  }

  onSubmit() {
    this.spinner.show();
    this.submitted = true;
    // stop here if form is invalid
    if (this.transactionLimitForm.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.transactionLimitForm.value;
    console.log(_Formdata);


    Object.entries(_Formdata).forEach(([key, values]) => {
      // debugger;

      formData.append(key, values.toString());
      console.log(formData);

    });
    return this._empservice.EmpUpdate(this.transId, formData)
      .subscribe(
        (res) => {
          this._helperComponent.showToast('success', 'Update Completed');
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

  viewTrans() {
    this.router.navigate(['pages/employeemanagement/viewtrans-limit']);
  }


}
