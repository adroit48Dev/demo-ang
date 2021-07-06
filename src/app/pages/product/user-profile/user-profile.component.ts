import { Component, OnInit } from "@angular/core";
import { NgbModalConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../helpers/helpers.component";
import { ProductService } from "../product.service";
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';
declare let $: any;

const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

@Component({
  selector: "ngx-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
  providers: [NgbModalConfig, NgbModal],
})
export class UserProfileComponent implements OnInit {
  backdrop: string;
  keyboard: boolean;
  selectedLevel;
  replytype: string;
  usernamelist = [];

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private _productervice: ProductService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = "static";
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.uservalue();
    $(".js-example-basic-single").select2();

    $(".js-example-basic-single").on("change", function () {
      alert($(this).val());
    });

    this.selectedLevel = "Daily User Account Statment";
    this.replytype = "Daily User Account Statment";
  }

  uservalue() {
    return this._productervice
      .userAccountDetailsGet()
      .subscribe(
        (res) => {
          this.usernamelist.push(res);
          console.log(res, this.usernamelist, "321");
        },
        (err) => {
          this._helperComponent.showToast("danger", err.json);
        }
      )
      .add(() => {
        this.spinner.hide();
      });

    // .subscribe(
    //   res => {
    //     this.usernamelist.push(res)
    //     console.log(res,this.usernamelist,'321')
    //   },
    //   err => {
    //     console.log("error");
    //     alert(err.json);
    //   });
  }

  selected() {
    this.replytype = this.selectedLevel;
  }

  open(content) {
    this.modalService.open(content);
  }

  // public exportAsExcelFile(json: any[], excelFileName: string): void {

  //   const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
  //   this.saveAsExcelFile(excelBuffer, excelFileName);
  // }

  // private saveAsExcelFile(buffer: any, fileName: string): void {
  //   const data: Blob = new Blob([buffer], {
  //     type: EXCEL_TYPE
  //   });
  //   FileSaver.saveAs(data, fileName + '_exported'+ EXCEL_EXTENSION);
  // }

  title = "exportExcelInAngular";
  dataOfFootballers: any = [
    {
      playerName: "Cristiano Ronaldo",
      playerCountry: "Pourtgal",
      playerClub: "Juventus",
    },
    {
      playerName: "Lionel Messi",
      playerCountry: "Argentina",
      playerClub: "Barcelona",
    },
    {
      playerName: "Neymar Junior",
      playerCountry: "Brazil",
      playerClub: "PSG",
    },
    {
      playerName: "Tonni Kroos",
      playerCountry: "Germany",
      playerClub: "Real Madrid",
    },
    {
      playerName: "Paul Pogba",
      playerCountry: "France",
      playerClub: "Manchester United",
    },
  ];

  exportAsXLSX(): void {
    window.print();
    // this.exportAsExcelFile(this.dataOfFootballers, 'footballer_data');
  }
}
