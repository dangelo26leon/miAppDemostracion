import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaDeComponent } from './acerca-de/acerca-de.component'; //Importa el componente
import { AcercaDeRoutingModule } from './acerca-de-routing.module'; //Importa el routing


@NgModule({
  declarations: [
    AcercaDeComponent //Declara el componente 
  ],
  imports: [
    CommonModule,
    AcercaDeRoutingModule // Importa el módulo de rutas
  ]
})
export class AcercaDeModule { }
