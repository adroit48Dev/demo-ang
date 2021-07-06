import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HelpersComponent } from '../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class MessagesettingsService {
  private headers = new HttpHeaders();

  constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }

  private _messageSettingsURL = "http://loadbalancer.danfishel.com/messageservice/api/v1/";

  // Create Message Method
  sendMessageMethod(formData) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");
    this.headers.append("Access-Control-Allow-Headers", "Origin");
    return this._http.post<any>(this._messageSettingsURL + 'msgsend', formData, { headers: this.headers }).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  saveMessageTemplateMethod(formData) {
    return this._http.post<any>(this._messageSettingsURL + 'msgsave', formData, { headers: this.headers }).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // Update Notification Method
  updateMessageTemplateMethod(id, formData) {
    return this._http.put<any>(this._messageSettingsURL + 'msgupd' + id, formData).pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // Get All Message Method
  getMessageMethod() {
    return this._http.get<any>(this._messageSettingsURL + 'msg').pipe(retry(1),
      catchError(this._helperComponent.handleError)
    );
  }

  // Delete Message By ID Method
  deleteMessageTemplateMethod(id) {
    return this._http.delete<any>(this._messageSettingsURL + 'delmsg' + id).pipe(retry(1),
    catchError(this._helperComponent.handleError)
  );
  }

  // Create Notification Method
  createNotificationMethod(formData) {
    return this._http.post<any>(this._messageSettingsURL + 'notify', formData).pipe(retry(1),
    catchError(this._helperComponent.handleError)
  );
  }

  // Update Notification Method
  updateNotificationMethod(id, formData) {
    return this._http.put<any>(this._messageSettingsURL + 'notupd' + id, formData).pipe(retry(1),
    catchError(this._helperComponent.handleError)
  );
  }

  // Delete Notificaton Method
  deleteNotificationMethod(id) {
    return this._http.delete<any>(this._messageSettingsURL + 'delnot' + id).pipe(retry(1),
    catchError(this._helperComponent.handleError)
  );
  }

}
