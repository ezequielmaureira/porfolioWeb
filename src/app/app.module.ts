import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentesFuncionales/header/header.component';
import { AcercaComponent } from './componentesFuncionales/acerca/acerca.component';
import { ExperienciaComponent } from './componentesFuncionales/experiencia/experiencia.component';
import { EducacionComponent } from './componentesFuncionales/educacion/educacion.component';
import { CompetenciasComponent } from './componentesFuncionales/competencias/competencias.component';
import { ProyectosComponent } from './componentesFuncionales/proyectos/proyectos.component';
import { VistaComponent } from './componenteVista/vista/vista.component';
import { PorfolioService } from './porfolio.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgChartsModule } from 'ng2-charts';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFireModule } from '@angular/fire/compat';


const firebaseConfig = {
  apiKey: "AIzaSyC31b4rtKmv7xN5n4OwoNg0Oe5Vp0kkxtg",
  authDomain: "authporfolio.firebaseapp.com",
  projectId: "authporfolio",
  storageBucket: "authporfolio.appspot.com",
  messagingSenderId: "398284255870",
  appId: "1:398284255870:web:125b48a40a05a5f0149e2f",
  measurementId: "G-JYNDM59PWG"
};

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    CompetenciasComponent,
    ProyectosComponent,
  
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    AngularFireModule.initializeApp(firebaseConfig)
    
   
    
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
