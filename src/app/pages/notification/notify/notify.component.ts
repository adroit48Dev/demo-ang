import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent) { }
  @ViewChild('item', { static: true }) accordion;

  ngOnInit(): void {
  }

  toggle() {
    this.accordion.toggle();
  }

}
