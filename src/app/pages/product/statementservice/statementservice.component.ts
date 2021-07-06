import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-statementservice',
  templateUrl: './statementservice.component.html',
  styleUrls: ['./statementservice.component.scss']
})
export class StatementserviceComponent implements OnInit {
  selectedLevel;
  replytype: string;

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private formBuilder: FormBuilder) { }
  
  statementservice:  FormGroup
  submitted = false;

  get f() {
    return this.statementservice.controls;
  }
  ngOnInit(): void {
    this.selectedLevel="Daily User Account Statment"
    this.replytype="Daily User Account Statment"
  }

  selected() {
    
    this.replytype=this.selectedLevel;
  }
   
}
