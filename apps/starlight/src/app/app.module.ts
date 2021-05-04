import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CalendarModule} from '@starlight-components/calendar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
