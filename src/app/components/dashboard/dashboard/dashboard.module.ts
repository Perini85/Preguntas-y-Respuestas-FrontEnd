import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';

//Componentes
import { CambiarPasswordComponent } from '../cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from '../cuestionario/cuestionario.component';
import { CuestionariosComponent } from '../cuestionario/cuestionarios/cuestionarios.component';
import { NuevoCuestionarioComponent } from '../cuestionario/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from '../cuestionario/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from '../cuestionario/nuevo-cuestionario/paso-dos/paso-dos.component';
import { NuevaPreguntaComponent } from '../cuestionario/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { EstadisticasComponent } from '../cuestionario/estadisticas/estadisticas.component';
import { DetalleRespuestaComponent } from '../cuestionario/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CambiarPasswordComponent,
    CuestionarioComponent,
    CuestionariosComponent,
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NuevaPreguntaComponent,
    EstadisticasComponent,
    DetalleRespuestaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
