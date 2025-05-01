import { categories } from "../db/categories"
import { useBudget } from "../hooks/useBudget"
import { categoryType } from "../types/ExpenseModalTypes"
import { useCallback } from "react"

export default function ExpenseList() {

    const { state } = useBudget()

    const category = useCallback((id: string)=> categories.filter(item => item.id === id)[0], [])

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
                                <div className="flex items-center justify-between p-8 border-b border-gray-400">
                                    <div className="flex items-center gap-4">
                                        <img src={`/img/icono_${category(item.category).icon}.svg`} className="h-28" alt="" />
                                        <div>
                                            <p className="font-bold text-gray-400 text-lg">{category(item.category).name}</p>
                                            <p className="text-base font-medium">{item.expenseName}</p>
                                            <p className="text-sm text-gray-600">{item.date?.toString()}</p>
                                        </div>
                                    </div>
                                    <p className="text-3xl font-bold">$100</p>
                                </div>
                            ))
                        }
                    </div>
            }


        </div>
    )
}


