import React, { useState, useContext} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { Inputfieldcontext } from '../Contexts/InputfieldContoller';



const Dropdowninput = ({ content, index = 10, height, categoryvalue, inputtype }) => {

    const { typevalue, settypevalue, category, setcategory } = useContext(Inputfieldcontext);

    //To toggle Dropdowninput on click
    const [dropdowntogglevalue, setdropdowntogglevalue] = useState(false);


    //Function Toggling Dropdown
    function dropdowntoggle() {
        setdropdowntogglevalue(!dropdowntogglevalue);
    }

    function controlinput(e) {
        if (categoryvalue === "type") {

            settypevalue(e.target.textContent)
            setdropdowntogglevalue(false);
        }
        else {

            setcategory(e.target.textContent)
            setdropdowntogglevalue(false);
        }

    }

    return (

        <div className="dropdowninput mt-5 bg-gray-500 border-2 text-white border-gray-300 rounded-full  relative w-32 md:w-40  ">
            <button onClick={dropdowntoggle} className="z-10 dropdownbuttoninput  font-semibold py-2 px-4 flex justify-around items-center text-sm w-32 md:w-40 focus:outline-none overflow-hidden h-10 whitespace-nowrap overflow-ellipsis">
                <span className="mr-1">{(inputtype === "expense") ? (typevalue) : (category)}</span>
                <div className="text-2xl">
                    <IoMdArrowDropdown />
                </div>
            </button>
            
            <ul className={`text-black  cursor-pointer rounded-lg border-2 border-gray-300 z-${index} w-32 md:w-40 h-${height} overflow-scroll dropdown-menu2 absolute bg-gray-300 pt-1 ` + (dropdowntogglevalue ? ("block") : ("hidden"))}>
                {content.map((contentvalue) => (
                    <li key={contentvalue}
                        className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap border-b-2 border-gray-300"
                        onClick={(e) => {
                            controlinput(e)
                        }}>
                        {contentvalue}
                    </li>
                ))
                }
            </ul>
        </div>

    )
}

export default Dropdowninput
