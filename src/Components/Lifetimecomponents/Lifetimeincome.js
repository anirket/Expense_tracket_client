import React from 'react'
import LifetimeChartcomponent from '../Charts/LifetimeChartcomponent'

const Lifetimeincome = ({ income, expense }) => {
    return (
        <div className="expensediv mt-10  rounded-lg border-2 border-gray-800 mb-10">
            <h2 className="bg-green-400 p-4 text-white rounded-tr-lg rounded-tl-lg tracking-wider font-semibold">INCOME</h2>
            <div className=" flex justify-center items-center mt-2">
                <LifetimeChartcomponent component="Income" datatodisplay={income} />
            </div>
        </div>
    )
}

export default Lifetimeincome
