import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from '../../../helpers/common.service';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { InterestDetailsService } from '../interest-details/interest-details.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'ngx-interest-detailsupdate',
  templateUrl: './interest-detailsupdate.component.html',
  styleUrls: ['./interest-detailsupdate.component.scss']
})
export class InterestDetailsupdateComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _intserivce: InterestDetailsService,
    private _commonService: CommonService,
    private router: Router, private _productervice: ProductService) { }

  interesetdetailsupdate: FormGroup;
  submitted = false;
  interestData: any;
  interestID: any;
  branchnamelist = [];
  seletedValue = "";
  interestpostdata = {};

  ngOnInit(): void {
    console.log('ngx-interest-detailsupdate')
    this.getbranchvalue();
    this.interesetdetailsupdate = this.formBuilder.group({
      branchname: new FormControl("", [Validators.required]),
      productname: new FormControl("", [Validators.required]),
      interestname: new FormControl("", [Validators.required]),
      interestrate: new FormControl("", [Validators.required]),
      interestpercentage: new FormControl("", [Validators.required]),
      interestcondition: new FormControl("", [Validators.required]),
      interestconditionbasedontenureperiod: new FormControl("", [Validators.required]),
      interestdescription: new FormControl("", [Validators.required]),
    })

    this._route.paramMap.subscribe(params => {
      const id = this._route.snapshot.paramMap.get('id');
      this.interestID = id
      this.getInterestDetail(id);
    })
  }

  get f() {
    return this.interesetdetailsupdate.controls;
  }


  getbranchvalue() {
    this.spinner.show();
    return this._productervice.allBranch()
      .subscribe(
        (res) => {
          console.log(res, '321')
          // this.branchnamelist.push(res)
          this.showDataInDatatable(res)
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }


  getInterestDetail(intid) {

    this._productervice.interestDetailsGet(intid)
      .subscribe(
        (res) => {
          console.log(res);
          if (this._commonService.isArray(res)) {
            if (res.length > 0) {
              this.interestData = res[0];
              this.seletedValue = this.interestData?.branchname;
            }
          }
          // this.interestData.push(res[0])
          // this.BranchID = res[0].bankid
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });

  }

  onReset() {
    this.interesetdetailsupdate.reset();
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid

    if (this.interesetdetailsupdate.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.interesetdetailsupdate.value

    Object.entries(_Formdata).forEach(([key, values]) => {
      this.interestpostdata[key] = values
    });

    return this._productervice.interUpdate(this.interestID, this.interestpostdata)
      .subscribe(
        (res) => {
          this.router.navigate(['pages/product/interestdetailsview'])
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });

  }

  interestview() {
    this.router.navigate(['pages/product/interestdetailsview'])
  }

  /**
   * This method is used to refresh data in datatable
   */
  showDataInDatatable(response) {
    this.branchnamelist = [];
    for (const res of response) {
      this.branchnamelist = [...this.branchnamelist, res];
    }
  }
}
