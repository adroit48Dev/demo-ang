import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { BankdepositService } from "../bankdeposit.service";

@Component({
  selector: "ngx-bank-deposit-form",
  templateUrl: "./bank-deposit-form.component.html",
  styleUrls: ["./bank-deposit-form.component.scss"],
})
export class BankDepositFormComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private _bankservice: BankdepositService,
    private router: Router
  ) {}
  depositForm: FormGroup;
  submitted = false;
  postdata = {};

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      product_name: new FormControl("", Validators.required),
      product_detail: new FormControl("", Validators.required),
    });
  }

  get f() {
    return this.depositForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.depositForm.invalid) {
      return;
    }

    let formData = new FormData();
    let _Formdata = this.depositForm.value;

    // Form data
    Object.entries(_Formdata).forEach(([key, values]) => {
      this.postdata[key] = values;
    });

    return this._bankservice
      .saveproduct(this.postdata)
      .subscribe(
        (res) => {
          alert(res["message"]);
          this.depositForm.reset();
          this.router.navigate(["/pages/deposit/bank-deposit"]);
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

    //     alert(res['message']);
    //     this.depositForm.reset();
    //     this.router.navigate(['/pages/deposit/bank-deposit']);
    //   },
    //   err => {

    //     alert(err.json);
    //   });
  }
  onReset() {
    this.depositForm.reset();
  }
  ViewDeposit() {
    this.router.navigate(["pages/deposit/bank-deposit"]);
  }
}
