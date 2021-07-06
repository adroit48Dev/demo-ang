import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NbThemeService } from "@nebular/theme";
import { data } from "jquery";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { FeeDetailsService } from "../fee-details/fee-details.service";
import { ProductService } from "../product.service";

@Component({
  selector: "ngx-fee-detailsupdate",
  templateUrl: "./fee-detailsupdate.component.html",
  styleUrls: ["./fee-detailsupdate.component.scss"],
})
export class FeeDetailsupdateComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _feeservice: FeeDetailsService,
    private _route: ActivatedRoute,
    private _productervice: ProductService
  ) {}
  feedetailsupdate: FormGroup;
  submitted = false;
  feeData = [];
  feeID;
  branchnamelist = [];
  feeupdatepostdata = {};
  get f() {
    return this.feedetailsupdate.controls;
  }

  ngOnInit(): void {
    this.feedetailsupdate = this.formBuilder.group({
      branchname: new FormControl("", [Validators.required]),
      productname: new FormControl("", [Validators.required]),
      feename: new FormControl("", [Validators.required]),
      feerate: new FormControl("", [Validators.required]),
      feeinterest: new FormControl("", [Validators.required]),
      feecondition: new FormControl("", [Validators.required]),
      feedescription: new FormControl("", [Validators.required]),
    });

    this._route.paramMap.subscribe((params) => {
      const id = this._route.snapshot.paramMap.get("id");
      this.feeID = id;

      this.getBranchDetails(id);
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
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res,'321')
    //     this.branchnamelist.push(res)
    //   },
    //   err => {
    //     console.log("error");
    //     alert(err.json);
    //   });
  }

  getBranchDetails(feeid) {
    this._productervice
      .feetDetailsGet(feeid)
      .subscribe(
        (res) => {
          this.feeData = res["fee Detail by id "];
          console.log(this.feeData, "sa");
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res=> {

    //     this.feeData = res['fee Detail by id '];
    //     console.log(this.feeData,'sa')
    //   },
    //       err => {
    //         alert(err)
    //         console.log(err)
    //   }
    // )
  }

  onReset() {
    this.feedetailsupdate.reset();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    if (this.feedetailsupdate.invalid) {
      return;
    }

    let formData = new FormData();
    let _Formdata = this.feedetailsupdate.value;

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.feeupdatepostdata[key] = values;
    });
    this.feeupdatepostdata["is_active"] = 0;
    return this._productervice
      .feeUpdate(this.feeID, this.feeupdatepostdata)
      .subscribe(
        (res) => {
          this.router.navigate(["pages/product/feedetailsview"]);
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    //  .subscribe(
    //     res => {

    //       this.router.navigate(['pages/product/feedetailsview'])

    //     },
    //     err => {

    //       alert(err);
    //       console.log(err);
    //     });
  }

  feeview() {
    this.router.navigate(["pages/product/feedetailsview"]);
  }
}
