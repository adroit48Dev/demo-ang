import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { EmployeemanagementService } from '../employeemanagement.service';

@Component({
  selector: 'ngx-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {
  employeesDetails: any;

  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private router: Router,
    private _route: ActivatedRoute,
    private _employeeManagementService: EmployeemanagementService) { }

  ngOnInit(): void {
    this.spinner.show();
    this._employeeManagementService.allEmpGet()
      .subscribe(
        (res) => {
          console.log(res)
          this.employeesDetails = res;
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }
  CreateEmployee() {
    this.router.navigate(['pages/employeemanagement/employeemanage']);
  }

  updateEmployee(id) {
    this.router.navigate(['pages/employeemanagement/update-employee', id]);
  }

}
