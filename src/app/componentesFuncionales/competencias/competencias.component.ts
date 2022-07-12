import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartData, ChartEvent, ChartType,ChartConfiguration } from 'chart.js';
import { AuthService } from 'src/app/Servicios/auth.service';

import { compModel } from 'src/app/Models/competenciasModel';
import { CompetenciaService } from 'src/app/Servicios/competencia.service';
@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent  {
   userLogged=this.authService.getUserLogged();
 
  formValue!:FormGroup;
  CompetenciasModel:compModel=new compModel();
  datosCompetencia!:any;
  mostrarActualizar!:boolean;
  mostrarAgregar!:boolean;
  mostrarBotones!:boolean;
  
   constructor(private creadorForm:FormBuilder,private api:CompetenciaService ,private authService:AuthService){}


  ngOnInit(): void {
    this.formValue=this.creadorForm.group({
        id:[''],
        nombre:[''],
        grado:[''],
        foto:[''],
        
       


    })
    this.mostrarCompetencia(this.datosCompetencia);
  

  }

  

  clickNuevaCompetencia(){
 this.formValue.reset();
 this.mostrarActualizar=false;
 this.mostrarAgregar=true; 

  }
  
  agregaCompetencia(){

  this.CompetenciasModel.id=this.formValue.value.id;
  this.CompetenciasModel.nombre=this.formValue.value.nombre;
  this.CompetenciasModel.grado=this.formValue.value.grado;
  this.CompetenciasModel.foto=this.formValue.value.foto;
  

 this.api.agregarCompetencia(this.CompetenciasModel).subscribe(data=>{

console.log(data);
alert("Competencia Agregada")
let ref=document.getElementById('cancel')
 ref?.click();
 this.mostrarCompetencia=data;
 this.formValue.reset();
 window.location.reload()


 },
 

 )}

mostrarCompetencia(data:any){
  this.api.obtenerCompetencia().subscribe(data=>{

this.datosCompetencia=data;


  })




}

eliminarCompetencia(id:any){
  
  this.api.borrarCompetencia(id)
  .subscribe(data=>{
 
    alert("Competencia eliminada");

  })

  window.location.reload()
 


  }

  editarCompetencia(row:any){

this.mostrarActualizar=true;
 this.mostrarAgregar=false; 

  
   this.CompetenciasModel.id=row.id;
   this.formValue.controls["nombre"].setValue(row.nombre);
   this.formValue.controls["grado"].setValue(row.grado);
   this.formValue.controls["foto"].setValue(row.foto);
    
   console.log(row)
}
 

actualizarCompetencia(){
this.CompetenciasModel.nombre=this.formValue.value.nombre;
this.CompetenciasModel.grado=this.formValue.value.grado;
this.CompetenciasModel.foto=this.formValue.value.foto;


this.api.actualizarCompetencia(this.CompetenciasModel,this.CompetenciasModel.id)
.subscribe(res=>{

let ref=document.getElementById('cancel')
 ref?.click();
 this.formValue.reset(); 
this.mostrarCompetencia(res);

this.formValue.reset(); 
this.mostrarCompetencia(res);


})
}




 }







  
 











