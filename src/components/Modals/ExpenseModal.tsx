import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { categoryType, ExpenseModalState } from "../../types/ExpenseModalTypes";
import { useState } from "react";
import { Value } from "react-calendar/src/shared/types.js";
import ErrorMessage from "../ErrorMessage";

type ExpenseModalProps = {
    visible: boolean
    closeModal: (value: boolean) => void
}

const categories : categoryType[] = [
    { id: '1', name: 'Savings', icon: 'ahorro' },
    { id: '2', name: 'Food', icon: 'comida' },
    { id: '3', name: 'Housing', icon: 'casa' },
    { id: '4', name: 'Miscellaneous Expenses', icon: 'gastos' },
    { id: '5', name: 'Leisure', icon: 'ocio' },
    { id: '6', name: 'Health', icon: 'salud' },
    { id: '7', name: 'Subscriptions', icon: 'suscripciones' },
];

export default function ExpenseModal({ visible, closeModal }: ExpenseModalProps) {

    const [expense, setExpense] = useState<ExpenseModalState>({
        expenseName: '',
        category: categories[0].name,
        quantity: 0,
        date: new Date
    })

    const [emptyInputName, setEmptyInputName] = useState<string[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const isNumberValue = e.target.id === "quantity"
        setExpense({
            ...expense,
            [e.target.id]: isNumberValue? +e.target.value : e.target.value 
        })
    }

    const handleDatePickerChange = (value: Value) => {
        setExpense({
            ...expense,
            date: value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let emptyInputNameTempArr : string[] = []
        Object.entries(expense).map(item => {
            if(typeof item[1] === "string" || typeof item[1] === "number"){
                if(item[1] === '' || item[1] === 0){
                    if(!emptyInputName.includes(item[0])){
                        emptyInputNameTempArr.push(item[0])
                    }
                }
                else{
                    const tempItem = emptyInputName.filter(itemFilter => itemFilter !== item[0])
                    setEmptyInputName(tempItem)
                }
            }
        })
        if(emptyInputNameTempArr.length > 0) {
            setEmptyInputName(emptyInputNameTempArr)
        }
        //console.log(emptyInputName)
        //console.log(expense)
    }

    const handleCloseModal = () => {
        closeModal(false)
    }

    return (
        <div
            className={`size-full bg-black/40 flex items-center 
                    justify-center absolute right-0 top-0 ${!visible && "hidden"}`}
            onClick={handleCloseModal}
        >
            <div
                onClick={e => e.stopPropagation()} 
                className="p-4 max-w-3xl mx-auto space-y-4 bg-white shadow-lg rounded-lg mt-10 w-full pt-10">
                <h2 className="text-center font-black text-2xl border-b-4 pb-4 border-blue-600">New Expense</h2>
                <form action="" className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="expenseName"
                            className="font-semibold"
                        >
                            Expense name
                        </label>
                        <input
                            id="expenseName"
                            className="p-1 bg-gray-200 rounded-sm"
                            type="text"
                            value={expense.expenseName}
                            onChange={handleChange}
                        />
                        {
                            emptyInputName.includes("expenseName")&&
                                <ErrorMessage>Expense name category has to have a value</ErrorMessage>
                        }  
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="quantity"
                            className="font-semibold"
                        >
                            Quantity
                        </label>
                        <input
                            id="quantity"
                            className="p-1 bg-gray-200 rounded-sm"
                            type="text"
                            value={expense.quantity}
                            onChange={handleChange}
                        />
                        {
                            emptyInputName.includes("quantity")&&
                                <ErrorMessage>Quantity category has to have a value</ErrorMessage>
                        }
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="category"
                            className="font-semibold"
                        >
                            Category
                        </label>
                        <select 
                            id="category" 
                            className="p-1 bg-gray-200 rounded-sm"
                            value={expense.category}
                            onChange={handleChange}
                        >
                            {
                                categories.map((item) => (
                                    <option
                                        key={item.id}
                                        value={item.id}
                                    >
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                        {
                            emptyInputName.includes("category")&& 
                                <ErrorMessage>Category category has to have a value</ErrorMessage>
                        }  
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="date"
                            className="font-semibold"
                        >
                            Date
                        </label>
                        <DatePicker
                            id="date" 
                            className={"p-1 bg-gray-200 rounded-sm"}
                            value={expense.date}
                            onChange={handleDatePickerChange}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Register Exprense"
                        className="w-full p-2 font-black disabled:opacity-40 bg-blue-600 text-white rounded-sm"
                    />
                </form>
            </div>
        </div>
    )
}
