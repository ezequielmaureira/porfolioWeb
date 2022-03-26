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
  acercade!:any;  
 
  constructor(private creadorForm:FormBuilder,private api:PorfolioService) { }

  ngOnInit(): void {
  

    this.formNombre=this.creadorForm.group({
    
      id:[''],
      nombre:[''],
     
    })

    this.formDescripcion=this.creadorForm.group({
     
      descripcion:['']
     
    })

    this.formEspecialidad=this.creadorForm.group({
     
      especialidad:['']
     
    })

    this.mostrarDatosAcercaDe(this.acercade);
     }

 
  editarNombre(n:any){
    this.Modelo.id=n.id;
    this.formNombre.controls["nombre"].setValue(n.nombre);
      
}

actualizarNombre(){
 
  this.Modelo.nombre=this.formNombre.value.nombre;

  this.api.actualizarNombre(this.Modelo,this.Modelo.id).subscribe(data=>{

    let ref=document.getElementById('cancel')
    ref?.click();
    this.formNombre.reset(); 
   this.mostrarDatosAcercaDe(data);
  
  })


  }

  
editarEspecialidad(n:any){
  this.Modelo.id=n.id;
  this.formEspecialidad.controls["especialidad"].setValue(n.especialidad);
 
      
}


actualizarEspecialidad(){
 
  this.Modelo.especialidad=this.formNombre.value.especialidad;

  this.api.actualizarEspecialidad(this.Modelo,this.Modelo.id).subscribe(data=>{

    let ref=document.getElementById('cancel')
    ref?.click();
    this.formEspecialidad.reset(); 
   this.mostrarDatosAcercaDe(data);
  
  })

}






mostrarDatosAcercaDe(name:Ifnombre){
  this.api.obtenerNombre().subscribe(name=>{

   this.acercade=name;
  console.log(this.acercade);
})
}

}
