import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ifnombre } from './componentesFuncionales/acerca/nombre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  
  
  private ApiUrl='http://localhost:4000/acercaDe';
  constructor(private http:HttpClient) { }

 
  obtenerNombre():Observable<Ifnombre>{

    return this.http.get<Ifnombre>(this.ApiUrl)
    
      
    }

    
  actualizarNombre(data:any, id:number):Observable<any>{

    return this.http.put<any>(this.ApiUrl+"/"+id,data)
    


}
}
