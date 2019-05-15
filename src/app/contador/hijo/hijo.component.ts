import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  @Input() contadorInput : number; 
  @Output() cambioContador = new EventEmitter<number>() ;
  
  constructor() { }

  ngOnInit() {
  }

  private emitirContador(){
    this.cambioContador.emit(this.contadorInput);
  }

  multiplicar(){
    this.contadorInput *=2;
    this.emitirContador();
  }

  dividir(){
    this.contadorInput/=2;
    this.emitirContador();
  }

  resetNieto(event){
    this.contadorInput = event;
    this.emitirContador();
  }

}
