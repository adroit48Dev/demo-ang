import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { HolidayserviceService } from "../holidayservice.service";

@Component({
  selector: "app-defaultholiday",
  templateUrl: "./defaultholiday.component.html",
  styleUrls: ["./defaultholiday.component.scss"],
})
export class DefaultHolidayComponent implements OnInit {
  defaultHolidayData: any = [];

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _holidayService: HolidayserviceService
  ) {}

  ngOnInit(): void {
    this._holidayService
      .getholidaylistMethod()
      .subscribe(
        (res) => {
          console.log(res);
          this.defaultHolidayData = res;
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res =>{
    //     console.log(res);
    //     this.defaultHolidayData = res;
    //   },
    //   err =>{
    //     console.log(err)
    //   }
    // )
  }
  createDefaultHoliday() {
    this.router.navigate([
      "pages/holiday-management/defaultholiday/create-default-holiday",
    ]);
  }

  updateSpecialHoliday(id) {
    console.log(id)
    this.router.navigate(['pages/holiday-management/defaultholiday/update-default-holiday', id]);
  }
}
