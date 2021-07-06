import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HelpersComponent } from '../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class BankregisterService {

  private headers = new HttpHeaders();
     constructor(private _http: HttpClient, private _helperComponent: HelpersComponent) { }

  private _bankserviceURL = "http://loadbalancer.danfishel.com/BankService/api/v1/";


  // Bank Register method
  bankRegisterMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');
    return this._http.post<any>(this._bankserviceURL + 'bankregister', formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // iduival bank data get method
  bankGet(id) {
    return this._http.get<any>(this._bankserviceURL + 'bank/' + id).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );

  }

  // all bank data get method
  allBanksGet() {

    return this._http.get<any>(this._bankserviceURL + 'allbanks')


    // return this._http.get<any>(this._bankserviceURL + 'allbanks', {
    //   headers: this.headers
    // }).pipe(retry(1),
    // catchError(this._helperComponent.handleError)
    // );

  }

  // bank data update method
  bankUpdate(id, formdata) {
    return this._http.put<any>(this._bankserviceURL + 'bankupdate/' + id, formdata, {
      headers: this.headers
    }).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // bank details create method
  bankDetailsCreate(formdata) {
    return this._http.post<any>(this._bankserviceURL + 'bankdetailscreation/', formdata, {
      headers: this.headers
    }).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // bankdetails get method
  bankDetailsGet(id) {
    return this._http.get<any>(this._bankserviceURL + 'bankdetails/' + id, {
      headers: this.headers
    }).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // all bank details get method
  allBankDetailsGet() {
    return this._http.get<any>(this._bankserviceURL + 'allbankdetails/', {
      headers: this.headers
    }).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // bank details update method
  bankDetailsUpdate(id, formdata) {
    return this._http.put<any>(this._bankserviceURL + 'bankdetailsupdate/' + id, formdata, {
      headers: this.headers
    }).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

}
