import { Routes } from '@angular/router';
import { CuestionarioFormComponent } from './components/cuestionario-form/cuestionario-form.component';
import { CuestionarioCardComponent } from './components/cuestionario-card/cuestionario-card.component';
import { CuestionarioDetalleComponent } from './components/cuestionario-detalle/cuestionario-detalle.component';
import { DiseCuestiComponent } from './components/dise-cuesti/dise-cuesti.component';
import { CuestionarioDetalleDiseComponent } from './components/cuestionario-detalle-dise/cuestionario-detalle-dise.component';
// import { FormAdComponent } from './components/form-ad/form-ad.component';
// import { MostrarEncuestasComponent } from './components/mostrar-encuestas/mostrar-encuestas.component';
// import { EncuestadetComponent } from './components/encuestadet/encuestadet.component';

export const routes: Routes = [

    {
        path:'',
        component:CuestionarioFormComponent,
        title:'Pagina Form',
    },
    {
        path:'cues',
        component:CuestionarioFormComponent,
        title:'Pagina Form',
    },
    {
        path:'cards',
        component:CuestionarioCardComponent,
        title:'Pagina Cuestionarios',
    },
    {
        path:'det/:id',
        component:CuestionarioDetalleComponent,
        title:'Pagina Detalles',
    },
    {
        path:'diseño',
        component:DiseCuestiComponent,
        title:'Pagina Forms-Admin',
    },
    // {
    //     path:'mencuestas',
    //     component:MostrarEncuestasComponent,
    //     title:'Pagina Mostrar Encuestas',
    // },
    {
        path:'encdet/:id',
        component:CuestionarioDetalleDiseComponent,
        title:'Pagina Detalles de Encuestas',
    },
];

export default routes;
