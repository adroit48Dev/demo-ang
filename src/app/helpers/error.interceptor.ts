import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../auth/components/login/authencation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from './helpers.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private authenticationService: AuthenticationService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((err) => {
        console.log(err.status);

        if (err.status == 403 || err.status == 0 || err.status == 400) {
          // auto logout if 401 response returned from api
          // this.authenticationService.logout();

          // location.reload(true);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
