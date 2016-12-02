import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Libro } from '../libro'
import { BibliotecaService } from '../Biblioteca.Service'

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css'],
  providers: [BibliotecaService]
})
export class FormularioLibroComponent implements OnInit {
  private libro: Libro;

  constructor(
    private service: BibliotecaService,
    private router: Router) { }

  ngOnInit() {
    this.libro = new Libro(null, "");
  }

  enviarFormulario(formulario: any) {
    console.log(this.libro);
    this.service.addLibro(this.libro).subscribe(
      (datos) => {
        console.log("Libro guardado", datos.id);
      }, (error) => {
        console.error("Error");
      }, () => {
        console.log("Fin");
      });
    this.router.navigateByUrl('/listar');
  }
}
