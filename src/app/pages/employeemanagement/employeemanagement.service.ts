import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HeadersHelperService } from '../../helpers/headersHelpers';
import { HelpersComponent } from '../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeemanagementService {

  private headers = new HttpHeaders();
  constructor(private _http: HttpClient, private _helperComponent: HelpersComponent) { }


  private _empManagementURL = "http://loadbalancer.danfishel.com/EmployeeService/api/v1/";
  // private _empManagementURL = "http://0.0.0.0:4003/api/v1/";


  // Emp-Manage Register method
  EmpRegisterMethod(formData) {
    return this._http.post<any>(this._empManagementURL + 'employee-register', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;
  }
  // iduival branch spec data get method
  EmpGet(id) {
    // return this._http.get("../../../assets/jsonData/empMgmt/employeeDetails.json");
    return this._http.get<any>(this._empManagementURL + 'employee/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );

  }

  // all employee data get method
  allEmpGet() {
    return this._http.get<any>(this._empManagementURL + 'allemployees').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // Branch data update method
  EmpUpdate(id, formdata) {
    return this._http.put<any>(this._empManagementURL + 'update-employedetails/' + id, formdata).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;
  }


  // Emp-Transaction limit method
  createTransactionLimitMethod(formData) {

    return this._http.post<any>(this._empManagementURL + 'transaction-limit', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;
  }

  // Get Transaction limit method
  getAllTransactionLimit() {
    return this._http.get<any>(this._empManagementURL + 'alltransactionlimits').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }


  // Get Transaction limit method
  getTransactionLimit() {
    return this._http.post<any>(this._empManagementURL + 'transaction-limit', {}).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }
  // Branch data update method
  updateTransactionLimit(id, formdata) {
    return this._http.put<any>(this._empManagementURL + 'update-transaction-limit/' + id, formdata).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;
  }


  // iduival branch data get method
  branchGet(id) {

    return this._http.get<any>(this._empManagementURL + 'transaction-limit/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;

  }


  // all branch-spec data get method
  allBranchspecGet() {

    return this._http.get<any>(this._empManagementURL + 'alltransactionlimits').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;
  }


  // Emp-Transaction limit method
  createEmpRoleMethod(formData) {

    return this._http.post<any>(this._empManagementURL + 'employee-role', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;
  }

  // Branch data update method
  updateEmpRole(id, formdata) {
    return this._http.put<any>(this._empManagementURL + 'update-employeerole/' + id, formdata).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;
  }

  // all Emp Role data get method
  allEmpRole() {
    return this._http.get<any>(this._empManagementURL + 'allemployee_roles').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    )
  };
  //  Emp Role data get method
  EmpRoleBasedonID(id) {
    return this._http.get<any>(this._empManagementURL + 'getemployeerole/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    )
  };



  // all Emp Logs data get method
  allEmpLogs() {

    return this._http.get<any>(this._empManagementURL + 'employeelogs').pipe(retry(1),
      catchError(this._helperComponent.handleError))
  };


  // Emp Logs Search get method
  EmpLogsSearch(branchName, Month) {
    console.log(branchName, Month)
    let params = new HttpParams();
    params = params.append('month', Month);
    params = params.append('branchname', branchName);

    return this._http.get<any>(this._empManagementURL + 'employeelogssearch', { params: params }).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );;
  }
}
