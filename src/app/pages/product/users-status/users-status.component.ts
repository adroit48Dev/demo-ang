import { Component, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { AccoundetailsService } from "../accountdetails/accoundetails.service";
import { ProductService } from "../product.service";
import { DataTablesResponse } from "./DataTablesResponse";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "ngx-users-status",
  templateUrl: "./users-status.component.html",
  styleUrls: ["./users-status.component.scss"],
})
export class UsersStatusComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  backdrop: string;
  keyboard: boolean;
  persons = [];

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router,
    private httpClient: HttpClient,
    private _route: ActivatedRoute,
    private _accountservice: AccoundetailsService,
    private _productervice: ProductService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = "static";
    config.keyboard = false;
  }

  today = new Date();

  ngOnInit(): void {
    const that = this;
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
      destroy: true,
    };
    this.Userdataappend();
  }
  // ngAfterViewInit(): void {this.dtTrigger.next();}

  open(content) {
    this.modalService.open(content);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  Userdataappend() {
    this.httpClient
      .get("http://loadbalancer.danfishel.com/useraccountservice/api/v1/uacc")
      .subscribe(
        (data) => {
          console.log(data);
          this.persons = [];
          console.log("in");
          this.persons = data as any;
          // Calling the DT trigger to manually render the table
          this.dtTrigger.next();
        },
        (err) => {
          this._helperComponent.showToast("danger", err);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(data => {
    //     console.log(data);
    //     this.persons=[];
    //     console.log('in');
    //     this.persons = (data as any);
    //     // Calling the DT trigger to manually render the table
    //     this.dtTrigger.next();
    //   });
  }
}
