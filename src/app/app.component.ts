import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';

interface AppState{
  contador:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app-ngrx';

  contador : number ;

  constructor(private _store : Store<AppState>){
    //this.contador = 10;
    this._store.subscribe( state => {
      //console.log(state);
      this.contador = state.contador;
    });
  }

  incrementar(){
    //this.contador ++ ;
    const action = new IncrementarAction();
    this._store.dispatch(action);
  }

  decrementar(){
    //this.contador--;
    const action = new DecrementarAction();
    this._store.dispatch(action);
  }
}
