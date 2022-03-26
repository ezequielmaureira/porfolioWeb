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

 
  obtenerNombre():Observable<any>{

    return this.http.get<any>(this.ApiUrlNombre)
          
    }
    obtenerEspecialidad():Observable<any>{

      return this.http.get<any>(this.ApiUrlEspecialidad)
            
      }
    obtenerDescripcion():Observable<any>{

      return this.http.get<any>(this.ApiUrlDescripcion)
            
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
