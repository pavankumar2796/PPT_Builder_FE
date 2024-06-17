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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { VerifyemailComponent } from './signin/verifyemail/verifyemail.component';
import { OtpforemailComponent } from './signin/otpforemail/otpforemail.component';
import { SignupComponent } from './signin/signup/signup.component';
import { LoginComponent } from './signin/login/login.component';
import { SplitComponent } from './components/split/split.component';
import { MetadataComponent } from './components/metadata/metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    VerifyemailComponent,
    OtpforemailComponent,
    SignupComponent,
    LoginComponent,
    SplitComponent,
    MetadataComponent
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
