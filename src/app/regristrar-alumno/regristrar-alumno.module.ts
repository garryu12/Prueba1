import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegristrarAlumnoPageRoutingModule } from './regristrar-alumno-routing.module';

import { RegristrarAlumnoPage } from './regristrar-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegristrarAlumnoPageRoutingModule
  ],
  declarations: [RegristrarAlumnoPage]
})
export class RegristrarAlumnoPageModule {}
