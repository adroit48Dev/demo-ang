import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../../helpers/helpers.component';


@Injectable()
export class CountryOrdersMapService {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private http: HttpClient) {}

  getCords(): Observable<any> {
    return this.http.get('assets/leaflet-countries/countries.geo.json');
  }

}
