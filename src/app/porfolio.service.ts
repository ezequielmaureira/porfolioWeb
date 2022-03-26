import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ifnombre } from './componentesFuncionales/acerca/nombre';
import { Observable } from 'rxjs';
import { AcercaComponent } from './componentesFuncionales/acerca/acerca.component';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  
  
  private ApiUrl='http://localhost:4000/acercaDe';
  constructor(private http:HttpClient) { }

 
  obtenerAcercaDe():Observable<Ifnombre>{

    return this.http.get<Ifnombre>(this.ApiUrl)
    
      
    }

    
  actualizarNombre(nombre:any, id:number):Observable<any>{
   
    return this.http.put<any>(this.ApiUrl+"/"+id,nombre) 
}
  
actualizarEspecialidad(especialidad:any, id:number):Observable<any>{
   
  return this.http.put<any>(this.ApiUrl+"/"+id,especialidad)

}
actualizarDescripcion(descripcion:any, id:number):Observable<any>{
   
  return this.http.put<any>(this.ApiUrl+"/"+id,descripcion)

}

}
