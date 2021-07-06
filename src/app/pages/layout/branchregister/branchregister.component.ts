import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "../../../auth/components/login/authencation.service";
import { HeadersHelperService } from "../../../helpers/headersHelpers";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { BranchregisterService } from "../branchregister.service";

@Component({
  selector: "ngx-branchregister",
  templateUrl: "./branchregister.component.html",
  styleUrls: ["./branchregister.component.scss"],
})
export class BranchregisterComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private _branchservice: BranchregisterService,
    private router: Router,
    config: NgbCarouselConfig,
    private authenticationService: AuthenticationService
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  branchRegisterForm: FormGroup;
  branchDetailsForm: FormGroup;
  submitted = false;
  bdSubmit = false;
  NextBtn = false;
  banknamelist = [];
  branchpostdata = {};
  branchpostextradata = {};
  seletedValue;
  bank_name = "";
  branchid = "";

  ngOnInit(): void {
    this.getbankvalue();
    this.seletedValue = 0;
    this.branchRegisterForm = this.formBuilder.group({
      bankid: new FormControl("", [Validators.required]),
      branchname: new FormControl("", [Validators.required]),
      address1: new FormControl("", [Validators.required]),
      address2: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      phoneno1: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}$"),
      ]),
      phoneno2: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}$"),
      ]),
      state: new FormControl("", [Validators.required]),
    });

    this.branchDetailsForm = this.formBuilder.group({
      ifsccode: new FormControl("", [Validators.required]),
      micrcode: new FormControl("", [Validators.required]),
      vaultid: new FormControl("", [Validators.required]),
      branchid: new FormControl("", [Validators.required]),
      specid: new FormControl("", [Validators.required]),
      settingid: new FormControl("", [Validators.required]),
    });
    this.bank_name = JSON.parse(localStorage.getItem("Bank_Name"));
  }

  getbankvalue() {
    this.spinner.show();
    return this._branchservice
      .all_bank_get()
      .subscribe(
        (res) => {
          console.log(res, "321");
          this.banknamelist.push(res);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //     (res) => {
    //       console.log(res, '321')
    //       this.banknamelist.push(res)
    //     },
    //     (err) => {
    //       this._helperComponent.showToast('danger', err);
    //     }).
    //   add(() => {
    //     this.spinner.hide();
    //   });
  }

  get f() {
    return this.branchRegisterForm.controls;
  }
  get bd() {
    return this.branchDetailsForm.controls;
  }
  onReset() {
    this.branchRegisterForm.reset();
  }

  onBranchSubmit() {
    this.bdSubmit = true;

    // stop here if form is invalid
    if (this.branchDetailsForm.invalid) {
      return;
    }

    let formData = new FormData();
    let _Formdata = this.branchRegisterForm.value;
    this.spinner.show();
    // Form data
    Object.entries(_Formdata).forEach(([key, values]) => {
      this.branchpostextradata[key] = values;
    });

    this._branchservice
      .branchUpdate(this.branchid, this.branchpostextradata)
      .subscribe(
        (res) => {
          console.log(res + "done");
          this.spinner.hide();
          this.router.navigate(["/pages/layout/branchview"]);
        },
        (err) => {
          this.spinner.hide();
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {

    //     console.log(res + 'done')

    //     this.spinner.hide()

    //     this.router.navigate(['/pages/layout/branchview']);
    //   },
    //   err => {
    //     this.spinner.hide()
    //   })
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    if (this.branchRegisterForm.invalid) {
      return;
    }
    this.spinner.show();
    let formData = new FormData();
    let _Formdata = this.branchRegisterForm.value;

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.branchpostdata[key] = values;
    });

    this._branchservice
      .branchRegisterMethod(this.branchpostdata)
      .subscribe(
        (res) => {
          this.spinner.hide();
          if (res[1]["statuscode"] == 200) {
            this._helperComponent.showToast("success", res["message"]);
            this.NextBtn = true;
            this.branchRegisterForm.disable();
            this.branchid = res[0]["BranchId"];
          }
        },
        (err) => {
          this.spinner.hide();
          this._helperComponent.showToast("danger", err["message"]);
          this.NextBtn = false;
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     this.spinner.hide()

    //     if (res[1]['statuscode'] == 200) {
    //       this._helperComponent.showToast('success', res['message'])
    //       this.NextBtn = true;
    //       this.branchRegisterForm.disable();
    //       this.branchid = res[0]['BranchId'];
    //     }
    //   },
    //   err => {
    //     this.spinner.hide()
    //     this._helperComponent.showToast('danger', err['message'])
    //     this.NextBtn = false;

    //   })
  }

  branchview() {
    this.router.navigate(["/pages/layout/branchview"]);
  }
}
