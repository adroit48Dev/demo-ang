import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HelpersComponent } from "../../../../helpers/helpers.component";

@Component({
  selector: "ngx-upload-banker-document",
  templateUrl: "./upload-banker-document.component.html",
  styleUrls: ["./upload-banker-document.component.scss"],
})
export class UploadBankerDocumentComponent implements OnInit {
  uploadDocForm: FormGroup;
  submitted = false;

  clickCount = 1;

  keyword = "name";

  data = [
    {
      name: "Agreement",
    },
    {
      name: "Payment slips",
    },
    {
      name: "computer documents",
    },
  ];

  constructor(
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.uploadDocForm = this.formBuilder.group({
      newFolder: [""],
      itemRows: this.formBuilder.array([this.initItemRows()]),
    });
  }
  get formArr() {
    return this.uploadDocForm.get("itemRows") as FormArray;
  }
  initItemRows() {
    return this.formBuilder.group({
      fileName: [""],
      uploadFile: [""],
    });
  }
  onAddButton() {
    this.clickCount++;
    this.formArr.push(this.initItemRows());
  }
  onDeleteButton(index: number) {
    this.clickCount--;
    this.formArr.removeAt(index);
  }
  onSubmit() {
    console.log(this.uploadDocForm.value);
  }

  onBack() {
    this.router.navigate(["pages/documents/banker-document"]);
  }
  onReset() {
    this.uploadDocForm.reset();
  }

  // autocomplete
  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
}
