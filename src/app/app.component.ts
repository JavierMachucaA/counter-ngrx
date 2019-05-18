import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

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
    this._store.select('contador').subscribe( state => {
      this.contador = state;
      //this.contador = state.contador;
      console.log(state);
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
