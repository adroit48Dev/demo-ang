import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgxSpinnerService } from 'ngx-spinner';
import { Script } from 'vm';
import { AlertService } from '../../../helpers/alert.service';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { MessagesettingsService } from '../messagesettings.service';
import { ShowcaseDialogComponent } from '../showcase-dialog/showcase-dialog.component';
declare let $: any;

@Component({
  selector: 'app-emailtemplate',
  templateUrl: './emailtemplate.component.html',
  styleUrls: ['./emailtemplate.component.scss']
})

export class EmailtemplateComponent implements OnInit {
  selectedLevel;
  replytype: string;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings;
  submitted = false;
  status = false;
  postData = {};
  emailTemplateForm: FormGroup;

  constructor(
    private _alertService: AlertService,
    config: NgbCarouselConfig,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,
    private _messageService: MessagesettingsService,
    private dialogService: NbDialogService) { }

  ngOnInit() {
    $('.js-example-basic-single').select2();
    $('.js-example-basic-single').on("change", function () {
      alert($(this).val());
    });
    this.selectedLevel = "NS"
    this.replytype = "NS"
    this.dropdownList.push(
      { item_id: 1, item_text: "Template1" },
      { item_id: 2, item_text: "Template2" },
      { item_id: 3, item_text: "Template3" },
      { item_id: 4, item_text: "Template4" },
      { item_id: 5, item_text: "Template5" },
      { item_id: 6, item_text: "Template6" },
    );
    this.selectedItems.push({ item_id: 1, item_text: "Template1" });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    console.log('Register')
    this.emailTemplateForm = this.formBuilder.group({
      template: new FormControl("", []),
      b2: new FormControl("", []),
      b3: new FormControl("", []),
      b4: new FormControl("", []),
      b5: new FormControl("", []),
      b6: new FormControl("", []),
    })
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  open() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        // title: 'This is a title passed to the dialog component',
      },
    });
  }

  selected() {
    this.replytype = this.selectedLevel;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.emailTemplateForm.invalid) {
      return;
    }

    this.spinner.show();
    let formData = new FormData();
    let emailTemplateFormData = this.emailTemplateForm.value;

    // Form data
    Object.entries(emailTemplateFormData).forEach(([key, values]) => {
      this.postData[key] = values
    })

    this._messageService.saveMessageTemplateMethod(this.postData)
      .subscribe(
        (res) => {
          this._helperComponent.showToast('success', 'Registration Completed');
        },
        (err) => {
          this._helperComponent.showToast('danger', err);
        }).
      add(() => {
        this.spinner.hide();
      });
  }

}
