import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelaguComponent } from './helagu/helagu.component';
import { MENUComponent } from './menu/menu.component';
import { TOOLBARComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelaguComponent,
    MENUComponent,
    TOOLBARComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
