import { Component, OnInit,Input } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/Models/Usuario';
import { PorfolioService } from 'src/app/porfolio.service';
import { Ifdescripcion } from './descripcion';
import { Ifespecialidad } from './especialidad';
import { Ifnombre } from './nombre';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  
  formUsuario!:FormGroup;
  usuarioModel:Usuario=new Usuario();

 
  constructor(private creadorForm:FormBuilder,private api:PorfolioService) { }

  ngOnInit(): void {


    this.api.getUser().subscribe(data=>{

      this.usuarioModel=data;
      
        })
      
     
    this.formUsuario=this.creadorForm.group({   id:[''],
      nombre:[''], apellido:[''], titulo: [''],descripcion:[''],fotoPerfil:[''] }) }
            
      editarUsuario(nombre:String){this.usuarioModel.nombre=nombre;
      this.formUsuario.controls["nombre"].setValue(this.usuarioModel.nombre)  }

      mostrarNombre(data:any){this.api.getUser().subscribe(data=>{    
      this.usuarioModel=data; } )
        }
      actualizarNombre(){this.usuarioModel.nombre=this.formUsuario.value.nombre;        
        this.api.updateUser(this.usuarioModel,this.usuarioModel.id)
        .subscribe(res=>{
          let ref=document.getElementById('cancel')
          ref?.click();
          this.formUsuario.reset(); 
         this.mostrarNombre(res);
          this.formUsuario.reset(); 
         this.mostrarNombre(res);
         
    })}



    
}