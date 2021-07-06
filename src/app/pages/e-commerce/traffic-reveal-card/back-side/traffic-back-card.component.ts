import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeWhile } from 'rxjs/operators';
import { HelpersComponent } from '../../../../helpers/helpers.component';

@Component({
  selector: 'ngx-traffic-back-card',
  styleUrls: ['./traffic-back-card.component.scss'],
  templateUrl: './traffic-back-card.component.html',
})
export class TrafficBackCardComponent implements OnDestroy {

  private alive = true;

  @Input() trafficBarData: any;

  currentTheme: string;

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}