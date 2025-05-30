import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import { categories } from "../db/categories"
import { useBudget } from "../hooks/useBudget"
import { useCallback } from "react"
import 'react-swipeable-list/dist/styles.css';
import { numberFormatter } from "../utils/formatCurrencyNumner";
export default function ExpenseList() {

    const { state, dispatch } = useBudget()

    const category = useCallback((id: string) => categories.filter(item => item.id === id)[0], [])

    const leadingActions = (expenseId: number) => {
        return (
            <LeadingActions>
                <SwipeAction
                    onClick={() => dispatch({type: "add-expenseId-to-edit", payload: {expenseId: expenseId}})}
                >
                    Edit
                </SwipeAction>
            </LeadingActions>

        )
    }
    const trailingActions = (expenseId: number) => {
        return (
            <TrailingActions>
                <SwipeAction
                    onClick={() => dispatch({type: "delete-expense", payload: {expenseId: expenseId}})}
                    destructive={true}
                >
                    Delete
                </SwipeAction>
            </TrailingActions>
        )
    }
    return (
        <div className="p-4 max-w-3xl mx-auto rounded-lg mt-4 pt-10">
            <h2 className="text-2xl font-bold mb-10">Expense list</h2>
            {
                state.expense.length === 0 ?
                    <p>No expenses added</p>
                    :
                    <div className="bg-white rounded-lg">
                        {
                            state.expense.map(item => (
                                <SwipeableList key={`expense${item.id}`}>
                                    <SwipeableListItem
                                        leadingActions={leadingActions(item.id)}
                                        trailingActions={trailingActions(item.id)}
                                    >
                                        <div className="flex select-none items-center w-full justify-between p-8 border-b border-gray-400">
                                            <div className="flex items-center gap-4">
                                                <img src={`/img/icono_${category(item.category).icon}.svg`} className="h-28" alt="" />
                                                <div>
                                                    <p className="font-bold text-gray-400 text-lg">{category(item.category).name}</p>
                                                    <p className="text-base font-medium">{item.expenseName}</p>
                                                    <p className="text-sm text-gray-600">{item.date?.toString()}</p>
                                                </div>
                                            </div>
                                            <p className="text-3xl font-black">{numberFormatter("en-US", "USD").format(item.quantity)}</p>
                                        </div>
                                    </SwipeableListItem>
                                </SwipeableList>

                            ))
                        }
                    </div>
            }


        </div>
    )
}


