import { Component, OnInit,Input } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { PorfolioService } from 'src/app/porfolio.service';
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
  Modelo:Ifnombre=new Ifnombre();
  Nomb:any;
  Espec:any;
  Desc:any;  
 
  constructor(private creadorForm:FormBuilder,private api:PorfolioService) { }

  ngOnInit(): void {
      this.formNombre=this.creadorForm.group({   
      nombre:[''],
        })
      this.formDescripcion=this.creadorForm.group({     
      descripcion:['']     
    })
    this.formEspecialidad=this.creadorForm.group({      
      especialidad:['']     
    })
    this.mostrarDatosAcercaDe(this.Nomb);
    this.mostrarDatosAcercaDe(this.Espec);
    this.mostrarDatosAcercaDe(this.Desc);
     }


  editarNombre(n:any){
    this.Modelo.id=n.id;
    this.formNombre.controls["nombre"].setValue(n.nombre);      
                    }
 actualizarNombre(){ 
  this.Modelo.nombre=this.formNombre.value.nombre;
  this.api.actualizarNombre(this.Modelo,this.Modelo.id).subscribe(data=>{       
  this.mostrarDatosAcercaDe(data);  
                  })
                   }  
 editarEspecialidad(n:any){
  this.Modelo.id=n.id;
  this.formEspecialidad.controls["especialidad"].setValue(n.especialidad);   
  }
 actualizarEspecialidad(){
  this.Modelo.especialidad=this.formEspecialidad.value.especialidad;
  this.api.actualizarEspecialidad(this.Modelo,this.Modelo.id).subscribe(data=>{
    let ref=document.getElementById('cancel')
    ref?.click();
   
  this.mostrarDatosAcercaDe(data);
})
}

editarDescripcion(n:any){
  this.Modelo.id=n.id;
  this.formDescripcion.controls["descripcion"].setValue(n.descripcion);   
}
actualizarDescripcion(){
  this.Modelo.descripcion=this.formDescripcion.value.descripcion;
  this.api.actualizarDescripcion(this.Modelo,this.Modelo.id).subscribe(data=>{
  let ref=document.getElementById('cancel')
  ref?.click();
   
  this.mostrarDatosAcercaDe(data);
})
}
mostrarDatosAcercaDe(data:any){
  this.api.obtenerNombre().subscribe(data=>{
  this.Nomb=data;
  console.log(this.Nomb);
})
this.api.obtenerEspecialidad().subscribe(data=>{
  this.Espec=data;
  console.log(this.Espec);
})
this.api.obtenerDescripcion().subscribe(data=>{
  this.Desc=data;
  console.log(this.Desc);
})

}
}


