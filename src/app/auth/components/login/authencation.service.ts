import { Injectable, SkipSelf } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

import { JsonPipe } from '@angular/common';
import { LoginUser } from './login-user';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<LoginUser>;
  public currentUser: Observable<LoginUser>;
  private headers = new HttpHeaders();
  apiUrl: string = 'http://loadbalancer.danfishel.com/EmployeeService/api/v1/login';
  // apiUrl: string = 'http://0.0.0.0:4003/api/v1/login';
     constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private _http: HttpClient,
    private router: Router) {

    this.currentUserSubject = new BehaviorSubject<LoginUser>(

      JSON.parse(localStorage.getItem('currentUser'))
    )
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): LoginUser {

    return this.currentUserSubject.value;
  }

  login(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this._http.post<any>(this.apiUrl, {}, { headers }).pipe(
      map(
        userData => {
          localStorage.setItem('currentUser', JSON.stringify(userData));
          this.currentUserSubject.next(userData);
          return userData;
        }
      ), catchError(this._helperComponent.handleError)
    )

  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    localStorage.clear();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);

  }
}