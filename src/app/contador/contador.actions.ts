import { Action } from '@ngrx/store';

export const INCREMENTAR = '[contador] incrementar';
export const DECREMENTAR = '[contador] decrementar';


export class IncrementarAction implements Action{
    readonly type = INCREMENTAR ;
}

export class DecrementarAction implements Action{
    readonly type = DECREMENTAR ;
}