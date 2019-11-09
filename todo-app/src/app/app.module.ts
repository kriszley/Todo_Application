import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations' //Doesn't work for Angular 7
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
    //NoopAnimationsModule //This one doesn't work for Angular 7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
