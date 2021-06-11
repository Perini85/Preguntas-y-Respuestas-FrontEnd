import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuestionarioService } from 'src/app/services/cuestionario.service';

@Component({
  selector: 'app-cuestionarios',
  templateUrl: './cuestionarios.component.html',
  styleUrls: ['./cuestionarios.component.css']
})
export class CuestionariosComponent implements OnInit {
idCuestionario: number
loading = false;
cuestionario: any ={};
  constructor(private cuestionarioService: CuestionarioService,
              private aRoute: ActivatedRoute) { 

                this.idCuestionario = +this.aRoute.snapshot.paramMap.get('id');
              }

  ngOnInit(): void {
    this.getCuestionario()
  }

  getCuestionario(){
    this.loading = true;
    this.cuestionarioService.getCuestionario(this.idCuestionario).subscribe(resp =>{
      this.loading = false;
      this.cuestionario = resp;
      console.log(resp);
    })
  }
}
