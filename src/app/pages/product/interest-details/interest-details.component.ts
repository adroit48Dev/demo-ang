import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InterestDetailsService } from './interest-details.service';
import { ProductService } from '../product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-interest-details',
  templateUrl: './interest-details.component.html',
  styleUrls: ['./interest-details.component.scss']
})
export class InterestDetailsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private formBuilder: FormBuilder,
    private router: Router,
    private _interestservice: InterestDetailsService,
    private _route: ActivatedRoute, private _productervice: ProductService) { }

  interesetdetails: FormGroup;
  submitted = false;
  interestpostData = {};
  interestID;
  branchnamelist = [];
  seletedValue = "";
  get f() {
    return this.interesetdetails.controls;
  }

  ngOnInit(): void {
    this.getbranchvalue();
    this.interesetdetails = this.formBuilder.group({
      branchname: new FormControl("", [Validators.required]),
      productname: new FormControl("", [Validators.required]),
      interestname: new FormControl("", [Validators.required]),
      interestrate: new FormControl("", [Validators.required]),
      interestpercentage: new FormControl("", [Validators.required]),
      interestcondition: new FormControl("", [Validators.required]),
      interestconditionbasedontenureperiod: new FormControl("", [Validators.required]),
      interestdescription: new FormControl("", [Validators.required]),
    })
    // this._route.paramMap.subscribe(params => {
    //   const id = this._route.snapshot.paramMap.get('id');
    //   this.interestID = id
    //   this.getBranchDetails(id);
    // })
  }

  getbranchvalue() {
    this.spinner.show();
    return this._productervice.allBranch()
      .subscribe(
        (res) => {
          console.log(res, '321')
          this.branchnamelist.push(res)
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

  onReset() {
    this.interesetdetails.reset();
  }

  onSubmit() {
    this.submitted = true;
    this.spinner.show();
    // stop here if form is invalid
    if (this.interesetdetails.invalid) {
      return;
    }
    let formData = new FormData();
    let _Formdata = this.interesetdetails.value

    // Form data
    Object.entries(_Formdata).forEach(([key, values]) => {
      this.interestpostData[key] = values;
    })
    console.log(this.interestpostData);
    this._productervice.interdetails(this.interestpostData)
      .subscribe(
        (res) => {
          this.router.navigate(['/pages/product/interestdetailsview']);
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

}
