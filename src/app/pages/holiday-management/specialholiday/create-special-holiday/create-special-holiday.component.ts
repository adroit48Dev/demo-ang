import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";
import { HolidayserviceService } from "../../holidayservice.service";

@Component({
  selector: "ngx-create-special-holiday",
  templateUrl: "./create-special-holiday.component.html",
  styleUrls: ["./create-special-holiday.component.scss"],
})
export class CreateSpecialHolidayComponent implements OnInit {
  postData: any = {};
  specialHolidayCreationForm: FormGroup;
  submitted = false;
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private _holidayService: HolidayserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.specialHolidayCreationForm = this.formBuilder.group({
      daysinmonth: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
    });
  }

  get f() {
    return this.specialHolidayCreationForm.controls;
  }

  onSubmit() {
    this.spinner.show();
    this.submitted = true;

    if (this.specialHolidayCreationForm.invalid) {
      return;
    }

    Object.entries(this.specialHolidayCreationForm.value).forEach(
      ([key, values]) => {
        this.postData[key] = values;
      }
    );
    this._holidayService
      .createSpecialHolidayMethod(this.postData)
      .subscribe(
        (res) => {
          console.log(res);
          this.spinner.hide();
          this._helperComponent.showToast("success", res["message"]);
          this.specialHolidayCreationForm.reset();
          this.submitted = false;
        },
        (err) => {
          this.spinner.hide();
          this._helperComponent.showToast("danger", err["message"]);
          this.submitted = false;
          console.log(err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res);
    //     this.spinner.hide();
    //     this._helperComponent.showToast('success', res['message']);
    //     this.specialHolidayCreationForm.reset();
    //     this.submitted = false;
    //   },
    //   err => {
    //     this.spinner.hide();
    //     this._helperComponent.showToast('danger', err['message']);
    //     this.submitted = false;
    //     console.log(err);
    //   }
    // );
  }

  onReset() {
    this.specialHolidayCreationForm.reset();
    this.submitted = false;
  }

  specialHolidayView() {
    this.router.navigate(["pages/holiday-management/specialholiday"]);
  }
}
