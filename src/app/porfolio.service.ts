import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ifnombre } from './componentesFuncionales/acerca/nombre';
import { Observable } from 'rxjs';
import { AcercaComponent } from './componentesFuncionales/acerca/acerca.component';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  
  
  private ApiUrlNombre='http://localhost:4000/Nombre';
  private ApiUrlEspecialidad='http://localhost:4000/Especialidad';
  private ApiUrlDescripcion='http://localhost:4000/Descripcion';
  constructor(private http:HttpClient) { }

 
  obtenerAcercaDe():Observable<Ifnombre>{

    return this.http.get<Ifnombre>(this.ApiUrlNombre)
    
      
    }

    
  actualizarNombre(nombre:any, id:number):Observable<any>{
   
    return this.http.put<any>(this.ApiUrlNombre+"/"+id,nombre) 
}
  
actualizarEspecialidad(especialidad:any, id:number):Observable<any>{
   
  return this.http.put<any>(this.ApiUrlEspecialidad+"/"+id,especialidad)

}
actualizarDescripcion(descripcion:any, id:number):Observable<any>{
   
  return this.http.put<any>(this.ApiUrlDescripcion+"/"+id,descripcion)

}

}
