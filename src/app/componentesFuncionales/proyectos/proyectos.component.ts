import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { PorfolioService } from 'src/app/porfolio.service';
import { ProyectModel } from './proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  userLogged=this.authService.getUserLogged();
  formValue!:FormGroup;
  ProyectoModel:ProyectModel=new ProyectModel();
  datosProyecto!:any;
  mostrarActualizar!:boolean;
  mostrarAgregar!:boolean;

  constructor(private creadorForm:FormBuilder, private api:PorfolioService, private authService:AuthService) {}

  ngOnInit(): void {

this.formValue=this.creadorForm.group({

id:[''],
nombre:[''],
ano:[''],
mes:[''],
descripcion:[''],
link:['']


})

this.mostrarProyecto(this.datosProyecto);
console.log(this.datosProyecto)
  }


  clickNuevoProyecto(){

this.formValue.reset();
this.mostrarActualizar=false;
this.mostrarAgregar=true;


  }
 


agregaProyecto(){

  this.ProyectoModel.idProyecto=this.formValue.value.id;
  this.ProyectoModel.nombreProyecto=this.formValue.value.nombre;
  this.ProyectoModel.anoProyecto=this.formValue.value.ano;
  this.ProyectoModel.mesProyecto=this.formValue.value.mes;
  this.ProyectoModel.descripcionProyecto=this.formValue.value.descripcion;
  this.ProyectoModel.linkProyecto=this.formValue.value.link;
  

 this.api.agregarProyecto(this.ProyectoModel).subscribe(data=>{

console.log(data);
alert("Proyecto Agregado")
let ref=document.getElementById('cancel')
 ref?.click();
 this.mostrarProyecto=data;
 this.formValue.reset();
 window.location.reload()


 },
 err=>{

alert("algo paso");

 }

 )}

mostrarProyecto(data:any){
  this.api.obtenerProyecto().subscribe(data=>{

this.datosProyecto=data;
console.log(this.datosProyecto);
  })




}

eliminarProyecto(id:any){
  
  this.api.borrarProyecto(id)
  .subscribe(data=>{
 
    alert("Proyecto eliminada");

  })

  window.location.reload()
 


  }

  editarProyecto(row:any){

this.mostrarActualizar=true;
 this.mostrarAgregar=false; 

  
   this.ProyectoModel.idProyecto=row.idProyecto;
   this.formValue.controls["nombre"].setValue(row.nombreProyecto);
   this.formValue.controls["ano"].setValue(row.anoProyecto);
   this.formValue.controls["mes"].setValue(row.mesProyecto);
   this.formValue.controls["descripcion"].setValue(row.descripcionProyecto);
   this.formValue.controls["link"].setValue(row.linkProyecto);
   
   console.log(row.idProyecto)
}
 

actualizarProyecto(){
this.ProyectoModel.nombreProyecto=this.formValue.value.nombre;
this.ProyectoModel.anoProyecto=this.formValue.value.ano;
this.ProyectoModel.mesProyecto=this.formValue.value.mes;
this.ProyectoModel.descripcionProyecto=this.formValue.value.descripcion;
this.ProyectoModel.linkProyecto=this.formValue.value.link;


this.api.actualizarProyecto(this.ProyectoModel,this.ProyectoModel.idProyecto)
.subscribe(res=>{

let ref=document.getElementById('cancel')
 ref?.click();
 this.formValue.reset(); 
this.mostrarProyecto(res);

this.formValue.reset(); 
this.mostrarProyecto(res);


})

}

}


