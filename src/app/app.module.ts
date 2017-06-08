import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';
import {FormComponent} from './ng-forms/form.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, NgbModule.forRoot()],
  declarations: [ AppComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
