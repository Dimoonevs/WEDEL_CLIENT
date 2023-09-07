import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/layout/home/home.component';
import { SenderComponent } from './shared/components/forms/sender/sender.component';
import { SpecificationsComponent } from './shared/components/forms/specifications/specifications.component';
import { DueDateComponent } from './shared/components/forms/due-date/due-date.component';
import { ReceiverComponent } from './shared/components/forms/receiver/receiver.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
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
import { ArregeComponent } from './shared/layout/home/layouts/arrege/arrege.component';
import { QuotationComponent } from './shared/layout/home/layouts/quotation/quotation.component';
import { JsonAminFirstComponent } from './shared/components/json/json-amin-first/json-amin-first.component';
import { JsonAminSecondComponent } from './shared/components/json/json-amin-second/json-amin-second.component';
import { JsonAminThirdComponent } from './shared/components/json/json-amin-third/json-amin-third.component';
import { JsonAminFourthComponent } from './shared/components/json/json-amin-fourth/json-amin-fourth.component';
import { JsonAminFifthComponent } from './shared/components/json/json-amin-fifth/json-amin-fifth.component';
import { JsonAminSixthComponent } from './shared/components/json/json-amin-sixth/json-amin-sixth.component';
import { InformationComponent } from './shared/layout/information/information.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

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
    ArregeComponent,
    QuotationComponent,
    JsonAminFirstComponent,
    JsonAminSecondComponent,
    JsonAminThirdComponent,
    JsonAminFourthComponent,
    JsonAminFifthComponent,
    JsonAminSixthComponent,
    InformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    NgxMaskModule.forRoot(),
    LottieModule.forRoot({ player: playerFactory }),
    NgxGoogleAnalyticsModule.forRoot('G-07R27XBE9Z'),
    NgxGoogleAnalyticsRouterModule
    
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    { provide: ToastComponent, useClass: ToastComponent }
  ],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
