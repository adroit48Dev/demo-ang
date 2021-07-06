import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "ngx-fee-details",
  templateUrl: "./fee-details.component.html",
  styleUrls: ["./fee-details.component.scss"],
})
export class FeeDetailsComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _helperComponent: HelpersComponent,
    private _productervice: ProductService
  ) {}
  feedetails: FormGroup;
  submitted = false;
  feepostdata = {};
  branchnamelist = [];
  seletedValue;

  get f() {
    return this.feedetails.controls;
  }

  ngOnInit(): void {
    this.seletedValue = 0;

    this.feedetails = this.formBuilder.group({
      branchname: new FormControl("", [Validators.required]),
      productname: new FormControl("", [Validators.required]),
      feename: new FormControl("", [Validators.required]),
      feerate: new FormControl("", [Validators.required]),
      feeinterest: new FormControl("", [Validators.required]),
      feecondition: new FormControl("", [Validators.required]),
      feedescription: new FormControl("", [Validators.required]),
    });

    this.getbranchvalue();
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

  onReset() {
    this.feedetails.reset();
  }

  onSubmit() {
    this.spinner.show();
    this.submitted = true;
    // stop here if form is invalid

    if (this.feedetails.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.feedetails.value;

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.feepostdata[key] = values;
    });
    console.log(this.feepostdata);
    this._productervice
      .feedetails(this.feepostdata)
      // .subscribe(
      //   res => {
      //     console.log(res)
      //     this._helperComponent.showToast('success', res['message'])
      //     this.feedetailsview();
      //   },
      //   err => {
      //     alert(err)
      //   })

      .subscribe(
        (res) => {
          console.log(res);
          this._helperComponent.showToast("success", res["message"]);
          this.feedetailsview();
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });
  }

  feedetailsview() {
    this.router.navigate(["pages/product/feedetailsview"]);
  }
}
