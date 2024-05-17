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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ValidemailComponent,
    EmailotpverificationComponent,
    SignupComponent,
    ForgetpswdComponent,
    SplitfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
