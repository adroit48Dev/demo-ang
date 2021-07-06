import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HeadersHelperService } from '../../helpers/headersHelpers';
import { HelpersComponent } from '../../helpers/helpers.component';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private headers = new HttpHeaders();
  postdata: any;

  constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }

  private _feeServiceURL = "http://loadbalancer.danfishel.com/feeservice/api/v1/";
  private _inteServiceURL = "http://loadbalancer.danfishel.com/interestservice/api/v1/";
  private _branchServiceURL = "http://loadbalancer.danfishel.com/BranchService/api/v1/";
  private _accountServiceURL = "http://loadbalancer.danfishel.com/bankaccountservice/api/v1/";
  private _userdetailsserviceURL = "http://loadbalancer.danfishel.com/useraccountservice/api/v1/";

  private handleError(errorReponse: HttpErrorResponse) {
    console.log('Client side error ', errorReponse.error.message)
    return throwError(errorReponse.error.message)
  }

  // all bank data get method
  allBranch() {
    return this._http.get<any>(this._branchServiceURL + 'allbranch').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }


  feedetails(formData) {
    return this._http.post<any>(this._feeServiceURL + 'feesave', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  allfeeDetailsGet() {
    return this._http.get<any>(this._feeServiceURL + 'fees').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  feetDetailsGet(id) {
    return this._http.get<any>(this._feeServiceURL + 'fee/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  feeUpdate(id, formdata) {
    console.log(formdata)
    return this._http.put<any>(this._feeServiceURL + 'feeupd/' + id, formdata).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  interdetails(formData) {
    return this._http.post<any>(this._inteServiceURL + 'intsave', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // all interest Details data get method
  allinterestDetailsGet() {
    return this._http.get<any>(this._inteServiceURL + 'intdet').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  interestDetailsGet(id) {
    return this._http.get<any>(this._inteServiceURL + 'int/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  interUpdate(id, formdata) {
    console.log(formdata)
    return this._http.put<any>(this._inteServiceURL + 'intupd/' + id, formdata).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  accountdetails(formData) {
    return this._http.post<any>(this._accountServiceURL + 'baccsave', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // all Account Details data get method
  allAccountDetailsGet() {
    return this._http.get<any>(this._accountServiceURL + 'bacc').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  accountDetailsGet(id) {
    return this._http.get<any>(this._accountServiceURL + 'baccaid/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  accountUpdate(id, formdata) {
    console.log(formdata)
    return this._http.put<any>(this._accountServiceURL + 'baccupd/' + id, formdata).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // all Account Details data get method
  userAccountDetailsGet() {
    return this._http.get<any>(this._userdetailsserviceURL + 'uacc').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

}
