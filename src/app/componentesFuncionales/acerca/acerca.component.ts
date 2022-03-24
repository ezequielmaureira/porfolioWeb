import { Component, OnInit,Input } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  
  formNombre!:FormGroup;
  formDescripcion!:FormGroup;

  constructor(private creadorForm:FormBuilder) { }

  ngOnInit(): void {


    this.formNombre=this.creadorForm.group({
     
      nombre:['']
     
    })

    this.formDescripcion=this.creadorForm.group({
     
      descripcion:['']
     
    })


  }
  
editarNombre(){

  
}
actualizarNombre(){


}

  
editarDescripcion(){

  
}
actualizarDescripcion(){


}
}
