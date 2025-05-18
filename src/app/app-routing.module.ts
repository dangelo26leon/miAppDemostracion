import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',
    loadChildren:()=>import('./home/home.module').then(m => m.HomeModule)
  },
  {path: 'formulario',
    loadChildren:()=>import('./formulario/formulario.module').then(m => m.FormularioModule)
  },
  {path: 'tabla',
    loadChildren:()=>import('./tabla/tabla.module').then(m => m.TablaModule)
  },
  {path: 'acerca-de',
    loadChildren:()=>import('./acerca-de/acerca-de.module').then(m => m.AcercaDeModule)
  },
  
  {
    path: '', //Ruta por defecto
    redirectTo: '/home',
    pathMatch: 'full' //Importante para redirecciones
  },
  {
    path: '**', //Wildcard route para rutas no encontradas
    redirectTo: '/home' //O a un componente NotFoundComponent si lo tuvieras
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
