
export default function ExpenseList() {
    return (
        <div className="p-4 max-w-3xl mx-auto rounded-lg mt-4 pt-10">
            <h2 className="text-2xl font-bold mb-10">Expense list</h2>
            <div className="bg-white rounded-lg">
                <div className="flex items-center justify-between p-8 border-b border-gray-400">
                    <div className="flex items-center gap-4">
                        <img src="/img/icono_suscripciones.svg" className="h-28" alt="" />
                        <div>
                            <p className="font-bold text-gray-400 text-lg">SUSCRIPTIONS</p>
                            <p className="text-base font-medium">Netflix</p>
                            <p className="text-sm text-gray-600">Monday, december 5 of 2025</p>
                        </div>
                    </div>
                    <p className="text-3xl font-bold">$100</p>
                </div>
                <div className="flex items-center justify-between p-8">
                    <div className="flex items-center gap-4">
                        <img src="/img/icono_suscripciones.svg" className="h-28" alt="" />
                        <div>
                            <p className="font-bold text-gray-400 text-lg">SUSCRIPTIONS</p>
                            <p className="text-base font-medium">Netflix</p>
                            <p className="text-sm text-gray-600">Monday, december 5 of 2025</p>
                        </div>
                    </div>
                    <p className="text-3xl font-bold">$100</p>
                </div>
            </div>

        </div>
    )
}
