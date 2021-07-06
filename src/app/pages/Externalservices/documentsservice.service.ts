import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class DocumentsserviceService {

  private headers = new HttpHeaders();
     constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }

  private _holidayURL = "http://loadbalancer.danfishel.com/DocumentService/api/v1/";

  // bank-file-upload method
  bankfileuploadMethod(formData) {
    return this._http.post<any>(this._holidayURL + 'bank-file-upload', formData);
  }

  //customer-file-upload method
  customerfileuploadMethod(formData) {
    return this._http.post<any>(this._holidayURL + 'customer-file-upload', formData);
  }

  // danfishel-file-upload method
  danfishelFileUploadMethod(formData) {
    return this._http.post<any>(this._holidayURL + 'danfishel-file-upload', formData);
  }

  // List all Bank Files get method
  listallBankFilesMethod() {

    return this._http.get<any>(this._holidayURL + 'list-bank-files');
  }



  //All list-customer-files get method
  listcustomerfilesMethod() {

    return this._http.get<any>(this._holidayURL + 'list-customer-files');
  }

  //All list-danfishel-files get method
  listdanfishelfilesMethod() {

    return this._http.get<any>(this._holidayURL + 'list-danfishel-files');
  }



  // download-bankfile get method
  getdownloadBankFileMethod(filename) {

    return this._http.get<any>(this._holidayURL + 'download-bankfile/' + filename);

  }


  // bank-file-info get method
  getBankFileInfoMethod(filename) {

    return this._http.get<any>(this._holidayURL + 'bank-file-info/' + filename);

  }


  // download-customerfile get method
  getDownloadCustomerFileMethod(filename) {

    return this._http.get<any>(this._holidayURL + 'download-customerfile/' + filename);

  }


  // customer-file-info get method
  getCustomerFileInfoMethod(filename) {

    return this._http.get<any>(this._holidayURL + 'customer-file-info/' + filename);

  }
  // /download-danfishelfile get method
  getDownloadDanfishelFileMethod(filename) {

    return this._http.get<any>(this._holidayURL + 'download-danfishelfile/' + filename);

  }

  // danfishel-file-infoget method
  getDanfishelFileInfoMethod(filename) {

    return this._http.get<any>(this._holidayURL + 'danfishel-file-info/' + filename);

  }

}
