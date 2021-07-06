import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ngx-attendanceservices',
  templateUrl: './attendanceservices.component.html',
  styleUrls: ['./attendanceservices.component.scss']
})
export class AttendanceServicesComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
