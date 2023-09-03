import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente.component';
import { CardComponent } from './card.component';
import { ImagenCardComponent } from './imagen-card.component';
import { OpacidadComponent } from './opacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    CardComponent,
    ImagenCardComponent,
    OpacidadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
