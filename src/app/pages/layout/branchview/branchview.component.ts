import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BranchregisterService } from "../branchregister.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";

interface BranchDetails {
  BranchName: string;
  BranchManagerName: string;
  email: string;
}

@Component({
  selector: "ngx-branchview",
  templateUrl: "./branchview.component.html",
  styleUrls: ["./branchview.component.scss"],
})
export class BranchviewComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _branchservice: BranchregisterService
  ) {}
  BranchData: any = [];
  closeResult = "";
  submitted = false;
  createOpt = true;
  branchUpdateForm: FormGroup;

  ngOnInit(): void {
    this._branchservice
      .allBranchGet()
      .subscribe(
        (res) => {
          if (res.length > 0) {
            console.log(res);
            this.BranchData = res;
            this.createOpt = false;
          } else {
            this.createOpt = true;
          }
        },
        (err) => {
          console.log("test");
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(res => {
    //     if(res.length >0 ){
    //       console.log(res);

    //       this.BranchData =  res
    //       this.createOpt = false
    //     }else{
    //       this.createOpt = true
    //     }

    // },
    //   err => {
    //    console.log("test")
    //   })
  }

  bracnchid(id) {
    this.router.navigate(["pages/layout/bankedit", id]);
  }

  Createbranch() {
    this.router.navigate(["pages/layout/branchregister"]);
  }
}
