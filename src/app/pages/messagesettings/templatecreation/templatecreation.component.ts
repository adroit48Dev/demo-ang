import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { MessagesettingsComponent } from '../messagesettings.component';
import { MessagesettingsService } from '../messagesettings.service';
import { ShowcaseDialogComponent } from '../showcase-dialog/showcase-dialog.component';

@Component({
  selector: 'ngx-templatecreation',
  templateUrl: './templatecreation.component.html',
  styleUrls: ['./templatecreation.component.scss']
})
export class TemplatecreationComponent implements OnInit {
  postData = {};
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _messageService: MessagesettingsService
  ) { }
  MessageTemplateForm: FormGroup;
  messageTemplate: any = [];
  submitted = false;

  ngOnInit(): void {
    this.MessageTemplateForm = this.formBuilder.group({
      message_name: new FormControl("", [Validators.required]),
      message_details: new FormControl("", [Validators.required])
    });
    this._messageService.getMessageMethod().subscribe(
      res => {
        console.log(res);
        this.messageTemplate = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  get f() {
    return this.MessageTemplateForm.controls;
  }

  onReset() {
    this.MessageTemplateForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.MessageTemplateForm.invalid) {
      return;
    }
    Object.entries(this.MessageTemplateForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });
    // Using Service to send data
    // this._messageService.saveMessageTemplateMethod(this.postData).subscribe(
    //   res=>console.log(res),
    //   err=> console.log(err)
    // )

    return this._messageService.saveMessageTemplateMethod(this.postData)
      .subscribe(
        (res) => {
          this._helperComponent.showToast('success', 'Message Sent');
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });

    this.MessageTemplateForm.reset();

    this.submitted = false;
  }

  open(templateData) {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        data: templateData
      }
    });
  }
}
