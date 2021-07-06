import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
     constructor(
    private _http: HttpClient,  private _helperComponent: HelpersComponent
  ) { }

  private _attendanceURL = "http://loadbalancer.danfishel.com/AttendanceService/api/v1/";

  // Create Employee Attendance Method
  createEmployeeAttendanceMethod(formData: any) {

    return this._http.post<any>(this._attendanceURL +
      'employee-attendance', formData)
  }

  // Get Employee Attendance Method
  getEmployeeAttendanceMethod(id: any) {

    return this._http.get<any>(this._attendanceURL +
      'employeeattendance/' + id)

  }

  // Get All Employee Attendance Method
  getAllEmployeeAttendanceMethod() {
    return this._http.get<any>(this._attendanceURL +
      'allemployeesattendance')
  }

  // Update Employee Attendance Method
  updateEmployeeAttendanceMethod(id: any, formdata: any) {

    return this._http.put<any>(this._attendanceURL +
      'update-employeattendance/' + id, formdata)
  }
}
