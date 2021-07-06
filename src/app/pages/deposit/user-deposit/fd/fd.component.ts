import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";
import { DepositService } from "../deposit.service";

@Component({
  selector: "ngx-fd",
  templateUrl: "./fd.component.html",
  styleUrls: ["./fd.component.scss"],
})
export class FdComponent implements OnInit {
  form: boolean = true;
  schemes: Boolean = false;
  detailedInfo: Boolean = false;
  preview: boolean = false;
  fdForm: FormGroup;

  // payment method
  selectedTransMethod: string;
  state: Boolean = false;

  postdata = {};
  schemahtml = [];
  Maturity_months = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _fdservice: DepositService
  ) {}
  submitted = false;

  ngOnInit(): void {
    this.fdForm = this.formBuilder.group({
      smonth: new FormControl("", Validators.required),
      year: new FormControl("", Validators.required),
      Amount: new FormControl(null, Validators.required),
      Nominee_name: new FormControl("", Validators.required),
      Nominee_type: new FormControl("", Validators.required),
      Return_pay_method: new FormControl("", Validators.required),
      paymentnumber: new FormControl("", Validators.required),
      User_account_number: new FormControl("", Validators.required),
    });
  }
  get f() {
    return this.fdForm.controls;
  }

  toSchemes() {
    this.submitted = true;

    let formData = new FormData();
    let _Formdata = this.fdForm.value;

    // store the form values
    Object.entries(_Formdata).forEach(([key, values]) => {
      this.postdata[key] = values;
    });

    var year = 0;
    var month = 0;
    var amount = 0;

    amount = _Formdata["Amount"];
    year = _Formdata["year"];
    month = _Formdata["smonth"];

    // calculate maturity month
    this.Maturity_months = Number(year * 12) + Number(month);
    this.postdata["Maturity_months"] = this.Maturity_months;

    // get suitable schemas
    return this._fdservice
      .fdRegisterMethod(amount, this.Maturity_months)
      .subscribe(
        (res) => {
          if (res.length > 0) {
            this.addschema(res);
          } else {
            alert("Please change your amount or month");
          }
        },
        (err) => {
          console.log(err.json);
          // this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {

    //     if (res.length > 0) {
    //       this.addschema(res);
    //     } else {
    //       alert("Please change your amount or month");
    //     }

    //   },
    //   err => {
    //     console.log(err.json);
    //   });
  }

  // store the schema to onelist
  addschema(schemavalue) {
    console.log(schemavalue);
    this.form = false;
    this.schemes = true;
    for (var i = 0; i <= schemavalue.length - 1; i++) {
      this.schemahtml.push([
        schemavalue[i]["scheme_name"],
        schemavalue[i]["interest"],
        schemavalue[i]["_id"],
        schemavalue[i]["min_amount"],
        schemavalue[i]["max_amount"],
      ]);
    }
    this.form = false;
    this.schemes = true;
  }

  toPreview(schemeid) {
    this.postdata["Scheme_id"] = schemeid;
    this.postdata["Deposit_type"] = "FD";
    this.postdata["User_type"] = "EXIT";
    this.postdata["User_ID"] = "";

    // this.getmaturity_amount();
    return this._fdservice
      .fd_amount_cal_Method(this.postdata)
      .subscribe(
        (res) => {
          this.getmaturity_amount(res);
        },
        (err) => {
          alert(err.json);
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {

    //     this.getmaturity_amount(res);
    //   },
    //   err => {
    //     alert(err.json)
    //   })
  }

  getmaturity_amount(amount) {
    this.postdata["maturity_interest_amount"] =
      amount["maturity_interest_amount"];
    this.postdata["Maturity_period"] = amount["Maturity_period"];
    this.postdata["interest"] = amount["interest"];
    this.postdata["Maturity_amount"] = amount["Maturity_amount"];
    // this.postdata['maturity_interest_amount'] = '5000';
    // this.postdata['Maturity_period'] = '12-02-2022';
    // this.postdata['interest'] = '6';
    // this.postdata['Maturity_amount'] = '50000';
    this.preview = true;
    this.schemes = false;
  }

  // payment method
  selectOption(eventVal) {
    console.log(eventVal);
    this.selectedTransMethod = eventVal;
    this.state = true;
  }

  // confirm fd and store the data
  confirmfd() {
    return this._fdservice
      .fd_confrim_Method(this.postdata)
      .subscribe(
        (res) => {
          alert(res["message"]);
          this.router.navigate(["/pages/deposit/user-deposit"]);
        },
        (err) => {
          alert(err.json);
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     alert(res['message']);
    //     this.router.navigate(['/pages/deposit/user-deposit']);
    //   },
    //   err => {
    //     alert(err.json);
    //   });
  }
}
