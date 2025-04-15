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
        <div className="p-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 w-full pt-10">
        </div>
    </div>
  )
}
