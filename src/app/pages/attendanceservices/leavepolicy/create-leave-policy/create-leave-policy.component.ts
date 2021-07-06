import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { AttendanceServicesService } from '../../attendanceservices.service';
import { LeavepolicyService } from '../leavepolicy.service';

@Component({
  selector: 'ngx-create-leave-policy',
  templateUrl: './create-leave-policy.component.html',
  styleUrls: ['./create-leave-policy.component.scss']
})
export class CreateLeavePolicyComponent implements OnInit {
  createLeavePolicyForm: FormGroup;
  submitted: boolean = false;
     constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private _leavepolicyservice: LeavepolicyService,
    private router: Router, config: NgbCarouselConfig
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.createLeavePolicyForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      noofdays: new FormControl("", [Validators.required])
    });
  }

  get f() {
    return this.createLeavePolicyForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.createLeavePolicyForm.invalid) {
      return;
    }
    const formData = this.createLeavePolicyForm.value;

    this._leavepolicyservice.EmpLeavePolicyeMethod(formData).subscribe(
      res => {
        this.spinner.hide()
        this._helperComponent.showToast('success', res['message'])
        this.submitted = false;
        this.createLeavePolicyForm.reset();

      },
      err => {
        this.spinner.hide()
        this._helperComponent.showToast('danger', err['message'])
        console.log(err);
      });
  }

  onReset() {
    this.createLeavePolicyForm.reset()
  }

  viewLeavePolicy() {
    this.router.navigate(['pages/attendanceservices/leavepolicy']);
  }

}
