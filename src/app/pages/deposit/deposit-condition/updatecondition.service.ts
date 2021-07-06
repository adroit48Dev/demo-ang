import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateconditionService {

  private headers = new HttpHeaders();
     constructor(private _http: HttpClient,  private _helperComponent: HelpersComponent) { }

  private _conServiceURL = "http://loadbalancer.danfishel.com/fdservice/";

  private handleError(errorReponse: HttpErrorResponse) {


    console.log('Client side error ', errorReponse.error.message)

    return throwError(errorReponse.error.message)

  }

  conGet(id: number) {

    return this._http.get<any>(this._conServiceURL + '/condition/view/' + id).pipe(catchError(this.handleError))

  }

  conditionupdate(conditionid, formdata) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.put<any>(this._conServiceURL + '/condition/update/' + conditionid, formdata, {
      headers: this.headers
    })
  }

}
