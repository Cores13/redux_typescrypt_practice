import { ActionType } from "../action_types/actionTypes"
import {Dispatch} from 'redux';
import { Action } from '../actions/indexActions';

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}
export const withdrawMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}
export const bankruptMoney = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}