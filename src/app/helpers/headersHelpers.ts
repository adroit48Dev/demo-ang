import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeadersHelperService {
  TOKEN = localStorage.getItem('ACCESS_TOKEN')
  
  private headers = new HttpHeaders({'Content-Type':'application/json',
                                     'Access-Token': this.TOKEN.replace(/^"(.*)"$/, '$1'),
                                     'Access-Control-Allow-Headers': 'Origin',
                                     'Accept': 'application/json'});

  headerReturn()
  {
    
    return this.headers
  }
}