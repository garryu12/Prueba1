import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegristrarAlumnoPage } from './regristrar-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: RegristrarAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegristrarAlumnoPageRoutingModule {}
