import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { PorfolioService } from 'src/app/porfolio.service';
import { eduModel} from './educacionModel';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  

  formValue!:FormGroup;
  EducacionModel:eduModel=new eduModel();
  datosEducacion!:any;
  mostrarActualizar!:boolean;
  mostrarAgregar!:boolean;
  
   constructor(private creadorForm:FormBuilder,private api:PorfolioService){}


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

  this.EducacionModel.id=this.formValue.value.id;
  this.EducacionModel.inicio=this.formValue.value.inicio;
  this.EducacionModel.fin=this.formValue.value.fin;
  this.EducacionModel.institucion=this.formValue.value.institucion;
  this.EducacionModel.titulo=this.formValue.value.titulo;
  

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

  })


 


  }

  editarEducacion(row:any){

this.mostrarActualizar=true;
 this.mostrarAgregar=false; 

  
   this.EducacionModel.id=row.id;
   this.formValue.controls["inicio"].setValue(row.inicio);
   this.formValue.controls["fin"].setValue(row.fin);
   this.formValue.controls["institucion"].setValue(row.institucion);
   this.formValue.controls["titulo"].setValue(row.titulo);
  
   console.log(row)
}
 

actualizarEducacion(){
this.EducacionModel.inicio=this.formValue.value.inicio;
this.EducacionModel.fin=this.formValue.value.fin;
this.EducacionModel.institucion=this.formValue.value.institucion;
this.EducacionModel.titulo=this.formValue.value.titulo;


this.api.actualizarEducacion(this.EducacionModel,this.EducacionModel.id)
.subscribe(res=>{

let ref=document.getElementById('cancel')
 ref?.click();
 this.formValue.reset(); 
this.mostrarEducacion(res);

this.formValue.reset(); 
this.mostrarEducacion(res);


})

}

}


