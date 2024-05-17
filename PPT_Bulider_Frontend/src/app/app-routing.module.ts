import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './signin/login/login.component';
import { ValidemailComponent } from './signin/validemail/validemail.component';
import { SignupComponent } from './signin/signup/signup.component';

const routes: Routes = [
  {
    path : '', component: ValidemailComponent
  },
  {
    path : 'login', component: LoginComponent
  },
  {
    path : 'validemail', component: ValidemailComponent
  },
  {
    path : 'signup', component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
