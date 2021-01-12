import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from "@angular/fire/storage";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAWi1qSDA8FYmqmavLutM9bxmJmB9a2BpU",
    authDomain: "profile-pic-uploader.firebaseapp.com",
    projectId: "profile-pic-uploader",
    storageBucket: "profile-pic-uploader.appspot.com",
    messagingSenderId: "64581478455",
    appId: "1:64581478455:web:840136452e115f2a4077b2"
    }),
    AngularFireStorageModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
