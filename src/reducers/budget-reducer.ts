export type budgetActions = {type: 'add-budget', payload: {budget: number}}

export type budgetState = {
    budget: number
}

export const initialState : budgetState = {
    budget: 0
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

    return state
}