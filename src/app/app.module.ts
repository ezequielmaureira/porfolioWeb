import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentesFuncionales/header/header.component';
import { AcercaComponent } from './componentesFuncionales/acerca/acerca.component';
import { ExperienciaComponent } from './componentesFuncionales/experiencia/experiencia.component';
import { EducacionComponent } from './componentesFuncionales/educacion/educacion.component';
import { CompetenciasComponent } from './componentesFuncionales/competencias/competencias.component';
import { ProyectosComponent } from './componentesFuncionales/proyectos/proyectos.component';
import { VistaComponent } from './componenteVista/vista/vista.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    CompetenciasComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
