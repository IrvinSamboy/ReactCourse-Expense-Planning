type ExpenseModalProps = {
    visible: boolean
    closeModal: (value: boolean) => void
}

export default function ExpenseModal({visible, closeModal} : ExpenseModalProps) {

    const handleCloseModal = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        closeModal(false)
    }

    return (
    <div 
        className={`size-full bg-black/40 flex items-center 
                    justify-center absolute right-0 top-0 ${!visible&& "hidden"}`}
        onClick={handleCloseModal}
    >
        <div className="p-4 max-w-3xl mx-auto space-y-4 bg-white shadow-lg rounded-lg mt-10 w-full pt-10">
            <h2 className="text-center font-black text-2xl border-b-4 pb-4 border-blue-600">New Expense</h2>
            <form action="" className="space-y-4">
            <div className="flex flex-col space-y-2">
                    <label 
                        htmlFor=""
                        className="font-semibold"
                    >
                        Expense name
                    </label>
                    <input 
                        className="p-1 bg-gray-200 rounded-sm"
                        type="text" 
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label 
                        htmlFor=""
                        className="font-semibold"
                    >
                        Quantity
                    </label>
                    <input 
                        className="p-1 bg-gray-200 rounded-sm"
                        type="text" 
                    />

                </div>Category
                <div className="flex flex-col space-y-2">
                    <label 
                        htmlFor=""
                        className="font-semibold"
                    >
                        Category
                    </label>
                    <input 
                        className="p-1 bg-gray-200 rounded-sm"
                        type="text" 
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
