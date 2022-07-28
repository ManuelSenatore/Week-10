import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderlineDirective } from './underline.directive';
import { HomeComponent } from './home/home.component';
import { ProfiliAttiviComponent } from './profili-attivi/profili-attivi.component';
import { ProfiliInattiviComponent } from './profili-inattivi/profili-inattivi.component';
import { CardComponent } from './card/card.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipaPipe } from './pipa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UnderlineDirective,
    HomeComponent,
    ProfiliAttiviComponent,
    ProfiliInattiviComponent,
    CardComponent,
    DettagliComponent,
    PipaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
