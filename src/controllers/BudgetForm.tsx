import { useMemo, useState } from "react"

export default function BudgetForm() {

    const [budget, setBudget] = useState(0)

    const isvalid = useMemo(() => !isNaN(budget) || budget !<= 0, [budget])

    const handleBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!isvalid) {
            console.log("The budget must be more than 0")
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col space-y-4">
                <label htmlFor="budget"
                    className="text-center font-black text-blue-600 text-4xl"
                >
                    Define budget
                </label>
                <input
                    type="number"
                    className="p-2 border-gray-200 border-2 rounded-sm"
                    placeholder="Define your budget"
                    onChange={handleBudget}
                />
                <input
                    type="submit"
                    value="Define budget"
                    className="w-full p-2 font-black disabled:opacity-40 bg-blue-600 text-white rounded-sm"
                    disabled={!isvalid}
                />
            </div>
        </form>
    )
}
