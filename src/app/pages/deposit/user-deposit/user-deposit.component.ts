import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import {DepositService} from './deposit.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

export interface PeriodicElement {
  id: string;
  status:string
  AccountNumber: String;
  DepositAmount: string;
  DepositType: string;
  TotalAmount: String;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-user-deposit',
  templateUrl: './user-deposit.component.html',
  styleUrls: ['./user-deposit.component.scss']
})
export class UserDepositComponent implements OnInit {

  displayedColumns: string[] = ['AccountNumber', 'DepositAmount', 'DepositType', 'TotalAmount','status' ,'Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder,
    private _depositservice:DepositService) { }

  // material table filter method
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // navigate to deposit information page
  depositInfo(id) {
    this.router.navigate(['deposit-info',id], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.addfdrdrow();
  }

  async addfdrdrow() {
    return this._depositservice.get_fd_rd_value().subscribe(
      async res => {

        this.addrow(res);
      },
      err => {
        alert(err.json);
      });
  }       
  
  async addrow(res) {
    console.log(res);
    const ELEMENT_DATA: PeriodicElement[] = [];
    for (var i = 0; i < res.length; i++) {
      ELEMENT_DATA.push({id:res[i]['_id'], AccountNumber: res[i]['Scheme_id'], DepositAmount: res[i]['Amount'], DepositType: res[i]['Deposit_type'], TotalAmount: res[i]['Maturity_Amount'],status: res[i]['status'], });
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
  }

}
