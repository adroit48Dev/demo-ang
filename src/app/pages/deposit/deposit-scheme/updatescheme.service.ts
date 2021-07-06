import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateschemeService {
  private headers = new HttpHeaders();
     constructor(private _http: HttpClient, private _helperComponent: HelpersComponent) { }

  private _schServiceURL = "http://loadbalancer.danfishel.com/fdservice/";

  private handleError(errorReponse: HttpErrorResponse) {


    console.log('Client side error ', errorReponse.error.message)

    return throwError(errorReponse.error.message)

  }

  schemeGet(id: number) {

    return this._http.get<any>(this._schServiceURL + 'Depositscheme/view/' + id + '/').pipe(catchError(this.handleError))

  }

  schemeupdate(schemeid, formdata) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.put<any>(this._schServiceURL + '/Depositscheme/update/' + schemeid, formdata, {
      headers: this.headers
    })
  }

  all_con_get() {

    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.get<any>(this._schServiceURL + 'condition/viewall/', {
      headers: this.headers
    })
  }

  all_product_get() {

    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Origin');


    return this._http.get<any>(this._schServiceURL + 'branchdeposit/viewall', {
      headers: this.headers
    })
  }

}
