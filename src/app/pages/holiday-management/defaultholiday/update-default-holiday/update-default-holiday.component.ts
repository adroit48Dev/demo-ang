import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { HolidayserviceService } from '../../holidayservice.service';
@Component({
  selector: 'ngx-update-default-holiday',
  templateUrl: './update-default-holiday.component.html',
  styleUrls: ['./update-default-holiday.component.scss']
})
export class UpdateDefaultHolidayComponent implements OnInit {
  holidayData: any = [];
  postData = {};
  holidayID: any;
  defaultHolidayUpdateForm: FormGroup;
  submitted: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _holidayService: HolidayserviceService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.defaultHolidayUpdateForm = this.formBuilder.group({
      dayofweek: new FormControl("", [Validators.required]),
      month: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required])
    });
    const id = this._route.snapshot.paramMap.get('id');
    this.holidayID = id
    console.log(this.holidayID)
    this.getDefaultHoliday(id);
  }

  getDefaultHoliday(id) {
    this._holidayService.getDefaultlholidaylistbyidMethod(id).subscribe(
      res => {
        console.log(res)
        this.holidayData = res[0];
        this.patchForm(this.holidayData);
      },
      err => {
        this._helperComponent.showToast('danger', err)
      }
    )

  }

  patchForm(res) {
    if (res) {
      const obj = {
        dayofweek: res.day_of_week,
        month: res.month,
        year: res.year,
        date: res.date,
      };
      this.defaultHolidayUpdateForm.patchValue(obj);
    }
  }

  get f() {
    return this.defaultHolidayUpdateForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();
    if (this.defaultHolidayUpdateForm.invalid) {
      return;
    }

    Object.entries(this.defaultHolidayUpdateForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    this._holidayService.updateDefaultHoliday(this.holidayID, this.postData).subscribe(
      res => {
        this.submitted = false;
        console.log(res);
        this.spinner.hide();
        this._helperComponent.showToast('success', res['message']);
        this.viewholiday();
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this._helperComponent.showToast('danger', err['message']);
      }
    );
  }

  onReset() {
    this.defaultHolidayUpdateForm.reset();
    this.submitted = false;
  }


  defaultHolidayView() {
    this.router.navigate(['pages/holidayservices/holiday']);
  }

}
