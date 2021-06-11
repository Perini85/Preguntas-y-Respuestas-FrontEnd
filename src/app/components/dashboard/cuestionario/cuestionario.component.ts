import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { LoginService } from 'src/app/services/login.service';
import {Cuestionario}  from 'src/app/models/cuestionario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
  nombreUsuario : string;
  listCuestionarios: Cuestionario[]=[]
  loading = false;
  constructor(private loginService: LoginService,
              private cuestionarioService: CuestionarioService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
   
    this.getCuestionarios();
  }


  getNombreUsuario(){
    console.log(this.loginService.getTokenDecoded())
  this.nombreUsuario = this.loginService.getTokenDecoded().sub;
  }

  getCuestionarios(){
    this.loading = true;
    this.cuestionarioService.getListCuestionarioByUser().subscribe(resp => {
      this.getNombreUsuario();
      console.log(resp)
      this.listCuestionarios = resp;
      this.loading = false;
    },error =>{
      console.log(error)
      this.loading = false;
    })
  }

  eliminarCuestionario(idCuestionario: number){
    if(confirm('Esta seguro que desea eliminar el cuestionario')){
      this.loading = true;
      this.cuestionarioService.deleteCuestionario(idCuestionario).subscribe(resp =>{
        this.loading = false;
       this.toastr.success('El cuestionario fue eliminado con exito!','Registro eliminado');
       this.getCuestionarios();
      }, error =>{
       this.loading = false
        this.toastr.error('Error !','Ocurrio un error en sistema')
      });
     
    }
  }

}
