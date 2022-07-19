import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  private apiServerUrl='https://backendzeze.herokuapp.com';


  constructor(private http:HttpClient) { }


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
}
