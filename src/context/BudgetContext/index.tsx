import { budgetActions, budgetState } from "../../reducers/budget-reducer";
import { createContext } from "react";

type BudgetContextProps = {
    state: budgetState
    dispatch: React.Dispatch<budgetActions>
}

export const BudgetContext = createContext<BudgetContextProps>(null!)
