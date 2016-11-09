import { Component, OnInit, EventEmitter} from '@angular/core';
//Otra forma de hacerlo
//import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  inputs:['numero'],
  //Definicion del evento
  outputs:['eventoMostrar']
})
export class NumerosPrimosFilaComponent implements OnInit {

  //@Input() private numero : number = 0;
  private numero : number = 0;
  //EventEmitter para propagar el evento
  private eventoMostrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  private mostrarContenido: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  //Aqui disparo el evento
  enviarNotificacion():void{
    this.mostrarContenido=!this.mostrarContenido;
    console.log("Evento enviado!");
    //Emitir el mensaje hay que hacerlo al final del metodo para que no de problemas
    this.eventoMostrar.emit(this.mostrarContenido);
  }
}
