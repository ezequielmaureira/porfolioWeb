import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiServerUrl='http://localhost:8080';
  constructor(private http:HttpClient) { }


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
