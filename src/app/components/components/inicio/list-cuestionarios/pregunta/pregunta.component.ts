import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pregunta } from 'src/app/models/pregunta';
import { RespuestaCuestionario } from 'src/app/models/respuesta-cuestionario';
import { RespuestaCuestionarioDetalle } from 'src/app/models/respuesta-cuestionario-detalle';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
idCuestionario: number
listPreguntas: Pregunta[]=[]
loading =false;
rtaConfirmada = false;
opcionSleccionada: any
index=0;
idRespuestaSeleccionada: number;

listRespuestaDetalle: RespuestaCuestionarioDetalle[] =[]

  constructor(private respuestaCuestionarioService: RespuestaCuestionarioService,
              private cuestionarioService: CuestionarioService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.idCuestionario = this.respuestaCuestionarioService.idCuestionario
     
    if(this.idCuestionario == null){
      this.router.navigate(['/inicio'])
      return;
    }

    this.getCuestionario();
    this.respuestaCuestionarioService.respuestas = [];
  }


getCuestionario(){
  this.loading= true
this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(data =>{
  this.listPreguntas = data.listPreguntas;
  this.loading = false;
  this.respuestaCuestionarioService.cuestionario = data;

})
}

obtenerPregunta():string{

  return this.listPreguntas[this.index].descripcion;
}

getIndex():number{
  return this.index;
}


respuestaSeleccionada(respuesta: any, idRespuesta: number){

  this.opcionSleccionada = respuesta;
  this.rtaConfirmada = true;
  this.idRespuestaSeleccionada = idRespuesta
}

AddClassOption(respuesta: any):string{

  if(respuesta === this.opcionSleccionada){
    return 'active text-ligth'
  }
}

siguiente(){

  //crear un objeto
 

  this.respuestaCuestionarioService.respuestas.push(this.idRespuestaSeleccionada);


  const detalleRespuesta: RespuestaCuestionarioDetalle = {
    respuestaId: this.idRespuestaSeleccionada
 
  };

  //Agregamos objeto al Array
  this.listRespuestaDetalle.push(detalleRespuesta);


  this.rtaConfirmada = false;
  this.index++;
  this.idRespuestaSeleccionada = null;

  if(this.index === this.listPreguntas.length){
 //   this.router.navigate(['/inicio/respuestaCuestionario'])
       this.guardarRespuestaCuestionario();
  }
}


guardarRespuestaCuestionario(){
  const rtaCuestionario:  RespuestaCuestionario ={

    cuestionarioId: this.respuestaCuestionarioService.idCuestionario,
    nombreParticipante: this.respuestaCuestionarioService.nombreParticipante,
     listRtaCuestionarioDetalle: this.listRespuestaDetalle

  };
 this.loading = true;
  this.respuestaCuestionarioService.guardarRespuestaCuestionario(rtaCuestionario).subscribe(resp =>{
    this.loading = false;
    this.router.navigate(['/inicio/respuestaCuestionario']);
  }, error =>{
    this.loading = false
    console.log(error)
    this.toastr.error("error","error al registrar respuestas");
  })

}

}
