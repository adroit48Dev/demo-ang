import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthenticationService } from "../../../auth/components/login/authencation.service";
import { AlertService } from "../../../helpers/alert.service";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { AccoundetailsService } from "../accountdetails/accoundetails.service";
import { ProductService } from "../product.service";

@Component({
  selector: "ngx-account-detailsupdate",
  templateUrl: "./account-detailsupdate.component.html",
  styleUrls: ["./account-detailsupdate.component.scss"],
})
export class AccountDetailsupdateComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private router: Router,
    private _accountService: AccoundetailsService,
    private _alertService: AlertService,
    private _productervice: ProductService
  ) {}
  Accountdetailsupdateform: FormGroup;
  submitted = false;
  Accountid;
  AccountData = [];
  accountupdatepostdata = {};
  branchnamelist = [];
  feenamelist = [];
  iternamelist = [];
  ngOnInit(): void {
    this.getbranchvalue();
    this.getintervalue();
    this.getfeevalue();
    this.Accountdetailsupdateform = this.formBuilder.group({
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

    this._route.paramMap.subscribe((params) => {
      const id = this._route.snapshot.paramMap.get("id");
      this.getAccountDetails(id);
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
    //   (res) => {
    //     console.log(res, "321");
    //     this.branchnamelist.push(res);
    //   },
    //   (err) => {
    //     console.log("error");
    //     alert(err.json);
    //   }
    // );
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
          //     console.log("error");
          alert(err.json);
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res) => {
    //     console.log(res, "321");
    //     this.feenamelist.push(res);
    //   },
    //   (err) => {
    //     console.log("error");
    //     alert(err.json);
    //   }
    // );
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
    //   (res) => {
    //     console.log(res, "321");
    //     this.iternamelist.push(res);
    //   },
    //   (err) => {
    //     console.log("error");
    //     alert(err.json);
    //   }
    // );
  }

  getAccountDetails(id) {
    this._productervice
      .accountDetailsGet(id)
      .subscribe(
        (res) => {
          console.log(res);
          this.AccountData.push(res);
          console.log(this.AccountData[0]["accType"]);
          this.Accountid = this.AccountData[0]["_id"];
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.AccountData.push(res);
    //     console.log(this.AccountData[0]["accType"]);
    //     this.Accountid = this.AccountData[0]["_id"];
    //   },
    //   (err) => console.log(err)
    // );
  }

  get f() {
    return this.Accountdetailsupdateform.controls;
  }

  onReset() {
    this.Accountdetailsupdateform.reset();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    if (this.Accountdetailsupdateform.invalid) {
      return;
    }

    let formData = new FormData();
    let _Formdata = this.Accountdetailsupdateform.value;

    console.log(this.Accountid);
    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.accountupdatepostdata[key] = values;
    });
    this.accountupdatepostdata["isActive"] = 0;
    this.accountupdatepostdata["createdBy"] = JSON.parse(
      localStorage.getItem("Bank_Name")
    );

    return this._productervice
      .accountUpdate(this.Accountid, this.accountupdatepostdata)
      .subscribe(
        (res) => {
          this.router.navigate(["pages/product/accountdetailsview"]);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res) => {
    //     this.router.navigate(["pages/product/accountdetailsview"]);
    //   },
    //   (err) => {
    //     alert(err);
    //     console.log(err);
    //   }
    // );
  }

  accountview() {
    this.router.navigate(["pages/product/accountdetailsview"]);
  }
}
