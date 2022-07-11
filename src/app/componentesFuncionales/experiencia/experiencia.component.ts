import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { PorfolioService } from 'src/app/porfolio.service';
import { ExpModel } from 'src/app/Models/experiencia';

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
        actividad:[''],
        foto:['']


    })
    
    this.mostrarExperiencia(this.datosExperiencia);
   

  }

  clickNuevaEmpresa(){
 this.formValue.reset();
 this.mostrarActualizar=false;
 this.mostrarAgregar=true; 

  }
  
  agregaExperiencia(){

  this.ExperienciaModel.idExp=this.formValue.value.id;
  this.ExperienciaModel.inicioExp=this.formValue.value.inicio;
  this.ExperienciaModel.finExp=this.formValue.value.fin;
  this.ExperienciaModel.empresaExp=this.formValue.value.empresa;
  this.ExperienciaModel.puestoExp=this.formValue.value.puesto;
  this.ExperienciaModel.actividadExp=this.formValue.value.actividad;
  this.ExperienciaModel.fotoExp=this.formValue.value.foto;

 this.api.agregarExperiencia(this.ExperienciaModel).subscribe(data=>{

console.log(data);
alert("Experiencia Agregada")
let ref=document.getElementById('cancel')
 ref?.click();
 this.mostrarExperiencia=data;
 this.formValue.reset();
 window.location.reload()


 },
 err=>{

alert("algo paso");

 }

 )}

mostrarExperiencia(data:any){
  this.api.obtenerExperiencia().subscribe(data=>{

this.datosExperiencia=data;
console.log(this.datosExperiencia);
  })




}

eliminarExperiencia(id:any){
  
  this.api.borrarExperiencia(id)
  .subscribe(data=>{
 
    alert("educacion eliminada");

  })

  window.location.reload()
 


  }

  editarExperiencia(row:any){

this.mostrarActualizar=true;
 this.mostrarAgregar=false; 

  
   this.ExperienciaModel.idExp=row.idExp;
   this.formValue.controls["inicio"].setValue(row.inicioExp);
   this.formValue.controls["fin"].setValue(row.finExp);
   this.formValue.controls["empresa"].setValue(row.empresaExp);
   this.formValue.controls["puesto"].setValue(row.puestoExp);
   this.formValue.controls["actividad"].setValue(row.actividadExp);
   this.formValue.controls["foto"].setValue(row.fotoExp);
   console.log(row.idExp)
}
 

actualizarExperiencia(){
this.ExperienciaModel.inicioExp=this.formValue.value.inicio;
this.ExperienciaModel.finExp=this.formValue.value.fin;
this.ExperienciaModel.empresaExp=this.formValue.value.empresa;
this.ExperienciaModel.puestoExp=this.formValue.value.puesto;
this.ExperienciaModel.actividadExp=this.formValue.value.actividad;
this.ExperienciaModel.fotoExp=this.formValue.value.foto;

this.api.actualizarExperiencia(this.ExperienciaModel,this.ExperienciaModel.idExp)
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


