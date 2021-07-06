import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HelpersComponent } from '../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class DepositSchemeService {

  postdata: any;

     constructor(private _http: HttpClient, private _helperComponent: HelpersComponent) { }
  private _schemaServiceURL = "http://loadbalancer.danfishel.com/fdservice/";

  private handleError(errorReponse: HttpErrorResponse) {


    console.log('Client side error ', errorReponse.error.message)

    return throwError(errorReponse.error.message)

  }

  // Bank Register method
  schemaRegisterMethod(formData) {


    return this._http.post<any>(this._schemaServiceURL + 'Depositscheme', formData)
  }

  Condition(formData) {


    return this._http.post<any>(this._schemaServiceURL + 'condition', formData)
  }

  all_con_get() {



    return this._http.get<any>(this._schemaServiceURL + 'condition/viewall/')
  }

  all_product_get() {



    return this._http.get<any>(this._schemaServiceURL + 'branchdeposit/viewall')
  }

  all_scheme_get() {



    return this._http.get<any>(this._schemaServiceURL + 'Depositscheme/viewall/')
  }

}
