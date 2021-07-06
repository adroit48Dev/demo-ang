import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class InterestDetailsService {

  private headers = new HttpHeaders();
     constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }


  private _interestdetailsserviceURL = "http://demobank.danfishel.com/interestservice/api/v1/";

  // interest Details method
  interestDetailsRegisterMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._interestdetailsserviceURL + 'intsave', formData, {
      headers: this.headers
    })
  }

  // interest Details get method
  interestDetailsGet(id) {
    return this._http.get("../../../assets/interestDetails.json")
    // return this._http.get<any>(this._interestdetailsserviceURL + 'int/' + id)

  }

  // all interest Details data get method
  allinterestDetailsGet() {
    return this._http.get("../../../assets/interestDetails.json");
    // return this._http.get<any>(this._interestdetailsserviceURL + 'intdet')
  }

  //interest Details data update method
  interestDetailsUpdateById(id, formdata) {
    return this._http.put<any>(this._interestdetailsserviceURL + 'interestupd/' + id, formdata, {
      headers: this.headers
    })
  }

  //interest Details data get by name method
  interestDetailsGetByName(name) {
    return this._http.get<any>(this._interestdetailsserviceURL + 'intn/' + name)
  }

}
