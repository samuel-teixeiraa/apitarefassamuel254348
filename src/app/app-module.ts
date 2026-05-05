import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app';
import { ItemComponent } from './item/item';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    ItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }