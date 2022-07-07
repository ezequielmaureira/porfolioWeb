import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { UserModel } from 'src/app/Models/Usuario';
import { PorfolioService } from 'src/app/porfolio.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  datosUsuario!:UserModel;
  NoMostrarLogin:boolean=true;
  usuario={ email:'',clave:'' }
  userLogged=this.authService.getUserLogged();
    
  constructor(private authService:AuthService, private api:PorfolioService) { }

  ngOnInit(): void {
    this.mostrarUsuario(this.datosUsuario);
    
   }
   Registrar(){
    console.log(this.usuario);
    const {email,clave}=this.usuario;
    this.authService.register(email,clave).then(res=>{  
      
      console.log("usted esta Registrado:",res)
      
  
    })
     
    }
   
   


  Ingresar(){
  console.log(this.usuario);
  const {email,clave}=this.usuario;
  this.authService.login(email,clave).then(res=>{  
    
    console.log("usted esta logueado:",res)
   this.NoMostrarLogin=false;
    
    
    

  })
   
  }
  IngresarConGoogle(){
   
     const {email,clave}=this.usuario;
    this.authService.loginWithGoogle(email,clave).then(res=>{  
      console.log("se logueo con google:",res)
      this.NoMostrarLogin=false;
      
  
    })
  
    }
    ObtenerUsuario(){
    this.authService.getUserLogged().subscribe(res=>{
     

      console.log(res?.email)
    });

    }
    Logout(){
      this.authService.logout();
     
      window.location.reload()


    }
    mostrarUsuario(data:UserModel){
      this.api.getUser().subscribe(data=>{
    
    this.datosUsuario=data;
    
    
      })
    }

   
}