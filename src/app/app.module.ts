import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

//servicios

import { MapasService } from "./services/mapas.service"

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTuxz9YGYETOfGnbU4pcmUIqgl84VEVSo'
    })
  ],
  providers: [
    MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
