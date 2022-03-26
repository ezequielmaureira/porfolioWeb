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
  eduModelObj:Ifnombre=new Ifnombre();
  acercade!:any;  
 
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

    this.mostrarDatosAcercaDe(this.acercade);
    

  }
  

  
  editarNombre(row:any){
    this.eduModelObj.id=row.id;
    this.formNombre.controls["nombre"].setValue(row.nombre);
    
 

   
  
}

actualizarNombre(nombre:any, id:number){
 
  this.eduModelObj.nombre=this.formNombre.value.nombre;
  this.api.actualizarNombre(id,nombre).subscribe(data=>{

  
  })
 console.log(this.eduModelObj.nombre)

  }

  





mostrarDatosAcercaDe(name:Ifnombre){
  this.api.obtenerNombre().subscribe(name=>{

   this.acercade=name;
  console.log(this.acercade);
})
}


  
editarDescripcion(){

  
}
actualizarDescripcion(){


}
  
editarEspecialidad(){

  
}

actualizarEspecialidad(){


}

}
