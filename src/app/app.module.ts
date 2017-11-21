import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { MainService } from '../services/main.service';

import { AppComponent } from './app.component';
import { SkorMapComponent } from './skor-map/skor-map.component';


@NgModule({
  declarations: [
    AppComponent,
    SkorMapComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBkfxUiMAmNUnC4JnwZEqOnmnf93r0YNVQ"
    }),
    AgmSnazzyInfoWindowModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
