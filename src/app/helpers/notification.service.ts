import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginUser } from '../auth/components/login/login-user';
import { HelpersComponent } from './helpers.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURL: string = 'http://tds.api.inoesis.com/';
  login: string = 'api/login';

     constructor(private http: HttpClient, private _helperComponent: HelpersComponent) { }

  public getUser(): Observable<HttpResponse<LoginUser[]>> {
    let headers = new HttpHeaders()
    headers = headers.set('content-type', 'application/json')
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get<LoginUser[]>(
      this.apiURL + this.login, { observe: 'response', 'headers': headers });
  }
}
