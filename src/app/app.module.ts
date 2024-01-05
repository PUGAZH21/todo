import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { UpdateComponent } from './update/update.component';
import { DelComponent } from './del/del.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GetbyidComponent } from './getbyid/getbyid.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    GetComponent,
    UpdateComponent,
    DelComponent,
    GetbyidComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
