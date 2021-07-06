import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {
  private headers = new HttpHeaders();

     constructor(private _http: HttpClient, private _helperComponent: HelpersComponent) { }

  private _emailSettingsURL = "http://loadbalancer.danfishel.com/emailservice/api/v1/"

  // Send Email Method
  sendEmailMethod(formData) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");
    this.headers.append("Access-Control-Allow-Headers", "Origin");
    return this._http.post<any>(this._emailSettingsURL + 'send_mail', formData, { headers: this.headers })
  }

  // Create Email Template Method
  saveEmailTemplateMethod(formData) {
    return this._http.post<any>(this._emailSettingsURL + 'emailsave', formData, { headers: this.headers })
  }

  // Update Email by ID Method
  updateMessageTemplateMethod(id, formData) {

    return this._http.put<any>(this._emailSettingsURL + 'emailupd' + id, formData)
  }

  // Get All Email Method
  getAllEmailTemplateMethod() {

    return this._http.get<any>(this._emailSettingsURL + 'email')
  }

  // Delete Email by ID Method
  deleteEmailTemplateMethod(id) {

    return this._http.delete<any>(this._emailSettingsURL + 'delemail' + id)
  }


}
