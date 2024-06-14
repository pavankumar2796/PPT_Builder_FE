import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './signin/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ValidemailComponent } from './signin/validemail/validemail.component';
import { EmailotpverificationComponent } from './signin/emailotpverification/emailotpverification.component';
import { SignupComponent } from './signin/signup/signup.component';
import { ForgetpswdComponent } from './signin/forgetpswd/forgetpswd.component';
import { SplitfileComponent } from './components/splitfile/splitfile.component';
import { MetadataComponent } from './components/metadata/metadata.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetpswdComponent } from './signin/resetpswd/resetpswd/resetpswd.component';
import { OtpverifypswdComponent } from './signin/otpverifypswd/otpverifypswd/otpverifypswd.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidemailComponent,
    EmailotpverificationComponent,
    SignupComponent,
    ForgetpswdComponent,
    SplitfileComponent,
    MetadataComponent,
    ResetpswdComponent,
    OtpverifypswdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
