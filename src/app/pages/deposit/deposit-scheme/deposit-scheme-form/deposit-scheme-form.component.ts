import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { NgxSpinnerService } from "ngx-spinner";
import { DepositSchemeService } from "../../deposit-scheme.service";

@Component({
  selector: "ngx-deposit-scheme-form",
  templateUrl: "./deposit-scheme-form.component.html",
  styleUrls: ["./deposit-scheme-form.component.scss"],
})
export class DepositSchemeFormComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private _Schemeservice: DepositSchemeService,
    private router: Router
  ) {}

  schemeForm: FormGroup;
  submitted = false;
  postdata = {};

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  conditionid = [];
  productlist = [];

  ngOnInit(): void {
    this.schemeForm = this.formBuilder.group({
      scheme_name: new FormControl("", Validators.required),
      min_Period: new FormControl(null, Validators.required),
      max_Period: new FormControl(null, Validators.required),
      min_amount: new FormControl(null, Validators.required),
      max_amount: new FormControl(null, Validators.required),
      interest: new FormControl(null, Validators.required),
      scheme_period: new FormControl(null, Validators.required),
      deposittype: new FormControl("", Validators.required),
      selectedItems: new FormControl("", Validators.required),
      producttype: new FormControl("", Validators.required),
    });
    this.getconditionvalue();
    this.getproductvalue();

    this.dropdownSettings = {
      singleSelection: false,
      idField: "_id",
      textField: "Condition_name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  get f() {
    return this.schemeForm.controls;
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  getconditionvalue() {
    return this._Schemeservice
      .all_con_get()
      .subscribe(
        (res) => {
          this.dropdownList.push(res);
          console.log(this.dropdownList);
        },
        (err) => {
          alert(err.json);
          // this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });
    // .subscribe(
    //   res => {

    //     this.dropdownList.push(res);
    //     console.log(this.dropdownList);
    //   },
    //   err => {

    //     alert(err.json);
    //   });
  }

  getproductvalue() {
    return this._Schemeservice
      .all_product_get()
      .subscribe(
        (res) => {
          console.log(res, "321");
          this.productlist.push(res);
          console.log(this.productlist);
        },
        (err) => {
          alert(err.json);
          // this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });
    // .subscribe(
    //   (res) => {
    //     console.log(res, "321");
    //     this.productlist.push(res);
    //     console.log(this.productlist);
    //   },
    //   (err) => {
    //     alert(err.json);
    //   }
    // );
  }

  onSubmit() {
    this.submitted = true;

    if (this.schemeForm.invalid) {
      return;
    }

    let formData = new FormData();
    let _Formdata = this.schemeForm.value;

    // Form data
    Object.entries(_Formdata).forEach(([key, values]) => {
      this.postdata[key] = values;
    });

    for (var i = 0; i < _Formdata["selectedItems"].length; i++) {
      this.conditionid.push(_Formdata["selectedItems"][i]["_id"]);
    }
    this.postdata["conditionid"] = this.conditionid[0];
    console.log(this.postdata);
    return this._Schemeservice
      .schemaRegisterMethod(this.postdata)
      .subscribe(
        (res) => {
          alert(res["message"]);
          //     this.schemeForm.reset();
          //     this.router.navigate(["/pages/deposit/deposit-scheme"]);
        },
        (err) => {
          alert(err.json);
          // this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   (res) => {
    //     alert(res["message"]);
    //     this.schemeForm.reset();
    //     this.router.navigate(["/pages/deposit/deposit-scheme"]);
    //   },
    //   (err) => {
    //     alert(err.json);
    //   }
    // );
  }

  onReset() {
    this.schemeForm.reset();
  }
  viewScheme() {
    this.router.navigate(["pages/deposit/deposit-scheme"]);
  }
}
