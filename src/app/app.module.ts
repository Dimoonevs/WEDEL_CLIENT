import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/layout/home/home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SenderComponent } from './shared/components/forms/sender/sender.component';
import { SpecificationsComponent } from './shared/components/forms/specifications/specifications.component';
import { DueDateComponent } from './shared/components/forms/due-date/due-date.component';
import { ReceiverComponent } from './shared/components/forms/receiver/receiver.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card'
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { SummaryComponent } from './shared/components/forms/summary/summary.component';
import { NgxMaskModule } from 'ngx-mask-2';
import { OwlModule } from 'ngx-owl-carousel';
import { HelpComponent } from './shared/components/forms/help/help.component';
import { TrackingComponent } from './shared/components/forms/tracking/tracking.component';
import { ContactComponent } from './shared/components/forms/contact/contact.component';
import { RequestACallComponent } from './shared/components/forms/request-acall/request-acall.component';
import { ToastComponent } from './shared/module/toast/toast.component';
import { CookiesComponent } from './shared/layout/cookies/cookies.component';
import { PrivacyComponent } from './shared/layout/privacy/privacy.component';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SenderComponent,
    SpecificationsComponent,
    DueDateComponent,
    ReceiverComponent,
    SummaryComponent,
    HelpComponent,
    TrackingComponent,
    ContactComponent,
    RequestACallComponent,
    ToastComponent,
    CookiesComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    OwlModule,
    NgxMaskModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory })
    
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    { provide: ToastComponent, useClass: ToastComponent }
  ],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
