import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HeadersHelperService } from '../../../helpers/headersHelpers';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class LeavepolicyService {

  private headers = new HttpHeaders();
     constructor(private _helperComponent: HelpersComponent, private _http: HttpClient) { }

  // private _empAttendancetURL = "http://demobank.danfishel.com/AttendanceService/api/v1/";
  private _empAttendancetURL = "http://loadbalancer.danfishel.com/AttendanceService/api/v1/";

  // Emp-Leave Policy Register method
  EmpLeavePolicyeMethod(formData) {
    return this._http.post<any>(this._empAttendancetURL + 'leavepolicy', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }




  // iduival Emp LeavePolicy spec data get method
  EmpLeavePolicyGet(id) {

    return this._http.get<any>(this._empAttendancetURL + 'leavepolicy/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );


  }


  // all LeavePolicy data get method
  allLeavePolicyGet() {

    return this._http.get<any>(this._empAttendancetURL + 'leavepolicylist').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );

  }



  // LeavePolicy get method
  LeavePolicyGet() {

    return this._http.get<any>(this._empAttendancetURL + 'allemployeesattendance').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );

  }




  // Emp LeavePolicy data update method
  EmpLeavePolicyUpdate(id, formdata) {
    return this._http.put<any>(this._empAttendancetURL + 'update-leavepolicy/' + id, formdata).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );

  }
}
