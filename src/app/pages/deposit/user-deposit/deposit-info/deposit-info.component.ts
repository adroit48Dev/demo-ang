import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { DepositinfoService } from "./depositinfo.service";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";

@Component({
  selector: "ngx-deposit-info",
  templateUrl: "./deposit-info.component.html",
  styleUrls: ["./deposit-info.component.scss"],
})
export class DepositInfoComponent implements OnInit {
  withdrawDetails: boolean = false;
  private routeSub: Subscription;
  infodata = [];
  infoid;

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _infoserive: DepositinfoService
  ) {}

  ngOnInit(): void {
    this.routeSub = this._route.params.subscribe((params) => {
      this.get_data(params["id"]);
      console.log(params["id"]);
    });
  }

  onWithdraw() {
    this.withdrawDetails = true;
  }

  get_data(id) {
    this._infoserive
      .accountGet(id)
      .subscribe(
        (res) => {
          this.infodata.push(res[0]);
              this.infoid=res[0]['_id']
              console.log(this.infodata)
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
    //   res=> {
    //     this.infodata.push(res[0]);
    //     this.infoid=res[0]['_id']
    //     console.log(this.infodata)
    //   },
    //       err => {

    //         alert(err)
    //   }
    // )
  }
}
