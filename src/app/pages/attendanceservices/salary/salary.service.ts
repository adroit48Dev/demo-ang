import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(
    private _http: HttpClient, private _helperComponent: HelpersComponent
  ) { }

  private _salaryURL = "http://loadbalancer.danfishel.com/AttendanceService/api/v1/";
  // create Special holiday method
  createSalaryMethod(formData: any) {

    return this._http.post<any>(this._salaryURL +
      'salary-calculation', formData)
  }

  // Get Employee salary data
  getEmployeeSalaryMethod(id: any) {
    return this._http.get<any>(this._salaryURL +
      'salarycalculation/' + id)

  }

  // all Holidaylist data get method
  getSalaryListMethod() {
    return this._http.get<any>(this._salaryURL +
      'allsalary')
  }

  // update SpecialHoliday method
  updateSalaryMethod(id: any, formdata: any) {

    return this._http.put<any>(this._salaryURL +
      'update-salarycalculation/' + id, formdata)
  }
}
