import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  //@Input() contadorInput : number ;
  //@Output() cambioContador = new EventEmitter<number>() ;
  contador : number;

  constructor(private _store : Store<AppState>) { }

  ngOnInit() {
    this._store.select('contador').subscribe(contador => {
      this.contador = contador;
      console.log(this.contador); 
    });
  }

  reset(){
    this._store.dispatch(new ResetAction());
    //this.contadorInput=0;
    //this.cambioContador.emit(0);

  }

}
