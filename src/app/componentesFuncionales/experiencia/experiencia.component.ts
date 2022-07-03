import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { PorfolioService } from 'src/app/porfolio.service';
import { ExpModel } from './experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  userLogged=this.authService.getUserLogged();

  formValue!:FormGroup;
  ExperienciaModel:ExpModel=new ExpModel();
  datosExperiencia!:any;
  mostrarActualizar!:boolean;
  mostrarAgregar!:boolean;
  
   constructor(private creadorForm:FormBuilder,private api:PorfolioService,private authService:AuthService){}


  ngOnInit(): void {
    this.formValue=this.creadorForm.group({
        id:[''],
        inicio:[''],
        fin:[''],
        empresa:[''],
        puesto:[''],
        actividad:['']


    })
    this.mostrarExperiencia(this.datosExperiencia);


  }

  clickNuevaEmpresa(){
 this.formValue.reset();
 this.mostrarActualizar=false;
 this.mostrarAgregar=true; 

  }
  
  agregaExperiencia(){

  this.ExperienciaModel.id=this.formValue.value.id;
  this.ExperienciaModel.inicio=this.formValue.value.inicio;
  this.ExperienciaModel.fin=this.formValue.value.fin;
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

eliminarExperiencia(id:any){
  
  this.api.borrarExperiencia(id)
  .subscribe(data=>{
 
    alert("educacion eliminada");

  })


 


  }

  editarExperiencia(row:any){

this.mostrarActualizar=true;
 this.mostrarAgregar=false; 

  
   this.ExperienciaModel.id=row.id;
   this.formValue.controls["inicio"].setValue(row.inicio);
   this.formValue.controls["fin"].setValue(row.fin);
   this.formValue.controls["empresa"].setValue(row.empresa);
   this.formValue.controls["puesto"].setValue(row.puesto);
   this.formValue.controls["actividad"].setValue(row.actividad);
   console.log(row)
}
 

actualizarExperiencia(){
this.ExperienciaModel.inicio=this.formValue.value.inicio;
this.ExperienciaModel.fin=this.formValue.value.fin;
this.ExperienciaModel.empresa=this.formValue.value.empresa;
this.ExperienciaModel.puesto=this.formValue.value.puesto;
this.ExperienciaModel.actividad=this.formValue.value.actividad;

this.api.actualizarExperiencia(this.ExperienciaModel,this.ExperienciaModel.id)
.subscribe(res=>{

let ref=document.getElementById('cancel')
 ref?.click();
 this.formValue.reset(); 
this.mostrarExperiencia(res);

this.formValue.reset(); 
this.mostrarExperiencia(res);


})

}

}


