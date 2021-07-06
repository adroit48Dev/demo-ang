import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';

@Component({
  selector: 'ngx-prepay-closure',
  templateUrl: './prepay-closure.component.html',
  styleUrls: ['./prepay-closure.component.scss']
})
export class PrepayClosureComponent implements OnInit {

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }

  pay() {
    this.router.navigate(['prepay'], { relativeTo: this.route });
  }

}
