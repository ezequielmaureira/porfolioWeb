import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiServerUrl='https://backendzeze.herokuapp.com';


  constructor(private http:HttpClient) {
   }


   
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
 
}
