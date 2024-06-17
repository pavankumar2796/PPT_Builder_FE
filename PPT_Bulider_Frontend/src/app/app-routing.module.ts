import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyemailComponent } from './signin/verifyemail/verifyemail.component';
import { SplitComponent } from './components/split/split.component';
import { LoginComponent } from './signin/login/login.component';
import { SignupComponent } from './signin/signup/signup.component';
import { MetadataComponent } from './components/metadata/metadata.component';

const routes: Routes = [
  {
    path :  '' ,redirectTo: '/verify', pathMatch: 'full'
  },
  {
    path : 'verify', component: VerifyemailComponent
  },
  {
    path : 'split', component: SplitComponent
  },
  {
    path : 'login', component: LoginComponent
  },
  {
    path : 'signup', component: SignupComponent
  },
  {
    path: 'metadata', component: MetadataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
