import ExpenseModal from "./Modals/ExpenseModal";
import PricesComponent from "./PricesComponent";
import { useBudget } from "../hooks/useBudget";

export default function BudgetTracker() {

  const {dispatch, state} = useBudget()

  const closeModalFunction = (closeModal: boolean) => {
    dispatch({type: "modal-actions", payload: {closeModal: closeModal}})
  }

  return (
    <>
    <div className="grid grid-cols-2 gap-3">
      <div className="flex justify-center items-center">
        <img src="/img/grafico.jpg" alt="" />
      </div>
      <div className="space-y-5 flex flex-col items-center">
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
    <div 
    className="fixed bottom-4 text-white text-6xl 
              font-bold right-4 bg-blue-600 px-4 py-1.5 flex items-center 
              justify-center rounded-full cursor-pointer"
    onClick={() => closeModalFunction(false)}
    >
      <p>+</p>
    </div>
    <ExpenseModal
      visible={!state.closeModal}
      closeModal={closeModalFunction}
    />
    </>
  )
}
