import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/layout/home/home.component';
import { CookiesComponent } from './shared/layout/cookies/cookies.component';
import { PrivacyComponent } from './shared/layout/privacy/privacy.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'cookies', component: CookiesComponent},
  {path: "privacy", component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
