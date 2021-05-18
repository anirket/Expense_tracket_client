import React from 'react'
import LifetimeChartcomponent from '../Charts/LifetimeChartcomponent'


const Lifetimeexpense = ({ expense }) => {
    return (
        <div className="expensediv mt-10  rounded-lg border-2 border-gray-800">
            <h2 className="bg-red-400 p-4 text-white rounded-tr-lg rounded-tl-lg tracking-wider font-semibold">EXPENSES</h2>
            <div className=" flex justify-center items-center mt-2">
                <LifetimeChartcomponent component="Expense" datatodisplay={expense} />
            </div>
        </div>
    )
}

export default Lifetimeexpense
