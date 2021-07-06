import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-email-service-dialog',
  templateUrl: './email-service-dialog.component.html',
  styleUrls: ['./email-service-dialog.component.scss']
})
export class EmailServiceDialogComponent implements OnInit {

  @Input() data: any;
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    protected ref: NbDialogRef<EmailServiceDialogComponent>,
    private formBuilder: FormBuilder
  ) { }
  emailForm: FormGroup
  ngOnInit(): void {
    console.log(this.data)
    this.emailForm = this.formBuilder.group({
      email_name: new FormControl('', Validators.required),
      email_details: new FormControl('', Validators.required)
    }
    )
  }

  dismiss() {
    this.ref.close();
  }

  onSubmit() {
    console.log(this.emailForm.value)
  }

}
