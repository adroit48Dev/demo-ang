import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';
import { throwError } from 'rxjs';

@Component({
  selector: 'ngx-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss']
})
export class HelpersComponent implements OnInit {

     constructor(private spinner: NgxSpinnerService, private toastrService: NbToastrService) { }
  private index: number = 0;

  ngOnInit(): void {
  }


  handleError(errorReponse: HttpErrorResponse) {
    let errorMessage = '';
    if (typeof errorReponse === 'string') {
      errorMessage = `Error: ${errorReponse}`;
    }
    else if (errorReponse.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${errorReponse.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${errorReponse.status}\nMessage: ${errorReponse.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }



  public isVisible: boolean = true;
  // message: any, title?: any, userConfig?
  // showToast(status: NbComponentStatus, message: string) {
  //   this.toastrService.show(message, status, { status });
  // }

  showToast(status, message: string) {
    this.toastrService.show('Success', `${message}`, { status });
  }
}
