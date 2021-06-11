import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarPasswordComponent } from '../cambiar-password/cambiar-password.component';
import { CuestionarioComponent } from '../cuestionario/cuestionario.component';
import { DetalleRespuestaComponent } from '../cuestionario/estadisticas/detalle-respuesta/detalle-respuesta.component';
import { EstadisticasComponent } from '../cuestionario/estadisticas/estadisticas.component';
import { NuevoCuestionarioComponent } from '../cuestionario/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoDosComponent } from '../cuestionario/nuevo-cuestionario/paso-dos/paso-dos.component';
import { PasoUnoComponent } from '../cuestionario/nuevo-cuestionario/paso-uno/paso-uno.component';

const routes: Routes = [
  {path: '', component: CuestionarioComponent},
  {path: 'cambiarPassword', component: CambiarPasswordComponent},
  {path: 'verCuestionario/:id', component:CuestionarioComponent },
  {path:'estadisticas/:id', component: EstadisticasComponent},
  {path:'detalleRespuesta/:id',component:DetalleRespuestaComponent},
  {path: 'nuevoCuestionario', component: NuevoCuestionarioComponent, children:[
    {path: 'pasoUno', component: PasoUnoComponent},
    {path: 'pasoDos', component: PasoDosComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
