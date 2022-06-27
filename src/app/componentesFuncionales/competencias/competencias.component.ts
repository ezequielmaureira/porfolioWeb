import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartData, ChartEvent, ChartType,ChartConfiguration } from 'chart.js';
import { PorfolioService } from 'src/app/porfolio.service';
import { compModel } from './competenciasModel';
@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrls: ['./competencias.component.css']
})
export class CompetenciasComponent  {
   


  formValue!:FormGroup;
  CompetenciasModel:compModel=new compModel();
  datosCompetencia!:any;
  mostrarActualizar!:boolean;
  mostrarAgregar!:boolean;
  
   constructor(private creadorForm:FormBuilder,private api:PorfolioService){}


  ngOnInit(): void {
    this.formValue=this.creadorForm.group({
        id:[''],
        nombre:[''],
        grado:[''],
        
       


    })
    this.mostrarCompetencia(this.datosCompetencia);


  }

  

  clickNuevaCompetencia(){
 this.formValue.reset();
 this.mostrarActualizar=false;
 this.mostrarAgregar=true; 

  }
  
  agregaCompetencia(){

  this.CompetenciasModel.id=this.formValue.value.id;
  this.CompetenciasModel.nombre=this.formValue.value.nombre;
  this.CompetenciasModel.grado=this.formValue.value.grado;
  

 this.api.agregarCompetencia(this.CompetenciasModel).subscribe(data=>{

console.log(data);
alert("Competencia Agregada")
let ref=document.getElementById('cancel')
 ref?.click();
 this.mostrarCompetencia=data;
 this.formValue.reset();



 },
 err=>{

alert("algo paso");

 }

 )}

mostrarCompetencia(data:any){
  this.api.obtenerCompetencia().subscribe(data=>{

this.datosCompetencia=data;

  })




}

eliminarCompetencia(id:any){
  
  this.api.borrarCompetencia(id)
  .subscribe(data=>{
 
    alert("Competencia eliminada");

  })


 


  }

  editarCompetencia(row:any){

this.mostrarActualizar=true;
 this.mostrarAgregar=false; 

  
   this.CompetenciasModel.id=row.id;
   this.formValue.controls["nombre"].setValue(row.nombre);
   this.formValue.controls["grado"].setValue(row.grado);
    
   console.log(row)
}
 

actualizarCompetencia(){
this.CompetenciasModel.nombre=this.formValue.value.nombre;
this.CompetenciasModel.grado=this.formValue.value.grado;


this.api.actualizarCompetencia(this.CompetenciasModel,this.CompetenciasModel.id)
.subscribe(res=>{

let ref=document.getElementById('cancel')
 ref?.click();
 this.formValue.reset(); 
this.mostrarCompetencia(res);

this.formValue.reset(); 
this.mostrarCompetencia(res);


})

}









   A1:number=85;
   // Doughnut
   public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  
  public radarChartLabels: string[] = [ 'HTML', 'ANGULAR', 'INGLES', 'CSS', 'JAVASCRIPT', 'JAVA' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ this.A1, 10, 83, 81, 56, 100 ], label: 'desempeño' },
     
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}