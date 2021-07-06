import { Injectable } from '@angular/core';
import { HelpersComponent } from '../helpers/helpers.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

     constructor( private _helperComponent: HelpersComponent) { }
}
