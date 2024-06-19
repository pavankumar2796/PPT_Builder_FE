import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OtpforemailComponent } from './signin/otpforemail/otpforemail.component';
import { SignupComponent } from './signin/signup/signup.component';
import { LoginComponent } from './signin/login/login.component';
import { SplitComponent } from './components/split/split.component';
import { MetadataComponent } from './components/metadata/metadata.component';
import { SearchComponent } from './components/search/search.component';
import { SearchresultComponent } from './components/searchresult/searchresult.component';
import { TestpptComponent } from './components/testppt/testppt.component';
import { ForgetpaswdComponent } from './signin/forgetpaswd/forgetpaswd.component';
import { OtpverifypswdComponent } from './signin/otpverifypswd/otpverifypswd.component';
import { ResetpswdComponent } from './signin/resetpswd/resetpswd.component';


@NgModule({
  declarations: [
    AppComponent,
    OtpforemailComponent,
    SignupComponent,
    LoginComponent,
    SplitComponent,
    MetadataComponent,
    SearchComponent,
    SearchresultComponent,
    TestpptComponent,
    ForgetpaswdComponent,
    OtpverifypswdComponent,
    ResetpswdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
