import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadeEstadoModule } from './cidade-estado/cidade-estado.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CidadeEstadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
