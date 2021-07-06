import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from "rxjs";
import { UpdateschemeService } from "../updatescheme.service";

@Component({
  selector: "ngx-update-deposit-scheme",
  templateUrl: "./update-deposit-scheme.component.html",
  styleUrls: ["./update-deposit-scheme.component.scss"],
})
export class UpdateDepositSchemeComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private _schemaservice: UpdateschemeService,
    private _route: ActivatedRoute,
    private router: Router
  ) {}

  private routeSub: Subscription;
  schemeForm: FormGroup;
  submitted = false;
  postdata = {};
  schemadata = [];
  schemaid;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  conditionid = [];
  productlist = [];
  selectedValue = "";
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

    this.routeSub = this._route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params["id"]); //log the value of id
      this.get_data(params["id"]);
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: "_id",
      textField: "Condition_name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.selectedItems.push({
      _id: "601a622e9c10c5b830ae7417",
      Condition_name: "1to5m",
      Condition_amount: "600",
      Condition_rate: "6",
      Condition_min_period: 11,
    });
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
    return this._schemaservice
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
    return this._schemaservice
      .all_product_get()
      .subscribe(
        (res) => {
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
    //   res => {

    //     this.productlist.push(res);
    //     console.log(this.productlist);
    //   },
    //   err => {

    //     alert(err.json);
    //   });
  }

  onSubmit() {
    this.submitted = true;
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
    this.postdata["conditionid"] = this.conditionid;

    return this._schemaservice
      .schemeupdate(this.schemaid, this.postdata)
      .subscribe(
        (res) => {
          alert(res);
          this.router.navigate(["/pages/deposit/deposit-scheme"]);
        },
        (err) => {
          alert(err);
          // this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {

    //     alert(res);
    //     this.router.navigate(['/pages/deposit/deposit-scheme']);
    //   },
    //   err => {

    //     alert(err);
    //   });
  }

  get_data(id) {
    this._schemaservice
      .schemeGet(id)
      .subscribe(
        (res) => {
          console.log(res);
          this.schemadata.push(res[0]);
          this.schemaid = res[0]["_id"];
        },
        (err) => {
          alert(err);
          // this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res);
    //     this.schemadata.push(res[0]);
    //     this.schemaid = res[0]['_id'];
    //   },
    //   err => {

    //     alert(err);
    //   }
    // );
    this.selectedValue = "sathish";
  }

  onReset() {
    this.schemeForm.reset();
  }
  viewScheme() {
    this.router.navigate(["pages/deposit/deposit-scheme"]);
  }
}
