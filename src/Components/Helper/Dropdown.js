import React, { useState, useContext } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { Inputfieldcontext } from '../Contexts/InputfieldContoller';
const Dropdown = ({ content, index }) => {

    //To toggle dropdown on click
    const [dropdowntogglevalue, setdropdowntogglevalue] = useState(false);

    const { month, setmonth } = useContext(Inputfieldcontext);

    //Function Toggling Dropdown
    function dropdowntoggle() {
        setdropdowntogglevalue(!dropdowntogglevalue);
    }

    return (
        <div className="dropdown mt-5  relative rounded-lg hover:outline-none border-2 border-gray-300 bg-gray-200">
            <button onClick={dropdowntoggle} className="dropdownbutton  text-gray-700 font-semibold py-2 px-4 flex justify-around items-center text-lg rounded-lg focus:outline-none">
                <span className="mr-1">{month}</span>
                <div className="text-2xl">
                    <IoIosArrowDropdown />
                </div>
            </button>
            <ul className={`z-${index}  h-52 overflow-scroll dropdown-menu absolute text-gray-700 pt-1 ` + (dropdowntogglevalue ? ("block") : ("hidden"))}>
                {content.map((contentvalue) => (
                    <li key={contentvalue}
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap border-b-2 border-gray-300 cursor-pointer"
                        onClick={(e) => {
                            setmonth(e.target.textContent);
                            setdropdowntogglevalue(false);
                        }}>
                        {contentvalue}
                    </li>
                ))
                }
            </ul>
        </div>

    )
}

export default Dropdown
