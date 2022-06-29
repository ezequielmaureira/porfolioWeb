import { Component, OnInit,Input } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserModel } from 'src/app/Models/Usuario';
import { PorfolioService } from 'src/app/porfolio.service';
import { Ifdescripcion } from './descripcion';
import { Ifespecialidad } from './especialidad';
import { Ifnombre } from './nombre';


@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  
  formUsuario!:FormGroup;
  usuarioModel:UserModel=new UserModel();
  datosUsuario!:any;
   
  constructor(private creadorForm:FormBuilder,private api:PorfolioService) { }

  ngOnInit(): void {

    
    
        }
      
      }