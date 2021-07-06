import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'ngx-kitten',
  styleUrls: ['./kitten.component.scss'],
  templateUrl: './kitten.component.html',
})
export class KittenComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: any;

     constructor(private spinner: NgxSpinnerService, private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
