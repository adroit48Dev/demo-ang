import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ngx-otppage',
  templateUrl: './otppage.component.html',
  styleUrls: ['./otppage.component.scss']
})
export class OtppageComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
