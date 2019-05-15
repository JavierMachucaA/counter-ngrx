import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  @Input() contadorInput : number ;
  @Output() cambioContador = new EventEmitter<number>() ;

  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.contadorInput=0;
    this.cambioContador.emit(0);
  }

}
