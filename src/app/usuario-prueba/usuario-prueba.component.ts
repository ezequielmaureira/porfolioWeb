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

 usuario:Usuario=new Usuario("","","","","");

  

  constructor(private porfolioService:PorfolioService) { }

  ngOnInit(): void {
    this.porfolioService.getUser().subscribe(data=>{this.usuario=data})

  }
  
  

  }



