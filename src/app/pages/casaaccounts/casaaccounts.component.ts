import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-casaaccounts',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./casaaccounts.component.scss']
})
export class CasaaccountsComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
