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
import { HelpersComponent } from "../../../helpers/helpers.component";
import { ProductService } from "../product.service";

@Component({
  selector: "app-productdetails",
  templateUrl: "./accountdetails.component.html",
  styleUrls: ["./accountdetails.component.scss"],
})
export class AccountdetailsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _helperComponent: HelpersComponent,
    private spinner: NgxSpinnerService,
    config: NgbCarouselConfig,
    private authenticationService: AuthenticationService,
    private _productervice: ProductService
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
  Accountdetailsform: FormGroup;
  submitted = false;
  accountpostdata = {};
  branchnamelist = [];
  feenamelist = [];
  iternamelist = [];
  ngOnInit(): void {
    this.getbranchvalue();
    this.getintervalue();
    this.getfeevalue();
    this.Accountdetailsform = this.formBuilder.group({
      accountName: new FormControl("", [Validators.required]),
      accType: new FormControl("", [Validators.required]),
      branchName: new FormControl("", [Validators.required]),
      interestId: new FormControl("", [Validators.required]),
      feeId: new FormControl("", [Validators.required]),
      ruleId: new FormControl("", [Validators.required]),
      transPerDay: new FormControl("", [Validators.required]),
      transPerMonthByCard: new FormControl("", [Validators.required]),
      isChargable: new FormControl("", [Validators.required]),
      arbitaryFees: new FormControl("", [Validators.required]),
      minBalnce: new FormControl("", [Validators.required]),
    });
  }

  getbranchvalue() {
    return this._productervice
      .allBranch()
      .subscribe(
        (res) => {
          console.log(res, "321");
          this.branchnamelist.push(res);
        },
        (err) => {
          this._helperComponent.showToast("danger", err.json);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res, '321')
    //     this.branchnamelist.push(res)
    //   },
    //   err => {
    //     console.log("error");
    //     alert(err.json);
    //   });
  }

  getfeevalue() {
    return this._productervice
      .allfeeDetailsGet()
      .subscribe(
        (res) => {
          console.log(res, "321");
          this.feenamelist.push(res);
        },
        (err) => {
          this._helperComponent.showToast("danger", err.json);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res, '321')
    //     this.feenamelist.push(res)
    //   },
    //   err => {
    //     console.log("error");
    //     alert(err.json);
    //   });
  }

  getintervalue() {
    return this._productervice
      .allinterestDetailsGet()
      .subscribe(
        (res) => {
          console.log(res, "321");
          this.iternamelist.push(res);
        },
        (err) => {
          this._helperComponent.showToast("danger", err.json);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res, '321')
    //     this.iternamelist.push(res)
    //   },
    //   err => {
    //     console.log("error");
    //     alert(err.json);
    //   });
  }

  get f() {
    return this.Accountdetailsform.controls;
  }

  onReset() {
    this.Accountdetailsform.reset();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    if (this.Accountdetailsform.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.Accountdetailsform.value;

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.accountpostdata[key] = values;
    });
    this.accountpostdata["isActive"] = 0;
    this.accountpostdata["createdBy"] = JSON.parse(
      localStorage.getItem("Bank_Name")
    );
    console.log(this.accountpostdata);
    this._productervice
      .accountdetails(this.accountpostdata)
      .subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(["/pages/product/accountdetailsview"]);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res)
    //     this.router.navigate(['/pages/product/accountdetailsview']);
    //   },
    //   err => {
    //     alert(err)
    //     console.log(err.json)
    //   })
  }

  accountview() {
    this.router.navigate(["/pages/product/accountdetailsview"]);
  }
}
