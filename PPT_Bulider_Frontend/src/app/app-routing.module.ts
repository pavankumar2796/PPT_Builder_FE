import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './signin/login/login.component';
import { ValidemailComponent } from './signin/validemail/validemail.component';
import { SignupComponent } from './signin/signup/signup.component';
import { SplitfileComponent } from './components/splitfile/splitfile.component';
import { MetadataComponent } from './components/metadata/metadata.component';
import { ForgetpswdComponent } from './signin/forgetpswd/forgetpswd.component';
import { EmailotpverificationComponent } from './signin/emailotpverification/emailotpverification.component';
import { ResetpswdComponent } from './signin/resetpswd/resetpswd/resetpswd.component';

const routes: Routes = [
  {
    path :  '' ,redirectTo: '/validemail', pathMatch: 'full'
  },
  {
    path : 'login', component: LoginComponent
  },
  {
    path : 'validemail', component: ValidemailComponent
  },
  {
    path : 'signup', component: SignupComponent
  },
  {
    path : 'spilt', component: SplitfileComponent
  },
  {
    path : 'metadata', component: MetadataComponent
  },
  {
    path : 'forgetpswd', component: ForgetpswdComponent 
  },
  {
    path : 'otpverify', component: EmailotpverificationComponent
  },
  {
    path : 'reset', component: ResetpswdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
