import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HelpersComponent } from '../../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class DepositinfoService {

  private headers = new HttpHeaders();
     constructor(private _http: HttpClient, private _helperComponent: HelpersComponent) { }

  private _bankServiceURL = "http://loadbalancer.danfishel.com/fdservice/";

  private handleError(errorReponse: HttpErrorResponse) {


    console.log('Client side error ', errorReponse.error.message)

    return throwError(errorReponse.error.message)

  }

  accountGet(id) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.get<any>(this._bankServiceURL + 'Useraccount/view/' + id, {
      headers: this.headers
    })
  }
}
