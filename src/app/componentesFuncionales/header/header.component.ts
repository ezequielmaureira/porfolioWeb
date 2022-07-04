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
  NoMostrarLogin!:boolean;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.NoMostrarLogin=true;
  }


  Registrar(){
    console.log(this.usuario);
    const {email,clave}=this.usuario;
    this.authService.register(email,clave).then(res=>{  
      console.log("usted esta registrado:",res)
      alert("usted se Registro con su email:"+email);
     
    })
  
    }

  Ingresar(){
  console.log(this.usuario);
  const {email,clave}=this.usuario;
  this.authService.login(email,clave).then(res=>{  
    
    console.log("usted esta logueado:",res)
    alert("usted esta Logueado con su email:"+email);
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
 


}
