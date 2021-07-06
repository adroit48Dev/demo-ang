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
import { Observable, Subscription } from "rxjs";
import { combineAll } from "rxjs/operators";
import { AuthenticationService } from "../../../auth/components/login/authencation.service";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { BranchDetails } from "../brancdetailsmodel";
import { BranchregisterService } from "../branchregister.service";

@Component({
  selector: "ngx-branch-edit",
  templateUrl: "./branch-edit.component.html",
  styleUrls: ["./branch-edit.component.scss"],
})
export class BranchEditComponent implements OnInit {
  branchEditForm: FormGroup;
  BrachData: any = [];
  submitted: boolean = false;
  BranchID;
  updatepostdata = {};
  private routeSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _branchservice: BranchregisterService,
    private _route: ActivatedRoute,
    private _helperComponent: HelpersComponent,
    private spinner: NgxSpinnerService,
    config: NgbCarouselConfig,
    private authenticationService: AuthenticationService
  ) {
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.branchEditForm = this.formBuilder.group({
      address1: new FormControl("", [Validators.required]),
      address2: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      phoneno1: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}$"),
      ]),
      phoneno2: new FormControl("", [
        Validators.required,
        Validators.pattern("[0-9]{10}$"),
      ]),
      state: new FormControl("", [Validators.required]),
    });
    const id = this._route.snapshot.paramMap.get("id");
    this.getBranchDetails(id);
  }

  getBranchDetails(bankid) {
    this._branchservice
      .branchGet(bankid)
      .subscribe(
        (res) => {
          console.log(res);
          this.BrachData.push(res[0]);
          this.BranchID = res.branch_id;
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
    //     this.BrachData.push(res[0])
    //     this.BranchID = res.branch_id

    //   },
    //   err => {

    //     this._helperComponent.showToast('danger', err)
    //   }
    // )
  }

  get f() {
    return this.branchEditForm.controls;
  }

  onReset() {
    this.branchEditForm.reset();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid

    if (this.branchEditForm.invalid) {
      return;
    }
    this.spinner.show();
    let formData = new FormData();
    let _Formdata = this.branchEditForm.value;

    // Form data

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.updatepostdata[key] = values;
    });

    console.log(this.updatepostdata);
    return this._branchservice
      .branchUpdate(this.BranchID, this.updatepostdata)
      .subscribe(
        (res) => {
          this.spinner.hide();
          this._helperComponent.showToast("success", res["message"]);
          this.router.navigate(["/pages/layout/branchview"]);
        },
        (err) => {
          this.spinner.hide();
          this._helperComponent.showToast("danger", err["message"]);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     console.log(res);

    //     this.spinner.hide()
    //     this._helperComponent.showToast('success', res['message'])
    //     this.router.navigate(['/pages/layout/branchview']);

    //   },
    //   err => {
    //     this.spinner.hide()
    //     this._helperComponent.showToast('danger', err['message'])
    //   })
  }
  branchview() {
    this.router.navigate(["pages/layout/branchview"]);
  }
}
