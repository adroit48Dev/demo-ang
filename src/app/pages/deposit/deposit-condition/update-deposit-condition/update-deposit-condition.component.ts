import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { Subscription } from "rxjs";
import { UpdateconditionService } from "../updatecondition.service";

@Component({
  selector: "ngx-update-deposit-condition",
  templateUrl: "./update-deposit-condition.component.html",
  styleUrls: ["./update-deposit-condition.component.scss"],
})
export class UpdateDepositConditionComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    private _updateservice: UpdateconditionService
  ) {}
  private routeSub: Subscription;
  conditionForm: FormGroup;
  submitted = false;
  schemedata = [];
  conditiondata = [];
  conditionid;
  postdata = {};
  ngOnInit(): void {
    this.conditionForm = this.formBuilder.group({
      Condition_name: new FormControl("", Validators.required),
      Condition_amount: new FormControl(null, Validators.required),
      Condition_rate: new FormControl(null, Validators.required),
      Condition_min_period: new FormControl(null, Validators.required),
      Condition_max_period: new FormControl(null, Validators.required),
      Condition_detail: new FormControl("", Validators.required),
    });

    this.routeSub = this._route.params.subscribe((params) => {
      console.log(params); //log the entire params object
      console.log(params["id"]); //log the value of id
      this.get_data(params["id"]);
    });
  }

  get f() {
    return this.conditionForm.controls;
  }

  get_data(id) {
    this._updateservice
      .conGet(id)
      .subscribe(
        (res) => {
          this.conditiondata.push(res[0]);
          this.conditionid = res[0]["_id"];
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
    //     this.conditiondata.push(res[0]);
    //     this.conditionid = res[0]['_id'];
    //   },
    //   err => {

    //     alert(err);
    //   }
    // );
  }

  onSubmit() {
    this.submitted = true;

    if (this.conditionForm.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.conditionForm.value;

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.postdata[key] = values;
    });

    this.postdata["ischarge"] = 0;
    return this._updateservice
      .conditionupdate(this.conditionid, this.postdata)
      .subscribe(
        (res) => {
          alert(res);
          this.router.navigate(["/pages/deposit/deposit-condition"]);
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
    //     this.router.navigate(['/pages/deposit/deposit-condition']);
    //   },
    //   err => {

    //     alert(err);
    //   });
  }
  onReset() {
    this.conditionForm.reset();
  }
  viewCondition() {
    this.router.navigate(["pages/employeemanagement/viewemployee"]);
  }
}
