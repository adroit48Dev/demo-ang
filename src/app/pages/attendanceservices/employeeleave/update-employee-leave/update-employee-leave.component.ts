import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from '../../../../auth/components/login/authencation.service';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'ngx-update-employee-leave',
  templateUrl: './update-employee-leave.component.html',
  styleUrls: ['./update-employee-leave.component.scss']
})
export class UpdateEmployeeLeaveComponent implements OnInit {

     constructor(
    private formBuilder: FormBuilder,
    private _empleave: EmployeeserviceService,
    private router: Router,
    private _route: ActivatedRoute, private _helperComponent: HelpersComponent,
    private spinner: NgxSpinnerService, config: NgbCarouselConfig,
    private authenticationService: AuthenticationService) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  updateEmployeeLeave: FormGroup;
  submitted = false;
  EmpLeaveData = []
  EmpLeaveID;
  updatepostdata = []

  ngOnInit(): void {
    this.updateEmployeeLeave = this.formBuilder.group({
      employeeName: new FormControl("", [Validators.required]),
      leaveName: new FormControl("", [Validators.required]),
      leaveStart: new FormControl("", [Validators.required]),
      leaveEnd: new FormControl("", [Validators.required]),
      remainingLeave: new FormControl("", [Validators.required]),
    });
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.getEmpLeaveDetails(id);
    }
  }
  getEmpLeaveDetails(id) {

    this._empleave.EmpLeaveGet(id).subscribe(
      res => {
        this.EmpLeaveData.push(res)
        this.EmpLeaveID = res._id

      },
      err => {


        this._helperComponent.showToast('danger', err)
      }
    )

  }



  get f() {
    return this.updateEmployeeLeave.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateEmployeeLeave.invalid) {
      return;
    }
    const formData = this.updateEmployeeLeave.value;
    this.spinner.show()
    // Form data
    Object.entries(formData).forEach(([key, values]) => {
      this.updatepostdata[key] = values;
    })

    return this._empleave.EmpLeaveUpdate(this.EmpLeaveID, formData).subscribe(
      res => {
        this.spinner.hide()
        this._helperComponent.showToast('success', res['message'])
        this.onReset()
        this.router.navigate(['pages/attendanceservices/employeeleave']);


      },
      err => {
        this.spinner.hide()
        this._helperComponent.showToast('danger', err['message'])
      })
  }

  onReset() {
    this.updateEmployeeLeave.reset()
  }

  viewEmployeeLeave() {
    this.router.navigate(['pages/attendanceservices/employeeleave']);
  }
}
