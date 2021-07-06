import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { DeductionsService } from '../deductions.service';

@Component({
  selector: 'ngx-update-deductions',
  templateUrl: './update-deductions.component.html',
  styleUrls: ['./update-deductions.component.scss']
})
export class UpdateDeductionsComponent implements OnInit {
  deductionsData: any = [];
  postData = {};
  deductionID: any;
  deductionsUpdationForm: FormGroup;
  submitted: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _deductionsService: DeductionsService,
    private _route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.deductionsUpdationForm = this.formBuilder.group({
      empname: new FormControl("", [Validators.required]),
      pf: new FormControl("", [Validators.required]),
      esi: new FormControl("", [Validators.required]),
      insurance: new FormControl("", [Validators.required]),
      tax: new FormControl("", [Validators.required])
    });
    const id = this._route.snapshot.paramMap.get('id');
    this.deductionID = id
    console.log(this.deductionID)
    this.getDeduction(id);
  }

  getDeduction(id) {
    this._deductionsService.getEmployeeDeductionsbyid(id).subscribe(
      res => {
        console.log(res)
        this.deductionsData = res[0];
        this.patchForm(this.deductionsData);
      },
      err => {
        this._helperComponent.showToast('danger', err)
      }
    )

  }
  patchForm(res) {
    if (res) {
      const obj = {
        empname: res.emp_name,
        pf: res.pf,
        esi: res.esi,
        insurance: res.insurance,
        tax: res.tax,
      };
      this.deductionsUpdationForm.patchValue(obj);
    }
  }

  get f() {
    return this.deductionsUpdationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();
    if (this.deductionsUpdationForm.invalid) {
      return;
    }

    Object.entries(this.deductionsUpdationForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    this._deductionsService.updateEmployeeDeductions(this.deductionID, this.postData).subscribe(
      res => {
        this.submitted = false;
        console.log(res);
        this.spinner.hide();
        this._helperComponent.showToast('success', res['message']);
        this.viewDeductions();
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this._helperComponent.showToast('danger', err['message']);
      }
    );
  }

  onReset() {
    this.deductionsUpdationForm.reset();
    this.submitted = false;
  }

  viewDeductions() {
    this.router.navigate(['pages/attendanceservices/deductions']);

  }

}
