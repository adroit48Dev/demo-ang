import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.scss']
})
export class CreateprofileComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
