import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { HelpersComponent } from '../../helpers/helpers.component';

declare const ga: any;

@Injectable()
export class AnalyticsService {
  private enabled: boolean;

     constructor(    private spinner: NgxSpinnerService,
    private _helperComponent: HelpersComponent,private location: Location, private router: Router) {
    this.enabled = false;
  }

  trackPageViews() {
    if (this.enabled) {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
      )
        .subscribe(() => {
          ga('send', {hitType: 'pageview', page: this.location.path()});
        });
    }
  }

  trackEvent(eventName: string) {
    if (this.enabled) {
      ga('send', 'event', eventName);
    }
  }
}
