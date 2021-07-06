import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-showcase-dialog',
  templateUrl: './showcase-dialog.component.html',
  styleUrls: ['./showcase-dialog.component.scss']
})
export class ShowcaseDialogComponent implements OnInit {
  messageForm: FormGroup;
  @Input() data: any;
  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      message_name: new FormControl("", [Validators.required]),
      message_details: new FormControl("", [Validators.required])
    })
  }

  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    protected ref: NbDialogRef<ShowcaseDialogComponent>,
    private formBuilder: FormBuilder) { }

  dismiss() {
    this.ref.close();
  }
}
