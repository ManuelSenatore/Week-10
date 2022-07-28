import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliComponent } from './dettagli/dettagli.component';
import { HomeComponent } from './home/home.component';
import { ProfiliAttiviComponent } from './profili-attivi/profili-attivi.component';
import { ProfiliInattiviComponent } from './profili-inattivi/profili-inattivi.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profili-inattivi',
    component: ProfiliInattiviComponent,
  },
  {
    path: 'profili-attivi',
    component: ProfiliAttiviComponent,
  },
  {
    path: 'dettagli/:id',
    component: DettagliComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
