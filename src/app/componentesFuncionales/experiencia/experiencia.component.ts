import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { PorfolioService } from 'src/app/porfolio.service';
import { ExpModel } from './experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  

  formValue!:FormGroup;
  ExperienciaModel:ExpModel=new ExpModel();
  datosExperiencia!:any;
   
  
   constructor(private creadorForm:FormBuilder,private api:PorfolioService){}


  ngOnInit(): void {
    this.formValue=this.creadorForm.group({
        id:[''],
        año1:[''],
        año2:[''],
        empresa:[''],
        puesto:[''],
        actividad:['']


    })
    this.mostrarExperiencia(this.datosExperiencia);


  }
  
  agregaEducacion(){
  this.ExperienciaModel.id=this.formValue.value.id;
  this.ExperienciaModel.empresa=this.formValue.value.empresa;
  this.ExperienciaModel.puesto=this.formValue.value.puesto;
  this.ExperienciaModel.actividad=this.formValue.value.actividad;

 this.api.agregarExperiencia(this.ExperienciaModel).subscribe(data=>{

console.log(data);
alert("Experiencia Agregada")
 let ref=document.getElementById('cancel')
 ref?.click();
 this.mostrarExperiencia=data;

this.formValue.reset();
 },
 err=>{

alert("algo paso");

 }

 )}

mostrarExperiencia(data:any){
  this.api.obtenerExperiencia().subscribe(data=>{

this.datosExperiencia=data;

  })




}

eliminarExperiencia(id:number){
  
  this.api.borrarExperiencia(id)
  .subscribe(data=>{
    this.datosExperiencia=data as string[];
    
    alert("educacion eliminada");

  })


 


  }

  editarExperiencia(row:any){
   this.ExperienciaModel.id=row.id;
   this.formValue.controls["empresa"].setValue(row.empresa);
   this.formValue.controls["puesto"].setValue(row.puesto);
    this.formValue.controls["actividad"].setValue(row.actividad);
   console.log(row)
}
 

actualizarEducacion(){

this.ExperienciaModel.empresa=this.formValue.value.empresa;
this.ExperienciaModel.puesto=this.formValue.value.puesto;
this.ExperienciaModel.actividad=this.formValue.value.actividad;

this.api.actualizarExperiencia(this.ExperienciaModel,this.ExperienciaModel.id)
.subscribe(res=>{

 let ref=document.getElementById('cancel')
 ref?.click();
 this.formValue.reset(); 
this.mostrarExperiencia(res);


})

}

}


