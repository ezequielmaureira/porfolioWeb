import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaComponent } from './componenteVista/vista/vista.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

const routes: Routes = [

{path:'vista',component:VistaComponent},
{path:'inicioSesion',component:InicioSesionComponent},
{path:'',redirectTo:'inicioSesion',pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
