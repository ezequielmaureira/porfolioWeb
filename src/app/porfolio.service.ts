import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ifnombre } from './componentesFuncionales/acerca/nombre';
import { Observable } from 'rxjs';
import { AcercaComponent } from './componentesFuncionales/acerca/acerca.component';
import { environment } from 'src/environments/environment';
import { Usuario } from './Models/Usuario';

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


   public getUser():Observable<Usuario>{

    return this.http.get<Usuario>(this.apiServerUrl+'/usuario/traer/43');


   }

   public updateUser(usuario:Usuario):Observable<Usuario>{

   return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/editar`,usuario)
   
 
   }



   
    obtenerNombre():Observable<any>{

    return this.http.get<any>(this.ApiUrlNombre)
          
    }
    obtenerEspecialidad():Observable<any>{

      return this.http.get<any>(this.ApiUrlEspecialidad)
            
      }
    obtenerDescripcion():Observable<any>{

      return this.http.get<any>(this.ApiUrlDescripcion)
            
      }

    
  actualizarNombre(nombre:any, id:number):Observable<any>{
   
    return this.http.put<any>(this.ApiUrlNombre+"/"+id,nombre) 
}
  
actualizarEspecialidad(especialidad:any, id:number):Observable<any>{
   
  return this.http.put<any>(this.ApiUrlEspecialidad+"/"+id,especialidad)

}
   
actualizarDescripcion(descripcion:any, id:number):Observable<any>{
   
  return this.http.put<any>(this.ApiUrlDescripcion+"/"+id,descripcion) 
}




agregarExperiencia(data:any):Observable<any>{

  return this.http.post<any>(this.ApiUrlExperiencia,data)
  
 

  }




obtenerExperiencia():Observable<any>{

  return this.http.get<any>(this.ApiUrlExperiencia)
  
    
  }




  
actualizarExperiencia(data:any, id:number):Observable<any>{

  return this.http.put<any>(this.ApiUrlExperiencia+"/"+id,data)
  

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








