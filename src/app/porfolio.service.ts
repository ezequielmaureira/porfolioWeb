import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ifnombre } from './componentesFuncionales/acerca/nombre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  
  datoNombre:Ifnombre;
  private ApiUrl='http://localhost:4000/nombre';
  constructor(private http:HttpClient) { }

 
  obtenerNombre():Observable<any>{

    return this.http.get<Ifnombre>(this.ApiUrl)
    
      
    }



}
