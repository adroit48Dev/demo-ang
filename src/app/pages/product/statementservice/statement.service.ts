import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  private headers = new HttpHeaders();
     constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }


  private _statementdetailsserviceURL = "http://demobank.danfishel.com/statementservice/api/v1/";

  // Daily User Account method
  dailyUserAccountMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._statementdetailsserviceURL + 'tdusersmt', formData, {
      headers: this.headers
    })
  }

  // monthly User Account method
  monthlyUserAccountMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._statementdetailsserviceURL + 'mdusersmt', formData, {
      headers: this.headers
    })
  }


  // General Ledger Daily Statement method
  generalLedgerDailyStatementMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._statementdetailsserviceURL + 'tdglsmt', formData, {
      headers: this.headers
    })
  }



  // General Ledger Monthly Statement method
  generalLedgerMonthlyStatementMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._statementdetailsserviceURL + 'mdglsmt', formData, {
      headers: this.headers
    })
  }



  // Daily Head Quater Statement method
  dailyHeadQuaterStatementMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._statementdetailsserviceURL + 'tdhqsmt', formData, {
      headers: this.headers
    })
  }


  // Monthly Head Quater Statement method
  monthlyHeadQuaterStatementMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._statementdetailsserviceURL + 'mdhqsmt', formData, {
      headers: this.headers
    })
  }


  // Daily Vault Statement method
  dailyVaultStatementMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._statementdetailsserviceURL + 'tdvlsmt', formData, {
      headers: this.headers
    })
  }

  // Monthly Vault Statement method
  monthlyVaultStatementMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._statementdetailsserviceURL + 'mdvlsmt', formData, {
      headers: this.headers
    })
  }


}
