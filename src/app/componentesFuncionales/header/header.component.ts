import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogged=this.authService.getUserLogged();
 
  usuario={
  email:'',
  clave:''
  }
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


  Registrar(){
    console.log(this.usuario);
    const {email,clave}=this.usuario;
    this.authService.register(email,clave).then(res=>{  
      console.log("usted esta registrado:",res)
      alert(email);
  
    })
  
    }

  Ingresar(){
  console.log(this.usuario);
  const {email,clave}=this.usuario;
  this.authService.login(email,clave).then(res=>{  
    console.log("usted esta logueado:",res)

  })

  }
  IngresarConGoogle(){
     const {email,clave}=this.usuario;
    this.authService.loginWithGoogle(email,clave).then(res=>{  
      console.log("se logueo con google:",res)
      
  
    })
  
    }
    ObtenerUsuario(){
    this.authService.getUserLogged().subscribe(res=>{


      console.log(res?.email)
    });

    }
    Logout(){
      this.authService.logout();


    }

}
