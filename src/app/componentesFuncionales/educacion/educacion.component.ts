import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { PorfolioService } from 'src/app/porfolio.service';
import { eduModel } from 'src/app/Models/educacionModel';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  userLogged=this.authService.getUserLogged();

  

  formValue!:FormGroup;
  EducacionModel:eduModel=new eduModel();
  datosEducacion!:any;
  mostrarActualizar!:boolean;
  mostrarAgregar!:boolean;
  
   constructor(private creadorForm:FormBuilder,private api:PorfolioService ,private authService:AuthService){}


  ngOnInit(): void {
    this.formValue=this.creadorForm.group({
        id:[''],
        inicio:[''],
        fin:[''],
        institucion:[''],
        titulo:[''],
        


    })
    this.mostrarEducacion(this.datosEducacion);


  }

  

  clickNuevaEducacion(){
 this.formValue.reset();
 this.mostrarActualizar=false;
 this.mostrarAgregar=true; 

  }
  
  agregaEducacion(){

  this.EducacionModel.idEdu=this.formValue.value.id;
  this.EducacionModel.inicioEdu=this.formValue.value.inicio;
  this.EducacionModel.finEdu=this.formValue.value.fin;
  this.EducacionModel.institucionEdu=this.formValue.value.institucion;
  this.EducacionModel.tituloEdu=this.formValue.value.titulo;
  

 this.api.agregarEducacion(this.EducacionModel).subscribe(data=>{

console.log(data);
alert("Educacion Agregada")
let ref=document.getElementById('cancel')
 ref?.click();
 this.mostrarEducacion=data;
 this.formValue.reset();



 },
 err=>{

alert("algo paso");

 }

 )}

mostrarEducacion(data:any){
  this.api.obtenerEducacion().subscribe(data=>{

this.datosEducacion=data;

  })




}

eliminarEducacion(id:any){
  
  this.api.borrarEducacion(id)
  .subscribe(data=>{
 
    alert("educacion eliminada");
 
    window.location.reload()


  })

 


  }

  editarEducacion(row:any){

this.mostrarActualizar=true;
 this.mostrarAgregar=false; 

  
   this.EducacionModel.idEdu=row.idEdu;
   this.formValue.controls["inicio"].setValue(row.inicioEdu);
   this.formValue.controls["fin"].setValue(row.finEdu);
   this.formValue.controls["institucion"].setValue(row.institucionEdu);
   this.formValue.controls["titulo"].setValue(row.tituloEdu);
  
   console.log(row)
}
 

actualizarEducacion(){
this.EducacionModel.inicioEdu=this.formValue.value.inicio;
this.EducacionModel.finEdu=this.formValue.value.fin;
this.EducacionModel.institucionEdu=this.formValue.value.institucion;
this.EducacionModel.tituloEdu=this.formValue.value.titulo;


this.api.actualizarEducacion(this.EducacionModel,this.EducacionModel.idEdu)
.subscribe(res=>{

let ref=document.getElementById('cancel')
 ref?.click();
 this.formValue.reset(); 
this.mostrarEducacion(res);

this.formValue.reset(); 
this.mostrarEducacion(res);

window.location.reload()
})

}

}


