import { Routes } from '@angular/router';
import { ConsultaLibroComponent } from './consulta-libro/consulta-libro.component';
import { FormularioLibroComponent } from './formulario-libro/formulario-libro.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'consultar', pathMatch: 'full' },
    { path: 'listar', component: ListaLibrosComponent },
    { path: 'formulario', component: FormularioLibroComponent },
    { path: 'consultar/:id', component: ConsultaLibroComponent }
]