import { Value } from "react-calendar/src/shared/types.js"

export type ExpenseItem = {
    expenseName: string
    quantity: number
    category: string
    date: Value
}

export type ExpenseState = ExpenseItem & {
    Id: number
}
export type categoryType = {
    id: string;
    name: string;
    icon: string;
}