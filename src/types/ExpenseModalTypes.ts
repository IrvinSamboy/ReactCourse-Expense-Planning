import { Value } from "react-calendar/src/shared/types.js"

export type ExpenseModalState = {
    expenseName: string
    quantity: number
    category: string
    date: Value
}

export type categoryType = {
    id: string;
    name: string;
    icon: string;
}