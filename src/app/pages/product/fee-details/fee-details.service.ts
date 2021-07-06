import * as FileSaver from 'file-saver';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../../helpers/helpers.component';


@Injectable({
  providedIn: 'root'
})
export class FeeDetailsService {

  private headers = new HttpHeaders();
     constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }

  private _feedetailsserviceURL = "http://loadbalancer.danfishel.com/feeservice/api/v1/";

  // Fee Details method
  feeDetailsRegisterMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._feedetailsserviceURL + 'feesave', formData, {
      headers: this.headers
    });
  }

  // Fee Details get method
  feeDetailsGetById(id) {
    return this._http.get("../../../assets/feedetails.json");
    // return this._http.get<any>(this._feedetailsserviceURL + 'fee/' + id);

  }

  // all Fee Details data get method
  allFeeDetailsGet() {
    return this._http.get("../../../assets/feedetails.json");
    // return this._http.get<any>(this._feedetailsserviceURL + 'fees/');
  }


  //Fee Details data update method
  feeDetailsUpdateById(id, formdata) {
    return this._http.put<any>(this._feedetailsserviceURL + 'feeupd/' + id, formdata, {
      headers: this.headers
    });
  }


  //Fee Details data get by name method
  feeDetailsGetByName(name, formdata) {
    return this._http.get<any>(this._feedetailsserviceURL + 'feen/' + name, formdata);
  }

  //Fee Details data update by name method
  feeDetailsUpdateByName(name, formdata) {
    return this._http.put<any>(this._feedetailsserviceURL + 'feeupdn/' + name, formdata);
  }

}
