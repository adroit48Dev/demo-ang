import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DatePipe } from '@angular/common';
import { EmployeemanagementService } from '../employeemanagement.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BranchregisterService } from '../../layout/branchregister.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../../helpers/helpers.component';


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
@Component({
  selector: 'ngx-e-logs-view',
  templateUrl: './e-logs-view.component.html',
  styleUrls: ['./e-logs-view.component.scss'],
  // providers: [DatePipe]
})



export class ELogsViewComponent implements AfterViewInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  branchData: any = [];
  EmpLogs: any = [];
  postData: any = {};
  searchForm: FormGroup;
  dtoptions;
  dtOptions: DataTables.Settings = {};
  // branch = ['Axis', 'Baroda', 'Canara', 'Dent']
     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private router: Router,
    private _route: ActivatedRoute, private datePipe: DatePipe,
    private _service: EmployeemanagementService,
    private _branchService: BranchregisterService,) { }

  EmpMonthval = "";
  EmpBranch = "";
  someClickHandler(info: any): void {
    console.log(info.id + ' - ' + info.firstName)
  }

  ngOnInit(): void {
    this._branchService.allBranchGet().subscribe(res => {
      this.branchData = res;
      console.log(this.branchData)
    },
      err => {
        console.log(err)
      })
    this.searchForm = new FormGroup({
      EmpBranch: new FormControl('', Validators.required),
      EmpMonthval: new FormControl('', Validators.required)
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      processing: true,

    };


    this.loadData();
    this.emplogschange();
    console.log(this.EmpLogs)

  }

  rowSelected(emplogs) {
    console.log(emplogs)
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
      this.loadData();
    });
  }


  emplogschange() {
    // this._service.allEmpLogs().subscribe(
    //   res => { // Form data
    //     Object.entries(res).forEach(([key, values]) => {
    //       this.EmpLogs.push(values)
    //     })
    //   },
    //   err => alert(err)
    // );
  }

  public loadData() {
    let dataa: any = [];
    this._service.allEmpLogs().subscribe(res => {
      console.log(res?.LogList);
      // this.EmpLogs.push(res?.LogList);
      this.showDataInDatatable(res?.LogList || []);
    })
    this.dtTrigger.next();

    // const dataa = [
    //   { id: 1, name: 'Ajay', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 2, name: 'Jas', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 3, name: 'therichpost', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 4, name: 'therichpost', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 5, name: 'Jas', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 6, name: 'therichpost', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 7, name: 'therichpost', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 8, name: 'Jas', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 9, name: 'therichpost', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 },
    //   { id: 10, name: 'therichpost', log_in: "12:60 PM", log_out: "06:00 AM", total_count: 10 }
    // ];

    // this._accountservice.allAccountDetailsGet().subscribe(
    //   res =>{ // Form data
    //     Object.entries(res).forEach(([key, values]) => {
    //           this.AccountData.push(values)
    //     })},
    //   err  => alert(err)
    // );

  }

  onBranchSubmit() {
    this.spinner.show();
    Object.entries(this.searchForm.value).forEach(([key, values]) => {
      this.postData[key] = values;
    })
    this._service.EmpLogsSearch(this.postData['EmpBranch'], this.postData['EmpMonthval'])
      .subscribe(
        (res) => {
          console.log(res)
          this.showDataInDatatable(res['Log Result'] || []);
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

  /**
   * This method is used to refresh data in datatable
   */
  showDataInDatatable(response) {
    this.EmpLogs = [];
    for (const res of response) {
      const date = res.date;
      const emp_details_id = res.emp_details_id;
      const employeename = res.employeename;
      const login_time = res.login_time;
      const month = res.month;
      const _id = res._id;
      const data = {
        date,
        emp_details_id,
        employeename,
        login_time,
        month,
        _id,
      };
      this.EmpLogs = [...this.EmpLogs, data];
    }
  }
}
