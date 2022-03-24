import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  formValue!:FormGroup;
  constructor(private creadorForm:FormBuilder) { }

  ngOnInit(): void {
  }
editarNombre(){

  
}
actualizarNombre(){


}
}
