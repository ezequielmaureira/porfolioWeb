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
  
  
  private ApiUrlNombre='http://localhost:5000/Nombre';
  private ApiUrlEspecialidad='http://localhost:5000/Especialidad';
  private ApiUrlDescripcion='http://localhost:5000/Descripcion';
  private ApiUrlExperiencia='http://localhost:5000/Experiencia';
  private ApiUrlEducacion= 'http://localhost:5000/Educacion';
  private ApiUrlCompetencia= 'http://localhost:5000/Competencia';
  private apiServerUrl='http://localhost:8080';


  constructor(private http:HttpClient) { }


   public getUser(){

    return this.http.get<UserModel>(this.apiServerUrl+'/usuario/traer/43');


   }

   public updateUser( obj:UserModel,id:number){

   return this.http.put(this.apiServerUrl+'/usuario/editar/'+id,obj);
   
 
   }
   
   
   
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



   actualizarExperiencia(data:any, id:number):Observable<any>{

    return this.http.put<any>(this.ApiUrlExperiencia+"/"+id,data)
    
  
  }
   
  



agregarExperiencia(data:any):Observable<any>{

  return this.http.post<any>(this.ApiUrlExperiencia,data)
  
 

  }




obtenerExperiencia():Observable<any>{

  return this.http.get<any>(this.ApiUrlExperiencia)
  
    
  }




  

borrarExperiencia(id:any){

  return this.http.delete(this.ApiUrlExperiencia+"/"+id)
  
  }


agregarEducacion(data:any):Observable<any>{

  return this.http.post<any>(this.ApiUrlEducacion,data)
  
 
}





obtenerEducacion():Observable<any>{

  return this.http.get<any>(this.ApiUrlEducacion)
  

  }





actualizarEducacion(data:any, id:number):Observable<any>{

  return this.http.put<any>(this.ApiUrlEducacion+"/"+id,data)
  

}
borrarEducacion(id:any){

  return this.http.delete(this.ApiUrlEducacion+"/"+id)
  
  

}






}








