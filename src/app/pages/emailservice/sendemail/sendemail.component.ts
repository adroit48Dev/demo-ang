import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgxSpinnerService } from 'ngx-spinner';
import { Script } from 'vm';
import { HelpersComponent } from '../../../helpers/helpers.component';
declare let $: any;

@Component({
  selector: 'ngx-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.scss']
})
export class SendEmailComponent implements OnInit {
  selectedLevel;
  replytype: string;

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }


  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;

  ngOnInit(): void {
    $('.js-example-basic-single').select2();
    $('.js-example-basic-single').on("change", function(){
     alert($(this).val());
    });

    this.selectedLevel="MS"
    this.replytype="MS"
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  selected() {    
    this.replytype=this.selectedLevel;
  }

}
