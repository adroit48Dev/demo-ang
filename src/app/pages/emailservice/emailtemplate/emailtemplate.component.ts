import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { EmailServiceComponent } from "../emailservice.component";
import { EmailserviceService } from "../emailservice.service";
import { NbDialogService } from "@nebular/theme";
import { EmailServiceDialogComponent } from "../email-service-dialog/email-service-dialog.component";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";

@Component({
  selector: "ngx-emailtemplate",
  templateUrl: "./emailtemplate.component.html",
  styleUrls: ["./emailtemplate.component.scss"],
})
export class EmailTemplateComponent implements OnInit {
  postData = {};
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private dialogService: NbDialogService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _emailService: EmailserviceService
  ) {}
  EmailForm: FormGroup;
  emailTemplates: any = [];
  submitted = false;

  ngOnInit(): void {
    this.EmailForm = this.formBuilder.group({
      email_name: new FormControl("", [Validators.required]),
      email_details: new FormControl("", [Validators.required]),
    });

    this._emailService
      .getAllEmailTemplateMethod()
      .subscribe(
        (res) => {
          console.log(res);
          this.emailTemplates = res;
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //     res => {
    //       console.log(res)
    //       this.emailTemplates = res;
    //     }
    //   )
  }

  get f() {
    return this.EmailForm.controls;
  }

  onReset() {
    this.EmailForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.EmailForm.invalid) {
      return;
    }

    Object.entries(this.EmailForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    // Using Service to post data
    this._emailService
      .saveEmailTemplateMethod(this.postData)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //     res => console.log(res),
    //     err => console.log(err)
    //   );

    this.EmailForm.reset();
    this.submitted = false;
  }

  open(templateData) {
    this.dialogService.open(EmailServiceDialogComponent, {
      context: {
        data: templateData,
      },
    });
  }
}
