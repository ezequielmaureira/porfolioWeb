import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/Usuario';
import { PorfolioService } from '../porfolio.service';
@Component({
  selector: 'app-usuario-prueba',
  templateUrl: './usuario-prueba.component.html',
  styleUrls: ['./usuario-prueba.component.css']
})
export class UsuarioPruebaComponent implements OnInit {

  public usuario : Usuario |undefined;
  public editUsuario: Usuario|undefined;
  

  constructor(private porfolioService:PorfolioService) { }

  ngOnInit(): void {
    this.getUser();

  }
  
  public getUser():void{
  this.porfolioService.getUser().subscribe({
  next:(response:Usuario)=>{

    this.usuario=response;
  },
  error:(error:HttpErrorResponse)=>{

    alert(error.message)
  }

  })
  

  }


}
