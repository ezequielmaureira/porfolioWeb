import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Models/Usuario';
import { PorfolioService } from '../porfolio.service';
@Component({
  selector: 'app-usuario-prueba',
  templateUrl: './usuario-prueba.component.html',
  styleUrls: ['./usuario-prueba.component.css']
})
export class UsuarioPruebaComponent implements OnInit {

 usuario:UserModel=new UserModel();

  

  constructor(private porfolioService:PorfolioService) { }

  ngOnInit(): void {
    this.porfolioService.getUser().subscribe(data=>{this.usuario=data})

  }
  
  

  }



