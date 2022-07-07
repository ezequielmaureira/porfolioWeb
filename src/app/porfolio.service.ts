import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcercaComponent } from './componentesFuncionales/acerca/acerca.component';
import { environment } from 'src/environments/environment';
import { UserModel} from './Models/Usuario';


const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  
  
  private apiServerUrl='http://localhost:8080';


  constructor(private http:HttpClient) { }
 
  //SERVICIO DE USUARIO------------------------------------------------------------------------------
   public getUser(){

    return this.http.get<UserModel>(this.apiServerUrl+'/usuario/traer/43');
   }
   public updateUser( obj:UserModel,id:number){
   return this.http.put(this.apiServerUrl+'/usuario/editar/'+id,obj);
   }
   
 //SERVICIO DE COMPETENCIAS----------------------------------------------------------------------------
 
   agregarCompetencia(data:any):Observable<any>{

   return this.http.post<any>(this.apiServerUrl+'/competencia/crear/',data)
   }
   obtenerCompetencia():Observable<any>{

   return this.http.get<any>(this.apiServerUrl+'/competencia/traer')
   }
   
   actualizarCompetencia(data:any, id:number):Observable<any>{

   return this.http.put<any>(this.apiServerUrl+'/competencia/editar/'+id,data)
  
   }
   borrarCompetencia(id:any){

   return this.http.delete(this.apiServerUrl+'/competencia/borrar/'+id)
   }

 //SERVICIO DE EXPERIENCIA------------------------------------------------------------------------
   
   agregarExperiencia(data:any):Observable<any>{

   return this.http.post<any>(this.apiServerUrl+'/experiencia/crear/',data)
   }
   obtenerExperiencia():Observable<any>{

   return this.http.get<any>(this.apiServerUrl+'/experiencia/traer')
   }
  
   actualizarExperiencia(data:any, id:number):Observable<any>{

   return this.http.put<any>(this.apiServerUrl+'/experiencia/editar/'+id,data)
 
   }
   borrarExperiencia(id:any){

   return this.http.delete(this.apiServerUrl+'/experiencia/borrar/'+id)
   }

  //SERVICIOS DE EDUCACION------------------------------------------------------------------- 

    agregarEducacion(data:any):Observable<any>{

    return this.http.post<any>(this.apiServerUrl+'/educacion/crear/',data)
    }
    obtenerEducacion():Observable<any>{
 
    return this.http.get<any>(this.apiServerUrl+'/educacion/traer')
    }
   
    actualizarEducacion(data:any, id:number):Observable<any>{
 
    return this.http.put<any>(this.apiServerUrl+'/educacion/editar/'+id,data)
  
    }
    borrarEducacion(id:any){
 
    return this.http.delete(this.apiServerUrl+'/educacion/borrar/'+id)
    }
  
  
  //SERVICIOS DE PROYECTOS------------------------------------------------------------------
  
  agregarProyecto(data:any):Observable<any>{

    return this.http.post<any>(this.apiServerUrl+'/proyecto/crear/',data)
    }
    obtenerProyecto():Observable<any>{
 
    return this.http.get<any>(this.apiServerUrl+'/proyecto/traer')
    }
   
    actualizarProyecto(data:any, id:number):Observable<any>{
 
    return this.http.put<any>(this.apiServerUrl+'/proyecto/editar/'+id,data)
  
    }
    borrarProyecto(id:any){
 
    return this.http.delete(this.apiServerUrl+'/proyecto/borrar/'+id)
    }
  
  




}









