import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/cuestionario';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { RespuestaCuestionarioService } from 'src/app/services/respuesta-cuestionario.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit {
  listCuestionario : Cuestionario[]=[];
  loading = false;

  constructor(private cuestionarioService: CuestionarioService,
              private router: Router,
              private respuestaCuestionario: RespuestaCuestionarioService) { }

  ngOnInit(): void {
    this.getListCuestionario();
  }

  getListCuestionario(){
    this.loading = true;
    this.cuestionarioService.getListCuestionarios().subscribe(data =>{
      console.log(data)
      this.loading = false;

      this.listCuestionario = data;
    })
  }

  ingresarNombre(idCuestionario:number){
    
    this.respuestaCuestionario.idCuestionario = idCuestionario
    this.router.navigate(['/inicio/ingresarNombre']);
  }

}
