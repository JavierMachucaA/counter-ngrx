import { Action } from '@ngrx/store';

export const INCREMENTAR = '[contador] incrementar';
export const DECREMENTAR = '[contador] decrementar';
export const MULTIPLICAR = '[contador] multiplicar';
export const DIVIDIR = '[contador] dividir';
export const RESET = '[contador] reset';

export class IncrementarAction implements Action{
    readonly type = INCREMENTAR ;
}

export class DecrementarAction implements Action{
    readonly type = DECREMENTAR ;
}

export class MultiplicarAction implements Action{
    readonly type = MULTIPLICAR ;
    constructor(public payload:number){}
}

export class DividirAction implements Action{
    readonly type = DIVIDIR ;
    constructor(public payload:number){}
}

export class ResetAction implements Action{
    readonly type = RESET;
}

export type actions = IncrementarAction     |
                        DecrementarAction   |
                        MultiplicarAction   |
                        DividirAction       |
                        ResetAction
                        ;