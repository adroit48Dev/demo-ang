import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HeadersHelperService } from '../../helpers/headersHelpers';
import { HelpersComponent } from '../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class AttendanceServicesService {

  private headers = new HttpHeaders();
     constructor(private _http: HttpClient, private _headers: HeadersHelperService, private _helperComponent: HelpersComponent) { }

  // private _empAttendancetURL = "http://demobank.danfishel.com/AttendanceService/api/v1/";
  private _empAttendancetURL = "http://loadbalancer.danfishel.com/AttendanceService/api/v1/";

  // Emp-Attendance Register method
  EmpAttendanceMethod(formData) {
    return this._http.post<any>(this._empAttendancetURL + 'employee-attendance', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }




  // iduival Emp Attendance spec data get method
  EmpDeductionGet(id) {

    return this._http.get<any>(this._empAttendancetURL + 'employeeattendance/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );


  }


  // all EmpDeduction data get method
  allEmpDeductionGet() {

    return this._http.get<any>(this._empAttendancetURL + 'alldeductions').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );

  }



  // all Branch data get method
  allEmpAttendanceGet() {

    return this._http.get<any>(this._empAttendancetURL + 'allemployeesattendance').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );

  }




  // Emp Attendance data update method
  EmpAttendanceUpdate(id, formdata) {
    return this._http.put<any>(this._empAttendancetURL + 'update-employeattendance/' + id, formdata).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );

  }

}
