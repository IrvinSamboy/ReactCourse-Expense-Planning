
type PricesComponentProps = {
    text: string
    value: number
}

export default function PricesComponent({text, value}: PricesComponentProps) {
  return (
    <p className="text-lg text-blue-600 font-semibold">{text}: 
        <span className="font-black text-black">{value}</span>
    </p>
  )
}
