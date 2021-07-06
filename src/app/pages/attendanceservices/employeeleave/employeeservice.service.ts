import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HeadersHelperService } from '../../../helpers/headersHelpers';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private headers = new HttpHeaders();
  constructor(HelpersComponent, private _http: HttpClient,
    private _helperComponent: HelpersComponent) { }

  private _empAttendancetURL = "http://loadbalancer.danfishel.com/AttendanceService/api/v1/";

  // Emp-Attendance Register method
  EmpLeaveCreateMethod(formData) {
    return this._http.post<any>(this._empAttendancetURL + 'employeeleave', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // iduival Emp Leave spec data get method
  EmpLeaveGet(id) {
    return this._http.get<any>(this._empAttendancetURL + 'employeeleave/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    )
  }


  // all EmpDeduction data get method
  allEmpLeaveGet() {
    return this._http.get<any>(this._empAttendancetURL + 'employeeleavelist').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    )
  }

  // Emp Attendance data update method
  EmpLeaveUpdate(id, formdata) {
    return this._http.put<any>(this._empAttendancetURL + 'update-employeeleave/' + id, formdata)
      .pipe(retry(1), catchError(this._helperComponent.handleError))
  }
}
