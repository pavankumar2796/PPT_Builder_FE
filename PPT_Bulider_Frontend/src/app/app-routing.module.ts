import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitComponent } from './components/split/split.component';
import { LoginComponent } from './signin/login/login.component';
import { SignupComponent } from './signin/signup/signup.component';
import { MetadataComponent } from './components/metadata/metadata.component';
import { SearchComponent } from './components/search/search.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { TestpptComponent } from './components/testppt/testppt.component';
import { ResetpswdComponent } from './signin/resetpswd/resetpswd.component';

const routes: Routes = [
  {
    path :  '' ,redirectTo: '/login', pathMatch: 'full'
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
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'searchresult', component: SearchresultComponent
  },
  {
    path: 'test', component: TestpptComponent
  },
  {
    path: 'reset', component: ResetpswdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
