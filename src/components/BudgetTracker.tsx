import PricesComponent from "./PricesComponent";

export default function BudgetTracker() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex justify-center items-center">
        <img src="/img/grafico.jpg" alt="" />
      </div>
      <div className=" space-y-5">
        <button className="bg-pink-600 text-white font-semibold w-full p-2 rounded-sm cursor-pointer">
            Reset app
        </button>
        <PricesComponent
          text="Budget"
          value={300}
        />
        <PricesComponent
          text="Avaliable"
          value={300}
        />
        <PricesComponent
          text="Spended"
          value={300}
        />
      </div>
    </div>
  )
}
