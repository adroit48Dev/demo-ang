import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'ngx-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.scss']
})
export class UpdateSalaryComponent implements OnInit {

  salaryData: any;
  postData = {};
  salaryID: any;
  updateSalaryForm: FormGroup;
  submitted: boolean = false;
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router,
    private _salaryService: SalaryService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('Update-Salary')
    this.updateSalaryForm = this.formBuilder.group({
      empname: new FormControl("", [Validators.required]),
      assignedsalary: new FormControl("", [Validators.required]),
      deductions: new FormControl("", [Validators.required]),
      incentives: new FormControl("", [Validators.required]),
      noofleave: new FormControl("", [Validators.required])
    });
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.salaryID = id;
      console.log(this.salaryID)
      this.getSalary(id);
    }
  }

  getSalary(id) {
    this._salaryService.getEmployeeSalaryMethod(id)
      .subscribe(
        (res) => {
          console.log(res)
          this.salaryData = res[0];
          this.patchForm(this.salaryData)
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });

  }

  get f() {
    return this.updateSalaryForm.controls;
  }

  patchForm(res) {
    if (res) {
      const obj = {
        empname: res.emp_name,
        assignedsalary: res.assigned_salary,
        deductions: res.deductions,
        incentives: res.incentives,
        noofleave: res.no_of_leave,
      };
      this.updateSalaryForm.patchValue(obj);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateSalaryForm.invalid) {
      return;
    }
    Object.entries(this.updateSalaryForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    });

    this._salaryService.updateSalaryMethod(this.salaryID, this.postData).subscribe(
      res => {
        this.submitted = false;
        console.log(res);
        this.spinner.hide();
        this._helperComponent.showToast('success', res['message']);
        this.viewSalary();
      },
      err => {
        console.log(err);
        this.spinner.hide();
        this._helperComponent.showToast('danger', err['message']);
      }
    );
  }

  onReset() {
    this.updateSalaryForm.reset();
    this.submitted = false;
  }

  viewSalary() {
    this.router.navigate(['pages/attendanceservices/salary']);
  }

}
