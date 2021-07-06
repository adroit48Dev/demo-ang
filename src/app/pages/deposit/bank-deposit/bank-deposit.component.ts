import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router"
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {BankdepositService} from './bankdeposit.service'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bank-deposit',
  templateUrl: './bank-deposit.component.html',
  styleUrls: ['./bank-deposit.component.scss']
})
export class BankDepositComponent implements OnInit {

  bankdata=[];
     constructor(    private spinner: NgxSpinnerService, private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,
    private _bankservice:BankdepositService) { }
 

  ngOnInit(): void {
    this._bankservice.all_bank_get().subscribe(res => {
      console.log(res)
      this.bankdata.push(res)
  
},
  err => {
   console.log("test")
  })
  }



  bankid(id){
    this.router.navigate(['update-bank-deposit',id],{ relativeTo: this.route }) 
  }

}

