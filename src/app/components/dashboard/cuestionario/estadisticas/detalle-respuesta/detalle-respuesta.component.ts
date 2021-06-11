import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { RespuestaCuestionario } from 'src/app/models/respuesta-cuestionario';
import { RespuestaCuestionarioDetalle } from 'src/app/models/respuesta-cuestionario-detalle';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-detalle-respuesta',
  templateUrl: './detalle-respuesta.component.html',
  styleUrls: ['./detalle-respuesta.component.css']
})
export class DetalleRespuestaComponent implements OnInit {
idRespuesta: number;
loading = false;
cuestionario: Cuestionario;
respuestas: RespuestaCuestionarioDetalle[]=[];

  constructor(private aRoute: ActivatedRoute, 
              private respuestaCuestionarioService: RespuestaCuestionarioService) {

                this.idRespuesta = +this.aRoute.snapshot.paramMap.get('id')
               }

  ngOnInit(): void {
    this.getListRespuestasyCuestionarios();
  }

  getListRespuestasyCuestionarios(){
    this.loading = true
    this.respuestaCuestionarioService.getCuestionarioByIdRespuesta(this.idRespuesta).subscribe(resp =>{
      
      this.cuestionario = resp.cuestionario
      this.respuestas = resp.respuestas
      this.loading= false
    })
  }
}
