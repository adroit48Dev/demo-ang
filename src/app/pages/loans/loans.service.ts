import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { MethodCall } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable, throwError } from "rxjs";
import { HelpersComponent } from "../../helpers/helpers.component";

@Injectable({
  providedIn: "root",
})
export class LoansService {
  private headers = new HttpHeaders();
  postdata: any;

  constructor(private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }
  private _loansServiceURL = "http://demobank.danfishel.com/api/v1/";

  private handleError(errorReponse: HttpErrorResponse) {
    console.log("Client side error ", errorReponse.error.message);

    return throwError(errorReponse.error.message);
  }

  // Bank Register method
  createLoanMethod(formData) {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");
    this.headers.append("Access-Control-Allow-Headers", "Origin");
    return this._http.post<any>(
      this._loansServiceURL + "createloanproduct",
      formData,
      {
        headers: this.headers,
      }
    );
  }

  getLoanMethod(id) {
    return this._http.get<any>(this._loansServiceURL + "getloan/" + id);
  }

  getAllLoanMethod() {
    return this._http.get("../../../assets/jsonData/loanData/loanDetails.json");

    // return this._http.get<any>(this._loansServiceURL + "loanslist");
  }

  createLoanAccountMethod(formData) {
    return this._http.post<any>(
      this._loansServiceURL + "createloanaccount",
      formData,
      {
        headers: this.headers,
      }
    );
  }

  getLoanAccountMethod(id) {
    return this._http.get<any>(this._loansServiceURL + "getloanaccount/" + id);
  }

  getAllLoanAccountListMethod() {
    return this._http.get("../../../assets/jsonData/loanData/loanAccount.json");
    // return this._http.get<any>(this._loansServiceURL + "loansacclist");
  }

  getLoanRepaymentMethod(accno) {
    return this._http.get<any>(
      this._loansServiceURL + "getloanrepayment/" + accno
    );
  }

  saveLoanRepaymentMethod(accno) {
    return this._http.get<any>(
      this._loansServiceURL + "saveloanrepayment/" + accno
    );
  }

  getLoanPrepaymentMethod() {
    return this._http.get("../../../assets/jsonData/loanData/prePaymentClosure.json")
    // return this._http.get<any>(
    //   this._loansServiceURL + "getprepayment" 
    // );
  }

  saveLoanPrepaymentMethod(data) {
    return this._http.post<any>(
      this._loansServiceURL + "getprepayment/",
      data,
      {
        headers: this.headers,
      }
    );
  }

  getLoanRepayListMethod() {
    return this._http.get("../../../assets/jsonData/loanData/loanRepayment.json");
    // return this._http.get<any>(this._loansServiceURL + "loanrepaylist");
  }

  loanAmountCalculationMethod(id) {
    return this._http.get<any>(this._loansServiceURL + "loanamountcal/" + id);
  }

  loanApprovalMethod(id) {
    return this._http.get<any>(this._loansServiceURL + "loanapproval/" + id);
  }

  dualPaymentListMethod() {
    return this._http.get("../../../assets/jsonData/loanData/loanPaymentDues.json");
    // return this._http.get<any>(this._loansServiceURL + "duepaymentlist/");
  }

  dualPaymentaccnogetMethod(accno) {
    return this._http.get<any>(this._loansServiceURL + "duepayment/" + accno);
  }
  dualPaymentUpdateListMethod(accno, formdata) {
    return this._http.post<any>(this._loansServiceURL + "duepayment/" + accno, formdata);
  }

  loanApprovalListMethod() {

    return this._http.get("../../../assets/jsonData/loanData/loanApproval.json");
    // return this._http.get<any>(this._loansServiceURL + "loanapproval/");
  }



}
