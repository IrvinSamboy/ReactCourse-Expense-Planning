export type ExpenseModalState = {
    expenseName: string
    quantity: number
    category: categoryType
    date: Date
}

export type categoryType = {
    id: string;
    name: string;
    icon: string;
}