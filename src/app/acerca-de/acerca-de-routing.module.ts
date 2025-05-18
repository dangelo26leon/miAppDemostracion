import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcercaDeComponent } from "./acerca-de/acerca-de.component"; // Asegurate que la ruta sea correcta

const routes: Routes = [
    { path: '', component: AcercaDeComponent} //Ruta vacía porque será '/acerca-de' desde AppRouting
];

@NgModule ({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcercaDeRoutingModule{ }