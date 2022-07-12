import { Component, OnInit,Input } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/Servicios/auth.service';
import { UserModel } from 'src/app/Models/Usuario';
import { PorfolioService } from 'src/app/Servicios/porfolio.service';



@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {


  usuarioModel:UserModel=new UserModel
  datosUsuario!:UserModel;
  userLogged=this.authService.getUserLogged();
  formUsuario!:FormGroup;
 
 
  
   
  constructor(private creadorForm:FormBuilder,private api:PorfolioService,private authService:AuthService) { }

  ngOnInit(): void {
   
    this.formUsuario=this.creadorForm.group({
      id:[''],
      nombre:[''],
      apellido:[''],
      titulo:[''],
      descripcion:[''],
      fotoPerfil:[''],
      fotoBanner1:[''],
      fotoBanner2:[''],
      fotoBanner3:[''],
    })

       this.mostrarUsuario(this.datosUsuario);
     
        }

        editarUsuario(row:any){

          
         
          
            
          
             this.formUsuario.controls["nombre"].setValue(this.datosUsuario.nombre);
             this.formUsuario.controls["apellido"].setValue(this.datosUsuario.apellido);
             this.formUsuario.controls["titulo"].setValue(this.datosUsuario.titulo);
             this.formUsuario.controls["descripcion"].setValue(this.datosUsuario.descripcion);
             this.formUsuario.controls["fotoPerfil"].setValue(this.datosUsuario.fotoPerfil);
             this.formUsuario.controls["fotoBanner1"].setValue(this.datosUsuario.fotoBanner1);
             this.formUsuario.controls["fotoBanner2"].setValue(this.datosUsuario.fotoBanner2);
             this.formUsuario.controls["fotoBanner3"].setValue(this.datosUsuario.fotoBanner3);
          }
  

        
mostrarUsuario(data:UserModel){
  this.api.getUser().subscribe(data=>{

this.datosUsuario=data;


  })
}
      
actualizarUsuario(usuario:UserModel){
  this.usuarioModel.nombre=this.formUsuario.value.nombre;
  this.usuarioModel.apellido=this.formUsuario.value.apellido;
  this.usuarioModel.titulo=this.formUsuario.value.titulo;
  this.usuarioModel.descripcion=this.formUsuario.value.descripcion;
  this.usuarioModel.fotoPerfil=this.formUsuario.value.fotoPerfil;
  this.usuarioModel.fotoBanner1=this.formUsuario.value.fotoBanner1;
  this.usuarioModel.fotoBanner2=this.formUsuario.value.fotoBanner2;
  this.usuarioModel.fotoBanner3=this.formUsuario.value.fotoBanner3;

  
  this.api.updateUser(this.usuarioModel,43)
  .subscribe(res=>{
  
  let ref=document.getElementById('cancel')
   ref?.click();
   this.formUsuario.reset(); 
  this.mostrarUsuario(this.datosUsuario);
  
  this.formUsuario.reset(); 
  this.mostrarUsuario(this.datosUsuario);
  
  
  })
  
  }



      }
    