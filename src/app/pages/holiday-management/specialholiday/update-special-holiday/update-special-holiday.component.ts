import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from "rxjs";
import { HelpersComponent } from "../../../../helpers/helpers.component";
import { HolidayserviceService } from "../../holidayservice.service";

@Component({
  selector: "ngx-update-special-holiday",
  templateUrl: "./update-special-holiday.component.html",
  styleUrls: ["./update-special-holiday.component.scss"],
})
export class UpdateSpecialHolidayComponent implements OnInit {
  specialHolidayData: any = [];
  specialHolidayUpdateForm: FormGroup;
  submitted = false;
  private routeSub: Subscription;
  specialHolidayID;
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private _holidayService: HolidayserviceService,
    private router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.specialHolidayUpdateForm = this.formBuilder.group({
      daysinmonth: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
    });
    const id = this._route.snapshot.paramMap.get("id");
    this.getSpecialHoliday(id);
  }

  getSpecialHoliday(specialHolidayID) {
    this._holidayService
      .getsplholidaylistbyidMethod(specialHolidayID)
      .subscribe(
        (res) => {
          console.log(res);
          this.specialHolidayData = res;
          this.specialHolidayID = res[0]["_id"];
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });
  }

  get f() {
    return this.specialHolidayUpdateForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.specialHolidayUpdateForm.invalid) {
      return;
    }

    let formData = this.specialHolidayUpdateForm.value;
    console.log(formData);
    this._holidayService
      .updateSpecialHoliday(this.specialHolidayID, formData)
      .subscribe(
        (res) => {
          console.log(res);
          this.spinner.hide();
          this._helperComponent.showToast("success", res["message"]);
          this.specialHolidayView();
        },
        (err) => {
          console.log(err);
          this.spinner.hide();
          this._helperComponent.showToast("danger", err["message"]);
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
    //     this.specialHolidayView();
    //   },
    //   err => {
    //     console.log(err);
    //     this.spinner.hide();
    //     this._helperComponent.showToast('danger', err['message']);
    //   }
    // );
  }

  onReset() {
    this.specialHolidayUpdateForm.reset();
  }

  specialHolidayView() {
    this.router.navigate(["pages/holiday-management/specialholiday"]);
  }
}
