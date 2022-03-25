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
  nombre:Ifnombre;
  constructor(private creadorForm:FormBuilder,private api:PorfolioService) { }

  ngOnInit(): void {


    this.formNombre=this.creadorForm.group({
     
      nombre:['']
     
    })

    this.formDescripcion=this.creadorForm.group({
     
      descripcion:['']
     
    })

    this.formEspecialidad=this.creadorForm.group({
     
      descripcion:['']
     
    })

    this.mostrarNombre(this.nombre);
    

  }
  
editarNombre(){

  
}
actualizarNombre(){


}

mostrarNombre(nombre:Ifnombre){
  this.api.obtenerNombre().subscribe(nombre=>{

   this.nombre=nombre;
  console.log(this.nombre);
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
