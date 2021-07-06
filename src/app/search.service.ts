import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // private headers = new HttpHeaders();
     constructor(private _http: HttpClient) { }

  // private _searchURL = "http://0.0.0.0:8080/SearchService/api/v1/";

  // // Search data Post method
  // searchgetMethod(formdata) {

}
