import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartData, ChartEvent, ChartType,ChartConfiguration } from 'chart.js';
import { AuthService } from 'src/app/auth.service';
import { PorfolioService } from 'src/app/porfolio.service';
import { compModel } from './competenciasModel';
@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent  {
   

  usuario={
    email:'',
    clave:''
    }

  formValue!:FormGroup;
  CompetenciasModel:compModel=new compModel();
  datosCompetencia!:any;
  mostrarActualizar!:boolean;
  mostrarAgregar!:boolean;
  mostrarBotones!:boolean;
  NomostrarBotones!:boolean;
   constructor(private creadorForm:FormBuilder,private api:PorfolioService ,private authService:AuthService){}


  ngOnInit(): void {
    this.formValue=this.creadorForm.group({
        id:[''],
        nombre:[''],
        grado:[''],
        
       


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
  

 this.api.agregarCompetencia(this.CompetenciasModel).subscribe(data=>{

console.log(data);
alert("Competencia Agregada")
let ref=document.getElementById('cancel')
 ref?.click();
 this.mostrarCompetencia=data;
 this.formValue.reset();



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


 


  }

  editarCompetencia(row:any){

this.mostrarActualizar=true;
 this.mostrarAgregar=false; 

  
   this.CompetenciasModel.id=row.id;
   this.formValue.controls["nombre"].setValue(row.nombre);
   this.formValue.controls["grado"].setValue(row.grado);
    
   console.log(row)
}
 

actualizarCompetencia(){
this.CompetenciasModel.nombre=this.formValue.value.nombre;
this.CompetenciasModel.grado=this.formValue.value.grado;


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
IngresarConGoogle(){
  const {email,clave}=this.usuario;
 this.authService.loginWithGoogle(email,clave).then(res=>{  
   console.log("se logueo con google:",res)
   this.NomostrarBotones=false;
   

 })

 }




}


  
 











