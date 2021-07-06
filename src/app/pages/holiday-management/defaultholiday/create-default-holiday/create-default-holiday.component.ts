import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { HolidayserviceService } from '../../holidayservice.service';


@Component({
  selector: 'ngx-create-default-holiday',
  templateUrl: './create-default-holiday.component.html',
  styleUrls: ['./create-default-holiday.component.scss']
})
export class CreateDefaultHolidayComponent implements OnInit {
  postData: any = {};
  submitted: boolean = false;
  defaultHolidayCreateForm: FormGroup;
     constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private _holidayService: HolidayserviceService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  get f() {
    return this.defaultHolidayCreateForm.controls;
  }

  ngOnInit(): void {
    this.defaultHolidayCreateForm = this.formBuilder.group({
      dayofweek: new FormControl("", [Validators.required]),
      month: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required])
    });
  }

  onSubmit() {
    this.spinner.show();
    this.submitted = true;
    Object.entries(this.defaultHolidayCreateForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    this._holidayService.createDefaultHolidayMethod(this.postData).subscribe(
      res => {
        console.log(res);
        this._helperComponent.showToast('success', res['message']);
        this.spinner.hide();
        this.defaultHolidayCreateForm.reset();
        this.submitted = false;
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this._helperComponent.showToast('danger', err['message']);
        this.submitted = false;
      }
    );
  }

  onReset() {
    this.defaultHolidayCreateForm.reset();
    this.submitted = false;
  }

  defaultHolidayView() {
    this.router.navigate(['pages/holiday-management/defaultholiday'])
  }

}
