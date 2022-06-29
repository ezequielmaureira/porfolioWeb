import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ifnombre } from './componentesFuncionales/acerca/nombre';
import { Observable } from 'rxjs';
import { AcercaComponent } from './componentesFuncionales/acerca/acerca.component';
import { environment } from 'src/environments/environment';
import { UserModel} from './Models/Usuario';

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


   public getUser():Observable<UserModel>{

    return this.http.get<UserModel>(this.apiServerUrl+'/usuario/traer/1');


   }

   public updateUser(usuario:UserModel, id:number):Observable<any>{

   return this.http.put<any>(this.apiServerUrl+"/usuario/editar/"+id,usuario);
   
 
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


agregarCompetencia(data:any):Observable<any>{

  return this.http.post<any>(this.ApiUrlCompetencia,data)
  
 
}





obtenerCompetencia():Observable<any>{

  return this.http.get<any>(this.ApiUrlCompetencia)
  

  }





actualizarCompetencia(data:any, id:number):Observable<any>{

  return this.http.put<any>(this.ApiUrlCompetencia+"/"+id,data)
  

}
borrarCompetencia(id:any){

  return this.http.delete(this.ApiUrlCompetencia+"/"+id)
  
  

}





}








