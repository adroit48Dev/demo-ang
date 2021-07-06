import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/components/login/authencation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from './helpers.component';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private authenticationService: AuthenticationService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available

    let currentUser = this.authenticationService.currentUserValue;
    console.log(currentUser);

    if (currentUser && currentUser?.token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Access-Token': `${currentUser?.token}`,
          'Access-Control-Allow-Headers': 'Origin',
          'Accept': 'application/json'
          // 'Access': `Token ${currentUser.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
