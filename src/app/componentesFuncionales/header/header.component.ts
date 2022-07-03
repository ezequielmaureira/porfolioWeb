import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  usuario={
  email:'',
  clave:''
  }
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  Ingresar(){
  console.log(this.usuario);
  const {email,clave}=this.usuario;
  this.authService.register(email,clave).then(res=>{  
    console.log("se registro:",res)

  })

  }

}
