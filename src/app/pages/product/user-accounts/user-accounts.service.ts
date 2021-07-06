import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  private headers = new HttpHeaders();
     constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }


  private _userdetailsserviceURL = "http://loadbalancer.danfishel.com/useraccountservice/api/v1/";

  // User Details method
  userDetailsRegisterMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');
    return this._http.post<any>(this._userdetailsserviceURL + 'uaccsave', formData, {
      headers: this.headers
    });
  }

  // user Details get method
  userDetailsGet(id) {

    return this._http.get<any>(this._userdetailsserviceURL + 'baccaid/' + id)

  }

  // all user Details data get method
  alluserDetailsGet() {

    return this._http.get<any>(this._userdetailsserviceURL + 'uacc')
  }



  //user Details data update method
  userDetailsUpdate(id, formdata) {
    return this._http.put<any>(this._userdetailsserviceURL + 'uaccupd/' + id, formdata, {
      headers: this.headers
    })
  }

  // userAccountCharge Details method
  userAccountChargeDetailsRegisterMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._userdetailsserviceURL + 'ucharsave', formData, {
      headers: this.headers
    })

  }


  // all user account charge Details data get method
  allUserAccountChargeDetailsGet() {

    return this._http.get<any>(this._userdetailsserviceURL + 'uacccharges')
  }

  // userAccountCharge Details method
  userAccountInterestDetailsRegisterMethod(formData) {
    this.headers.append('Content-Type', 'multipart/form-data');
    this.headers.append('Accept', 'application/json');

    return this._http.post<any>(this._userdetailsserviceURL + 'uaccintsave', formData, {
      headers: this.headers
    })

  }

  //user Account Interest data update method
  userAccountInterestDetailsUpdate(id, formdata) {
    return this._http.put<any>(this._userdetailsserviceURL + 'uaccintupd/' + id, formdata, {
      headers: this.headers
    })
  }


  //All user account interest Details data get method
  alluserAccountInterestDetailsGet(id, formdata) {
    return this._http.get<any>(this._userdetailsserviceURL + 'usern/' + id, formdata)
  }


  //Depositing amount to own Account data update method
  DATOAUpdate(id, formdata) {
    return this._http.put<any>(this._userdetailsserviceURL + 'saccdep/' + id, formdata, {
      headers: this.headers
    })
  }

  //Withdrawing amount to own Account data update method
  WATOAUpdate(accountno, formdata) {
    return this._http.put<any>(this._userdetailsserviceURL + 'sacccri/' + accountno, formdata, {
      headers: this.headers
    })
  }


  //Transfering amount to other Account data update method
  TATOTAUpdate(accountno, formdata) {
    return this._http.put<any>(this._userdetailsserviceURL + 'sacctxn/' + accountno, formdata, {
      headers: this.headers
    })
  }

  // Charging particular  Details get method
  ChargingParticularDetailsGet(accountno) {

    return this._http.get<any>(this._userdetailsserviceURL + 'accchar/' + accountno)

  }

  // Charging All Account Details get method
  ChargingAllAccountDetailsGet() {

    return this._http.get<any>(this._userdetailsserviceURL + 'accchar/')

  }

  // Interest given to All Account Details get method
  IGTAADetailsGet() {

    return this._http.get<any>(this._userdetailsserviceURL + 'accint/')

  }

}
