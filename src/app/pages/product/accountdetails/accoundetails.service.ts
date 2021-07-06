import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class AccoundetailsService {

  private headers = new HttpHeaders();
     constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }


  private _acccountdetailsserviceURL = "http://demobank.danfishel.com/bankaccountservice/api/v1/";

  // Account Details method
  accountDetailsRegisterMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._acccountdetailsserviceURL + 'baccsave', formData, {
      headers: this.headers
    })
  }

  // Account Details get method
  accountDetailsGet(id) {
    return this._http.get("../../../assets/test.json");

    // return this._http.get<any>(this._acccountdetailsserviceURL + 'baccaid/' + id)

  }

  // all Account Details data get method
  allAccountDetailsGet() {
    return this._http.get("../../../assets/test.json");

    // return this._http.get<any>(this._acccountdetailsserviceURL + 'bacc')
  }

  //Account Details data update method
  accountDetailsUpdate(id, formdata) {
    return this._http.put<any>(this._acccountdetailsserviceURL + 'baccupd/' + id, formdata, {
      headers: this.headers
    })
  }


}
