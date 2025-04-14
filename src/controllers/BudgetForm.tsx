export default function BudgetForm() {

  return (
    <form action="">
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
            />
            <input 
                type="submit" 
                value="Define budget" 
                className="w-full p-2 font-black bg-blue-600 text-white rounded-sm"
            />
        </div>
    </form>
  )
}
