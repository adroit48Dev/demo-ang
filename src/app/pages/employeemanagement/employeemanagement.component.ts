import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../helpers/helpers.component';

@Component({
  selector: 'ngx-employeemanagement',
  templateUrl: './employeemanagement.component.html',
  styleUrls: ['./employeemanagement.component.scss']
})
export class EmployeemanagementComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, config: NgbCarouselConfig,
    ) {
config.interval = 8000;
config.wrap = true;
config.keyboard = false;
config.pauseOnHover = true;
}


  ngOnInit(): void {
  }

}
