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
  formEspecialidad!:FormGroup;
  formNombre!:FormGroup;
  formDescripcion!:FormGroup;
  formUsuario!:FormGroup;
  usuario:Usuario=new Usuario("","","","","");
  ModeloNombre:Ifnombre=new Ifnombre();
  ModeloEspecialidad:Ifespecialidad=new Ifespecialidad();
  ModeloDescripcion:Ifdescripcion=new Ifdescripcion();

  Nomb:any;
  Espec:any;
  Desc:any;  
 
  constructor(private creadorForm:FormBuilder,private api:PorfolioService) { }

  ngOnInit(): void {
     
    this.formUsuario=this.creadorForm.group({   
      nombre:[''], apellido:[''], titulo: [''],descripcion:[''],fotoPerfil:['']
        

        })

      this.formNombre=this.creadorForm.group({   
      nombre:[''],
        })
      this.formDescripcion=this.creadorForm.group({     
      descripcion:['']     
    })
    this.formEspecialidad=this.creadorForm.group({      
      especialidad:['']     
    })
    this.mostrarDatosNombre(this.Nomb);
    this.mostrarDatosEspecialidad(this.Espec);
    this.mostrarDatosDescripcion(this.Desc);
    
     }
    

  editarNombre(n:any){
    this.ModeloNombre.id=n.id;
    this.formNombre.controls["nombre"].setValue(n.nombre);      
                    }
 actualizarNombre(){ 
  this.ModeloNombre.nombre=this.formNombre.value.nombre;
  this.api.actualizarNombre(this.ModeloNombre,this.ModeloNombre.id).subscribe(data=>{       
    this.mostrarDatosNombre(this.Nomb);
    this.mostrarDatosEspecialidad(this.Espec);
    this.mostrarDatosDescripcion(this.Desc);
                  })
                   }  
 editarEspecialidad(i:any){
  this.ModeloEspecialidad.id=i.id;
  this.formEspecialidad.controls["especialidad"].setValue(i.especialidad);   
  }
 actualizarEspecialidad(){
  this.ModeloEspecialidad.especialidad=this.formEspecialidad.value.especialidad;
  this.api.actualizarEspecialidad(this.ModeloEspecialidad,this.ModeloEspecialidad.id).subscribe(data=>{
    let ref=document.getElementById('cancel')
    ref?.click();
    this.mostrarDatosNombre(this.Nomb);
    this.mostrarDatosEspecialidad(this.Espec);
    this.mostrarDatosDescripcion(this.Desc);
   
})
}

editarDescripcion(n:any){
  this.ModeloDescripcion.id=n.id;
  this.formDescripcion.controls["descripcion"].setValue(n.descripcion);   
}
actualizarDesc(){
  this.ModeloDescripcion.descripcion=this.formDescripcion.value.descripcion;
  this.api.actualizarDescripcion(this.ModeloDescripcion,this.ModeloDescripcion.id).subscribe(data=>{
    let ref=document.getElementById('cancel')
    ref?.click();
    this.mostrarDatosNombre(this.Nomb);
    this.mostrarDatosEspecialidad(this.Espec);
    this.mostrarDatosDescripcion(this.Desc);
   
})
}


mostrarDatosNombre(data:any){
  this.api.obtenerNombre().subscribe(data=>{
  this.Nomb=data;
  console.log(this.Nomb);
})
}
mostrarDatosEspecialidad(data1:any){

this.api.obtenerEspecialidad().subscribe(data1=>{
  this.Espec=data1;
  console.log(this.Espec);
})
}
mostrarDatosDescripcion(data2:any){
this.api.obtenerDescripcion().subscribe(data2=>{
  this.Desc=data2;
  console.log(this.Desc);
})



}

mostrarUsuario(data:any){
  this.api.getUser().subscribe(data=>{

this.usuario=data;

  })
}

}
