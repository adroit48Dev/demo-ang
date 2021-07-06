import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BankregisterService } from '../../../pages/layout/bankregister.service';
// Import library module
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { AlertService } from '../../../helpers/alert.service';
import { HelpersComponent } from '../../../helpers/helpers.component';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [NgbCarouselConfig]
})
export class RegisterComponent implements OnInit {

  constructor
    (private _alertService: AlertService,
      config: NgbCarouselConfig,
      private formBuilder: FormBuilder,
      private _bankservice: BankregisterService,
      private spinner: NgxSpinnerService,
      private _helperComponent: HelpersComponent
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  bankRegisterForm: FormGroup;
  submitted = false;
  status = false;
  postdata = {};

  ngOnInit(): void {
    console.log('Register')
    // this.spinner.show()
    this.bankRegisterForm = this.formBuilder.group({
      bankname: new FormControl("", [Validators.required]),
      pannumber: new FormControl("", [Validators.required]),
      licensenumber: new FormControl("", [Validators.required]),
      mobileno: new FormControl("", [Validators.required, Validators.pattern("[0-9 ]{10}$")]),
      ssinumber: new FormControl("", [Validators.required]),
      gstnumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      tinnumber: new FormControl("", [Validators.required]),
      registeredaccountid: new FormControl("", [Validators.required]),
      acceptform: new FormControl("", [Validators.required]),
    })

  }
  changeStatus() {
    this.status = true
  }

  get f() {
    return this.bankRegisterForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.bankRegisterForm.invalid) {
      return;
    }

    this.spinner.show();
    let formData = new FormData();
    let bankRegisterFormData = this.bankRegisterForm.value;

    // Form data
    Object.entries(bankRegisterFormData).forEach(([key, values]) => {
      this.postdata[key] = values
    })
    return this._bankservice.bankRegisterMethod(this.postdata)
      .subscribe(
        (res) => {
          this._helperComponent.showToast('success', 'Registration Completed');
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

}
