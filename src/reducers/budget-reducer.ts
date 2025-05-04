import { ExpenseItem, ExpenseState } from "../types/ExpenseModalTypes"

export type budgetActions = 
    {type: 'add-budget', payload: {budget: number}} |
    {type: 'modal-actions', payload: {closeModal: boolean}} |
    {type: 'add-expense', payload: {expense: ExpenseItem}} |
    {type: 'delete-expense', payload: {expenseId: number}} |
    {type: 'add-expenseId-to-edit', payload: {expenseId: number}} |
    {type: 'edit-expense', paylaod: {expense: ExpenseItem}}

export type budgetState = {
    budget: number
    closeModal: boolean
    expense: ExpenseState[]
    expenseIdToEdit: number | undefined
}

export const initialState : budgetState = {
    budget: 0,
    closeModal: true,
    expense: [],
    expenseIdToEdit: undefined
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

    else if(actions.type=== "modal-actions"){
        return{
            ...state,
            closeModal: actions.payload.closeModal
        }
    }

    else if(actions.type === "add-expense"){
        return {
            ...state,
            expense: [
                ...state.expense,
                {
                    ...actions.payload.expense,
                    id: state.expense.length === 0? 0: state.expense[state.expense.length - 1].id++
                }
            ]
        }
    }

    else if(actions.type === "delete-expense"){
        return {
            ...state,
            expense: state.expense.filter(item => item.id !== actions.payload.expenseId)
        }
    }

    else if(actions.type === "add-expenseId-to-edit"){
        return {
            ...state,
            expenseIdToEdit: actions.payload.expenseId,
            closeModal: false
        }
    }

    else if(actions.type === "edit-expense"){
        return {
            ...state,
            expense: state.expense.map(item => item.id === state.expenseIdToEdit? actions.paylaod.expense : item),
            expenseIdToEdit: undefined
        }
    }

    return state
}