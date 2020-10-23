import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULO PARA TRABAJAR CON FORMULARIOS
import { FormsModule } from '@angular/forms';  // Por template
import { ReactiveFormsModule } from '@angular/forms'; //Formularios Reactivos

//PETICIONES HTTP

import {HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
