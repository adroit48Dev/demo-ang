import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../../../auth/components/login/authencation.service';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { LeavepolicyService } from '../leavepolicy.service';

@Component({
  selector: 'ngx-update-leave-policy',
  templateUrl: './update-leave-policy.component.html',
  styleUrls: ['./update-leave-policy.component.scss']
})
export class UpdateLeavePolicyComponent implements OnInit {
  updateLeavePolicyForm: FormGroup;
  submitted: boolean = false;
  LeavepolicyData = []
  updatepostdata = []
  LeavepolicyID;
  private routeSub: Subscription;
     constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _leavepolicy: LeavepolicyService,
    private _route: ActivatedRoute, private _helperComponent: HelpersComponent,
    private spinner: NgxSpinnerService, config: NgbCarouselConfig,
    private authenticationService: AuthenticationService) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.updateLeavePolicyForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      numberOfDays: new FormControl("", [Validators.required])
    });
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.getLeavePolicyDetails(id);

    }
  }


  getLeavePolicyDetails(id) {

    this._leavepolicy.EmpLeavePolicyGet(id).subscribe(
      res => {
        console.log(res);


        this.LeavepolicyData.push(res)
        this.LeavepolicyID = res._id

      },
      err => {


        this._helperComponent.showToast('danger', err)
      }
    )

  }

  get f() {
    return this.updateLeavePolicyForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateLeavePolicyForm.invalid) {
      return;
    }
    var formData = this.updateLeavePolicyForm.value;
    this.spinner.show()

    // Form data

    Object.entries(formData).forEach(([key, values]) => {
      this.updatepostdata[key] = values;
    })


    return this._leavepolicy.EmpLeavePolicyUpdate(this.LeavepolicyID, formData).subscribe(
      res => {
        this.spinner.hide()
        this._helperComponent.showToast('success', res['message'])
        this.router.navigate(['/pages/attendanceservices/leavepolicy']);


      },
      err => {
        this.spinner.hide()
        this._helperComponent.showToast('danger', err['message'])
      })
  }

  onReset() {
    this.updateLeavePolicyForm.reset()
  }


  viewLeavePolicy() {
    this.router.navigate(['pages/attendanceservices/leavepolicy']);
  }

}
