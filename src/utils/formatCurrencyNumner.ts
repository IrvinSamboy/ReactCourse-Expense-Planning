export const numberFormatter = (type: string, currency: string) => { 
    return new Intl.NumberFormat(
        type, {
            style: "currency",
            currency: currency
        }
    )
} 