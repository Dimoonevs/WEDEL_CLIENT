import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/layout/home/home.component';
import { CookiesComponent } from './shared/layout/cookies/cookies.component';
import { PrivacyComponent } from './shared/layout/privacy/privacy.component';
import { InformationComponent } from './shared/layout/information/information.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'cookies', component: CookiesComponent},
  {path: "GDPR", component: PrivacyComponent},
  {path: "terms-and-conditions", component: InformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
