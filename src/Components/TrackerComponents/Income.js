import React from 'react'
import ChartComponent from '../Charts/Chartcomponent'



const Income = () => {
    return (
        <div className="expensediv mt-10  rounded-lg border-2 border-gray-800 mb-10">
            <h2 className="bg-green-400 p-4 text-white rounded-tr-lg rounded-tl-lg tracking-wider font-semibold">INCOME</h2>
            <div className=" flex justify-center items-center mt-2">
                <ChartComponent component="Income" />
            </div>
        </div>
    )
}

export default Income
