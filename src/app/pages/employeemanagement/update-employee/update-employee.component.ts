import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { _finally } from 'rxjs-compat/operator/finally';
import { AlertService } from '../../../helpers/alert.service';
import { CommonService } from '../../../helpers/common.service';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { EmployeemanagementService } from '../employeemanagement.service';


@Component({
  selector: 'ngx-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeUpdateForm: FormGroup;
  submitted = false;
  employeeId;
  EmployeeData = [];
  updatepostdata = []

  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _empservice: EmployeemanagementService,
    private _alertService: AlertService,
    private _commonService: CommonService,
    private router: Router) { }


  ngOnInit(): void {
    console.log('update-employee')
    this.employeeUpdateForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      mobileno1: new FormControl("", [Validators.required, Validators.pattern("[0-9]{10}$")]),
      mobileno2: new FormControl(null, [Validators.pattern("[0-9]{10}$")]),
      designation: new FormControl("", [Validators.required]),
      // localizationid: new FormControl("", [Validators.required, Validators.pattern("[0-9]*$")]),
      state: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      area: new FormControl("", [Validators.required]),
      epin: new FormControl(""),
      district: new FormControl("", [Validators.required]),
      pincode: new FormControl("", [Validators.required, Validators.required, Validators.pattern("[0-9]*$")]),
    });

    this._route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getEmplyoeeDetails(id);
      }
    });

  }

  getEmplyoeeDetails(id) {
    this.spinner.show();
    this._empservice.EmpGet(id)
      .subscribe(
        (res) => {
          console.log(res);
          if (this._commonService.isArray(res)) {
            if (res.length > 0) {
              const currentEmployee = res[0];
              this.EmployeeData.push(currentEmployee);
              this.employeeId = currentEmployee._id;
              this.employeeUpdateForm.patchValue({
                epin: currentEmployee.epin
              })
            }
          }
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

  get f() {
    return this.employeeUpdateForm.controls;
  }

  onReset() {
    this.employeeUpdateForm.reset();
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.employeeUpdateForm.invalid) {
      return;
    }
    this.spinner.show();

    const formData = this.employeeUpdateForm.value;
    this.spinner.show()
    // Form data
    Object.entries(formData).forEach(([key, values]) => {
      this.updatepostdata[key] = values;
    })
    return this._empservice.EmpUpdate(this.employeeId, formData)
      .subscribe(
        (res) => {
          this._helperComponent.showToast('success', 'Update Completed');
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });

  }

  viewEmployee() {
    this.router.navigate(['pages/employeemanagement/viewemployee']);

  }


}
