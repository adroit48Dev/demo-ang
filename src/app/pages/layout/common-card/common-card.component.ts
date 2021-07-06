import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-common-card',
  styleUrls: ['./common-card.component.scss'],
  template: `
  <a href="/">
    <nb-card>
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ Branch_Name }}</div>
        <div class="status paragraph-2"> {{ Branch_manager_name}}</div>
      </div>
    </nb-card>
</a>
  `,

})
export class CommonCardComponent {

  @Input() Branch_Name: string;
  @Input() Branch_manager_name: string;
  @Input() type: string;
  @Input() on = true;

}
