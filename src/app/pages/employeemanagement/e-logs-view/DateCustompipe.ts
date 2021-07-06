import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Pipe({ name: 'DateCustomPipe' })
export class DateCustomPipe implements PipeTransform {
       constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private _sanitizer: DomSanitizer) { }
    // adding a default value in case you don't want to pass the format then 'yyyy-MM-dd' will be used
    transform(fromDate: Date, toDate: Date): SafeHtml {
        let value_start = fromDate.toString().split(":")
        let value_end = toDate.toString().split(":")
        var time_start = new Date();
        var time_end = new Date();
        
        let stMins = new Date(fromDate).getMinutes()
        let enMins = new Date(toDate).getMinutes()
        let stHrs = new Date(fromDate).getHours()
        let enHrs = new Date(toDate).getHours()
        console.log(stMins,enMins)
        var hourDiff = enHrs - stHrs;
        if (hourDiff < 0) {
            hourDiff = 24 + hourDiff;
        }
        // let data = '<span class="stMnth" style="font-weight: bold;text-transform: uppercase;" >' + monthNames[stMnth] + '</span><br><span class="stDate" style="font-weight: bold;text-transform: uppercase;">' + stDate + '</span> - <span class="enDate" style="font-weight: bold;text-transform: uppercase;">' + enDate + '</span>';

        let data = '<td>' + hourDiff + '</td>'
        console.log(data)
        return this._sanitizer.bypassSecurityTrustHtml(data)



    }
}