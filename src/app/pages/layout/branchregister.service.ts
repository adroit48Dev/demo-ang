import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HeadersHelperService } from '../../helpers/headersHelpers';
import { HelpersComponent } from '../../helpers/helpers.component';
import { BranchDetails } from './brancdetailsmodel';

@Injectable({
  providedIn: 'root'
})
export class BranchregisterService {

  private headers = new HttpHeaders();
  BranchData = []
     constructor(private _http: HttpClient, private _helperComponent: HelpersComponent) { }


  private _branchServiceURL = "http://loadbalancer.danfishel.com/BranchService/api/v1/";
  private _bankserviceURL = "http://loadbalancer.danfishel.com/BankService/api/v1/"


  all_bank_get() {
    return this._http.get<any>(this._bankserviceURL + 'allbanks').pipe(
      catchError(this._helperComponent.handleError))
  }

  // Bank Register method
  branchRegisterMethod(formData) {

    debugger
    return this._http.post<any>(this._branchServiceURL + 'branchdetails', formData)
  }


  // Branch Register method
  branchSpecificationRegisterMethod(formData, id) {

    return this._http.post<any>(this._branchServiceURL + 'branchdetailsupdate', formData)

  }

  // iduival branch data get method
  branchGet(id) {

    // return this._http.get("../../../assets/branch.json");
    return this._http.get<any>(this._branchServiceURL + 'branch/' + id)

  }

  // iduival branch spec data get method
  branchspecGet(id) {

    return this._http.get<any>(this._branchServiceURL + 'branchspec-details/' + id)

  }


  // all Branch data get method
  allBranchGet() {
    return this._http.get<any>(this._branchServiceURL + 'allbranch')
  }


  // all branch-spec data get method
  allBranchspecGet() {

    return this._http.get<any>(this._branchServiceURL + 'allbranchspec-details')
  }


  // Branch data update method
  branchUpdate(id, formdata) {
    return this._http.put<any>(this._branchServiceURL + 'branchdetailsupdate/' + id, formdata)
  }


}
