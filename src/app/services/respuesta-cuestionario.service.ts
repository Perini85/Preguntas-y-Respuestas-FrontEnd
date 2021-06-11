import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuestionario } from '../models/cuestionario';
import { RespuestaCuestionario } from '../models/respuesta-cuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCuestionarioService {
  myAppUrl: string;
  myApiUrl: string;
  nombreParticipante: string;
  idCuestionario: number;
  respuestas: number[]= [];
  cuestionario: Cuestionario;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/RespuestaCuestionario/';
  }

guardarRespuestaCuestionario(respuestaCuestionario: RespuestaCuestionario): Observable<any>{

return this.http.post(this.myAppUrl + this.myApiUrl, respuestaCuestionario);
}

getListCuestionarioRespuesta(idCuestionrio: number): Observable<any>{
  return this.http.get(this.myAppUrl + this.myApiUrl + idCuestionrio);
}

eliminarRespuestaCuestionario(idRespuestaCuestionario: number): Observable<any>{

  return this.http.delete(this.myAppUrl + this.myApiUrl + idRespuestaCuestionario);
}

getCuestionarioByIdRespuesta(idRespuesta: number): Observable<any>{
  return this.http.get(this.myAppUrl + this.myApiUrl + 'GetCuestionarioByIdRespuesta/' + idRespuesta );
}

}
