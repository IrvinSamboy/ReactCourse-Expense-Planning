import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseList from "./components/ExpenseList";

export default function App() {

  const {state} = useBudget()

  const showBudgetTracker = useMemo(() => state.budget > 0, [state.budget])

  return (
    <>
      <header className="bg-blue-600 py-6">
        <h1 className="uppercase text-center font-black text-4xl text-white"> 
          Expense Planning
        </h1>
      </header>
      <div className="p-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 pt-10">
        {showBudgetTracker? <BudgetTracker/> : <BudgetForm />}
      </div>
      {showBudgetTracker&& <ExpenseList />}
    </>
  )
}
