import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class DeductionsService {

     constructor(
    private _http: HttpClient, private _helperComponent: HelpersComponent
  ) { }

  private _deductionsURL = "http://loadbalancer.danfishel.com/AttendanceService/api/v1/";

  // Create Employee Deductions method
  createEmployeeDeductions(formData: any) {

    return this._http.post<any>(this._deductionsURL +
      'employee-deductions', formData)
  }

  // Employee Deductions Details Get By ID method
  getEmployeeDeductionsbyid(id: any) {

    return this._http.get<any>(this._deductionsURL +
      'employeededuction/' + id)

  }

  // Get Employee Deductions List Method
  getEmployeeDeductionsList() {
    return this._http.get<any>(this._deductionsURL +
      'alldeductions')
  }

  // Update Employee Deductions Method
  updateEmployeeDeductions(id: any, formdata: any) {

    return this._http.put<any>(this._deductionsURL +
      'update-employeedeductions/' + id, formdata)
  }
}
