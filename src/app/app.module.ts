import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { filessizepipes } from './files.pipe';
import { summarypipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    filessizepipes,
    summarypipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
