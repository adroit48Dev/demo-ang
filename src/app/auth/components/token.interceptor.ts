import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HeadersHelperService } from '../../helpers/headersHelpers';
import 'rxjs/add/operator/do'
import { retry } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../helpers/helpers.component';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  TOKEN = localStorage.getItem('ACCESS_TOKEN')
  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private _auth: HeadersHelperService) { }
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


  //   request = request.clone({
  //     setHeaders: {
  //       'Content-Type':'application/json',
  //       'Access-Token': this.TOKEN.replace(/^"(.*)"$/, '$1'),
  //       'Access-Control-Allow-Headers': 'Origin',
  //       'Accept': 'application/json'
  //     }
  //   });
  //   return next.handle(request).do((event: HttpEvent<any>) => {
  //       if (event instanceof HttpResponse) {
  //         // do stuff with response if you want
  //       }
  //     }, (err: any) => {
  //       if (err instanceof HttpErrorResponse) {
  //         if (err.status === 401) {
  //           // redirect to the login route
  //           // or show a modal
  //           localStorage.clear();
  //         }
  //       }
  //     });;
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercepted request ... ", this.TOKEN);

    // Clone the request to add the new header.
    // const authReq = req.clone({ headers: req.headers.set("Access-Token", this.TOKEN.replace(/^"(.*)"$/, '$1')) });
    const authreq = req.clone({
      setHeaders: {
        // 'Content-Type':'application/json',
        // 'Access-Token': this.TOKEN.replace(/^"(.*)"$/, '$1'),
        // 'Access-Control-Allow-Headers': 'Origin',
        // 'Accept': 'application/json'
      }
    });

    console.log("Sending request with new header now ...");

    //send the newly created request
    return next.handle(authreq).do((event: HttpEvent<any>) => {
      if (authreq.url.includes('http://localhost:4200/login')) {
        return next.handle(authreq);
      }
      // onError
      if (event instanceof HttpResponse) {
        console.log(event)
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log(err)
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal

          localStorage.clear();
        }
      }
    });;
  }
}