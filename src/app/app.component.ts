import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  _name: string;
  _email: string;
  _phone_number: number;
  _message: string;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private http: HttpClient) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  // tslint:disable-next-line:member-ordering
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)localhost:4200/].some(h => h.test(window.location.host));

  // Get error message on form
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getNameErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }
  getTextErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }

  // Post request to insert visitor data
  insertVisitorData() {
    
  }

  // Download the resume
  downloadResume() {
    const win = window.open('http://shibendutta.com/profile/shibenDuttaM.doc', '_blank');
    win.focus();
  }

  // Open getting started with ionic page in new window
  ionicGettingStartedGuide() {
    const win = window.open('http://shibendutta.com/profile/guides/ionic-starter/ionic-starter.html', '_blank');
    win.focus();
  }
}
