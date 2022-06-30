import { Component, OnInit,Input } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserModel } from 'src/app/Models/Usuario';
import { PorfolioService } from 'src/app/porfolio.service';



@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  
  formUsuario!:FormGroup;
  usuarioModel:UserModel=new UserModel();
  datosUsuario!:any;
   
  constructor(private creadorForm:FormBuilder,private api:PorfolioService) { }

  ngOnInit(): void {
   
    this.formUsuario=this.creadorForm.group({
      id:[''],
      nombre:[''],
      apellido:[''],
      titulo:[''],
      descripcion:[''],
      fotoPerfil:['']
    })

       this.mostrarUsuario(this.datosUsuario);
    
        }

        editarUsuario(row:any){

          
         
          
            
          
             this.formUsuario.controls["nombre"].setValue(this.datosUsuario.nombre);
             this.formUsuario.controls["apellido"].setValue(this.datosUsuario.apellido);
             this.formUsuario.controls["titulo"].setValue(this.datosUsuario.titulo);
             this.formUsuario.controls["descripcion"].setValue(this.datosUsuario.descripcion);
             this.formUsuario.controls["fotoPerfil"].setValue(this.datosUsuario.fotoPerfil);
             console.log(row)
          }
  

        
mostrarUsuario(data:any){
  this.api.getUser().subscribe(data=>{

this.datosUsuario=data;

  })
}
      
actualizarUsuario(usuario:UserModel):void{
  this.usuarioModel.nombre=this.formUsuario.value.nombre;
  this.usuarioModel.apellido=this.formUsuario.value.apellido;
  this.usuarioModel.titulo=this.formUsuario.value.titulo;
  this.usuarioModel.descripcion=this.formUsuario.value.descripcion;
  this.usuarioModel.fotoPerfil=this.formUsuario.value.fotoPerfil;
  
  this.api.updateUser(this.usuarioModel)
  .subscribe(res=>{
  
  let ref=document.getElementById('cancel')
   ref?.click();
   this.formUsuario.reset(); 
  this.mostrarUsuario(res);
  
  this.formUsuario.reset(); 
  this.mostrarUsuario(res);
  
  
  })
  
  }
  actualizarExperiencia(){}
  agregaExperiencia(){}
 mostrarAgregar(){}
 mostrarActualizar(){}


      }
    