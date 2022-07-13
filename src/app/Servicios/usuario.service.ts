import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcercaComponent } from '../componentesFuncionales/acerca/acerca.component';
import { environment } from 'src/environments/environment';
import { UserModel} from '../Models/Usuario';


const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  
  private apiServerUrl='http://localhost:8080';


  constructor(private http:HttpClient) { }
 
  //SERVICIO DE USUARIO------------------------------------------------------------------------------
   public getUser(){

    return this.http.get<UserModel>(this.apiServerUrl+'/usuario/traer/43');
   }
   public updateUser( obj:UserModel,id:number){
   return this.http.put(this.apiServerUrl+'/usuario/editar/'+id,obj);
   }
  }








