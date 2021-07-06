import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeWhile } from 'rxjs/operators';
import { HelpersComponent } from '../../../../helpers/helpers.component';

@Component({
  selector: 'ngx-traffic-cards-header',
  styleUrls: ['./traffic-cards-header.component.scss'],
  templateUrl: './traffic-cards-header.component.html',
})
export class TrafficCardsHeaderComponent implements OnDestroy {
  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';

  types: string[] = ['week', 'month', 'year'];
  currentTheme: string;

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
