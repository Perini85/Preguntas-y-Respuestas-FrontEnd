import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RespuestaCuestionario } from 'src/app/models/respuesta-cuestionario';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  idCuestionario: number;
  loading = false;
  listRespuestaCuestionario: RespuestaCuestionario[] =[];

  constructor(private aRoute: ActivatedRoute,
              private respuestaCuestionarioService: RespuestaCuestionarioService,
              private toastr: ToastrService) { 
                this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
              }

  ngOnInit(): void {
    this.getListCuestionariservice();
  }

  getListCuestionariservice(){
    this.loading = true;
    this.respuestaCuestionarioService.getListCuestionarioRespuesta(this.idCuestionario).subscribe(resp =>{
      this.loading = false;
      this.listRespuestaCuestionario = resp;
      console.log(resp)
    })
  }

  eliminarRespuestaCuestionario(idRtaCuestionario: number){
   this.loading = true
   this.respuestaCuestionarioService.eliminarRespuestaCuestionario(idRtaCuestionario).subscribe(resp =>{
     this.loading = false
     this.toastr.error('la respuesta al cuestionario fue eliminado con exito!','Registro eliminado')
     this.getListCuestionariservice();
   }, error =>{
     this.loading = false
     this.toastr.error('error al intentar eliminar respuesta!','Error')
    })

  }

}
