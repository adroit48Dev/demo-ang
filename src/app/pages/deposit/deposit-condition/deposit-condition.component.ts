import { Component, OnInit } from "@angular/core";
import { DepositSchemeService } from "../deposit-scheme.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-deposit-condition",
  templateUrl: "./deposit-condition.component.html",
  styleUrls: ["./deposit-condition.component.scss"],
})
export class DepositConditionComponent implements OnInit {
  schemedata: any = [];

  constructor(
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private _depositservice: DepositSchemeService
  ) {}

  ngOnInit(): void {
    this._depositservice
      .all_con_get()
      .subscribe(
        (res) => {
          this.schemedata.push(res);
        },
        (err) => {
          // this._helperComponent.showToast("danger", err);
          console.log("test");
        }
      )
      .add(() => {
        this.spinner.hide();
      });
    //   .subscribe(res => {
    //       this.schemedata.push(res)

    // },
    //   err => {
    //    console.log("test")
    //   })
  }

  conid(id) {
    this.router.navigate(["update-deposit-condition", id], {
      relativeTo: this.route,
    });
  }
}
