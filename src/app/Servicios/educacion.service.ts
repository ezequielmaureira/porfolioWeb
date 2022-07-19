import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl='https://backendzeze.herokuapp.com';


  constructor(private http:HttpClient) { }

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
  



}
