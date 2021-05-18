import React from 'react'
import Dropdown from './Helper/Dropdown'
import Expense from './TrackerComponents/Expense';
import InputTracker from './TrackerComponents/InputTracker';
import Income from './TrackerComponents/Income';
import { Link } from 'react-router-dom';

const Tracker = () => {
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    return (
        <div className="Trackerwrapper ">
            {/* <InputfieldContoller> */}
            <>

                <Link to="/lifetime-records">
                    <div className="buttonwrapper md:flex md:justify-end">
                        <button className="bg-gray-400 border-2 border-gray-500 w-screen p-2 text-white tracking-wider md:w-2/6 md:p-3 md:rounded-bl-lg md:text-lg md:font-semibold ">
                            SHOW LIFETIME RECORDS
                        </button>
                    </div>
                </Link>

                <div className="durationinput flex justify-center w-screen flex-col items-center md:mb-10">
                    <Dropdown content={month} initialvalue={"January"} index={10} />
                </div>


                <div className="Trackerwrapper flex flex-col justify-center w-screen items-center md:flex-row md:justify-around ">


                    <InputTracker />
                    <div className="md:order-first">
                        <Expense />
                    </div>
                    <Income />

                </div>
            </>
            {/* </InputfieldContoller> */}
        </div>
    )
}

export default Tracker
