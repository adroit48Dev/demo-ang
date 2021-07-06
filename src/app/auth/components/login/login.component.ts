
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { first } from 'rxjs/operators';
import { AlertService } from '../../../helpers/alert.service';
import { HelpersComponent } from '../../../helpers/helpers.component';
import { ApiService } from '../../../helpers/notification.service';
import { AuthenticationService } from './authencation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  ErrorCard = false;
  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _helperComponent: HelpersComponent,
    private spinner: NgxSpinnerService, config: NgbCarouselConfig,
    private authenticationService: AuthenticationService) {

    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/pages']);
    // }
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }


  ngOnInit(): void {
    console.log('Login');
    if (sessionStorage.getItem('ACCESS_TOKEN') !== null) {
      // role not authorised so redirect to home page
      this.router.navigate([this.returnUrl]);
    }

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/pages'
    this.authenticationService.logout();
  }

  get f() {
    return this.loginForm.controls;
  }

  onLoginSubmit() {
    this.submitted = true;
    // reset alerts on submit
    if (this.loginForm.invalid) {
      return;
    }
    this.spinner.show()

    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          // localStorage.setItem('ROLES', JSON.stringify(data['employee designation']));
          localStorage.setItem('ACCESS_TOKEN', JSON.stringify(data['token']));
          localStorage.setItem('Bank_Name', JSON.stringify(data['username']));
          this.spinner.hide()
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          // if (error.status == 401) {
          this.ErrorCard = true
          // }
        }
      )
      .add(() => {
        this.spinner.hide();
      });
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
