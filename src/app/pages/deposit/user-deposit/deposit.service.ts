import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private headers = new HttpHeaders();
     constructor(private _http: HttpClient, private _helperComponent: HelpersComponent) { }

  private _depositServiceURL = "http://loadbalancer.danfishel.com/fdservice/";

  private handleError(errorReponse: HttpErrorResponse) {


    console.log('Client side error ', errorReponse.error.message)

    return throwError(errorReponse.error.message)

  }

  get_fd_rd_value() {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.get<any>(this._depositServiceURL + 'Useraccount/viewall', {
      headers: this.headers
    })
  }

  accountGet(id) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.get<any>(this._depositServiceURL + 'Useraccount/view/' + id, {
      headers: this.headers
    })
  }

  // get deposit scheme
  fdRegisterMethod(amount, Maturity_months) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.get<any>(this._depositServiceURL + 'getdepositscheme/view/' + Maturity_months + '/' + amount, {
      headers: this.headers
    })
  }

  // get maturity amount
  fd_amount_cal_Method(postdata) {
    console.log(postdata)
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.post<any>(this._depositServiceURL + 'getmaturityamount', postdata, {
      headers: this.headers
    })
  }

  // fd confirm
  fd_confrim_Method(postdata) {
    console.log(postdata)
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.post<any>(this._depositServiceURL + 'Useraccount', postdata, {
      headers: this.headers
    })
  }

  // rd confirm
  rd_confrim_Method(postdata) {
    console.log(postdata)
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.post<any>(this._depositServiceURL + 'Useraccount', postdata, {
      headers: this.headers
    })
  }
}
