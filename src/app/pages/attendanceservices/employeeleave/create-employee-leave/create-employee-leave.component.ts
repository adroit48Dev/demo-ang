import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { HelpersComponent } from '../../../../helpers/helpers.component';
// import { Select2OptionData } from 'ngSelect2';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'ngx-create-employee-leave',
  templateUrl: './create-employee-leave.component.html',
  styleUrls: ['./create-employee-leave.component.scss']
})
export class CreateEmployeeLeaveComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _empleaveservice: EmployeeserviceService, 
    config: NgbCarouselConfig
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  createEmployeeLeave: FormGroup;
  submitted = false;
  // public EmpData: Observable<Array<Select2OptionData>;
  public startValue: Observable<string>;

  ngOnInit(): void {
    console.log('create-employee-leave');
    this.createEmployeeLeave = this.formBuilder.group({
      employeeName: new FormControl("", [Validators.required]),
      leaveName: new FormControl("", [Validators.required]),
      leaveStart: new FormControl("", [Validators.required]),
      leaveEnd: new FormControl("", [Validators.required]),
      remainingLeave: new FormControl("", [Validators.required]),
    });

    // this.EmpData = this._empleaveservice.EmpLeaveCreateMethod().pipe(delay(4000));
    // this.startValue = Observable.create(obs => {
    //   obs.next('dyn3');
    //   obs.complete();
    // }).pipe(delay(6000));
  }


  getLeavePolicy() {

  }

  get f() {
    return this.createEmployeeLeave.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.createEmployeeLeave.invalid) {
      return;
    }
    const formData = this.createEmployeeLeave.value;
    this._empleaveservice.EmpLeaveCreateMethod(formData).subscribe(
      res => {
        this.spinner.hide()
        this._helperComponent.showToast('success', res['message'])
        this.submitted = false;
        this.onReset()

      },
      err => {
        this.spinner.hide()
        this._helperComponent.showToast('danger', err['message'])
        console.log(err);
      });
  }

  onReset() {
    this.createEmployeeLeave.reset()
  }

  viewEmployeeLeave() {
    this.router.navigate(['pages/attendanceservices/employeeleave']);
  }

}
