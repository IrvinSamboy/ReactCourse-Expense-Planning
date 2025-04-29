import { ExpenseItem, ExpenseState } from "../types/ExpenseModalTypes"

export type budgetActions = 
    {type: 'add-budget', payload: {budget: number}} |
    {type: 'add-expense', payload: {expense: ExpenseItem}}

export type budgetState = {
    budget: number
    expense: ExpenseState[]
}

export const initialState : budgetState = {
    budget: 0,
    expense: []
}

export const budgetReducer = (
    state: budgetState = initialState,
    actions: budgetActions
) => {
    if(actions.type === "add-budget") {
        return {
            ...state,
            budget: actions.payload.budget
        }
    }

    if(actions.type === "add-expense"){
        return {
            ...state,
            expense: [
                ...state.expense,
                {
                    ...actions.payload.expense,
                    id: state.expense.length === 0? 0: state.expense[state.expense.length - 1].Id++
                }
            ]
        }
    }

    return state
}