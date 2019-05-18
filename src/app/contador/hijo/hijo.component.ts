import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  //@Input() contadorInput : number; 
  //@Output() cambioContador = new EventEmitter<number>() ;
  
  contador : number; 

  constructor(private _store:Store<AppState>) { }

  ngOnInit() {
    this._store.select('contador').subscribe(contador => {
      this.contador = contador;
      console.log(this.contador); 
    });
  }

//  private emitirContador(){
//    this.cambioContador.emit(this.contadorInput);
//  }

  multiplicar(){
    this._store.dispatch(new MultiplicarAction(5)); 
    //this.contadorInput *=2;
    //this.emitirContador();
  }

  dividir(){
    this._store.dispatch(new DividirAction(2)); 
    //this.contadorInput/=2;
    //this.emitirContador();
  }

  //resetNieto(event){
    //this.contadorInput = event;
    //this.emitirContador();
  //}


}
