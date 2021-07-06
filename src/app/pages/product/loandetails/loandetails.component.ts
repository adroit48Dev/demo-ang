import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';


@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.scss']
})
export class LoandetailsComponent implements OnInit {

  // isDisplay = true;
  // isShow = true;
  // toggleDisplay(){
    // this.isDisplay = !this.isDisplay
    // this.isShow = !this.isShow

  //   if(this.isDisplay){
  //     this.isDisplay = false
  //   }
  //   if(this.isShow){
  //    this.isShow = false
  //   }
  //    else{
  //     this.isDisplay = true
  //     this.isShow = true
  //   } 
  // }

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }

  ngOnInit(): void {
  }
}
