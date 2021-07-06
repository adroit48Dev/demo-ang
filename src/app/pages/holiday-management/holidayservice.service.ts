import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelpersComponent } from '../../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class HolidayserviceService {
  private headers = new HttpHeaders();
  constructor(
    private _helperComponent: HelpersComponent, private _http: HttpClient) { }

  private _holidayURL = "http://loadbalancer.danfishel.com/HolidayService/api/v1/";

  // create defaultholiday method
  createDefaultHolidayMethod(formData: any) {
    return this._http.post<any>(this._holidayURL + 'defaultholiday', formData)
  }

  // Default Holidaylist data get method
  getDefaultlholidaylistbyidMethod(id: any) {
    return this._http.get<any>(this._holidayURL + 'holiday/' + id)
  }

  // update SpecialHoliday method
  updateDefaultHoliday(id: any, formdata: any) {
    return this._http.put<any>(this._holidayURL + 'update-defaultholiday/' + id, formdata)
  }

  // all Holidaylist data get method
  getholidaylistMethod() {
    return this._http.get<any>(this._holidayURL + 'holidaylist')
  }


  // create Special holiday method
  createSpecialHolidayMethod(formData: any) {
    return this._http.post<any>(this._holidayURL + 'specialholiday', formData)
  }

  // Special Holidaylist data get method
  getsplholidaylistbyidMethod(id: any) {
    return this._http.get<any>(this._holidayURL + 'specialholiday/' + id)
  }

  // all Holidaylist data get method
  getsplholidaylistMethod() {
    return this._http.get<any>(this._holidayURL + 'specialholidaylist')
  }

  // update SpecialHoliday method
  updateSpecialHoliday(id: any, formdata: any) {
    return this._http.put<any>(this._holidayURL + 'update-specialholiday/' + id, formdata)
  }
}
