import React from 'react'
import ChartComponent from '../Charts/Chartcomponent'

const Expense = () => {
    return (
        <div className="expensediv mt-10  rounded-lg border-2 border-gray-800">
            <h2 className="bg-red-400 p-4 text-white rounded-tr-lg rounded-tl-lg tracking-wider font-semibold">EXPENSES</h2>
            <div className=" flex justify-center items-center mt-2">
                <ChartComponent component="Expense" />
            </div>
        </div>
    )
}

export default Expense
