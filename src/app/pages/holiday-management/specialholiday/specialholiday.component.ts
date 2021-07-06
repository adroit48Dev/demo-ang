import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { HolidayserviceService } from '../holidayservice.service';

@Component({
  selector: 'app-specialholiday',
  templateUrl: './specialholiday.component.html',
  styleUrls: ['./specialholiday.component.scss']
})
export class SpecialHolidayComponent implements OnInit {

  specialHolidayData: any = [];

     constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _holidayService: HolidayserviceService
  ) { }

  ngOnInit(): void {
    this._holidayService.getsplholidaylistMethod().subscribe(
      res => {
        console.log(res);
        this.specialHolidayData = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  createSpecialHoliday() {
    this.router.navigate(['pages/holiday-management/specialholiday/create-special-holiday']);
  }
  
  updateSpecialHoliday(id) {
    console.log(id)
    this.router.navigate(['pages/holiday-management/specialholiday/update-special-holiday', id]);
  }
}
