import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Navbarbutton from './Helper/Navbarbutton';
import Navbarmobilebutton from './Helper/Navbarmobilebutton';
const Navbar = () => {

    const [navbarmenu, setnavbarmenu] = useState(true);
    function togglemenu() {
        setnavbarmenu(!navbarmenu);

    }

    return (
        <>
            {/* DESKTOP */}
            <div className="p-4 flex items-center justify-between">
                <div className="logo md:text-2xl text-xl flex items-center justify-around md:justify-start ">
                    <li className="list-none mr-4">🤑</li><li className="list-none tracking-wider">PAISABACHAO</li>
                </div>
                <div className="nav-items items-center  p-2 justify-between hidden md:flex">
                    <Navbarbutton />
                </div>
                <div className="md:hidden text-2xl p-4 cursor-pointer font-thin" onClick={togglemenu}>
                    {navbarmenu ? (<GiHamburgerMenu />) : (<ImCross />)}
                </div>
            </div>
            <hr />
            {/* mobile */}
            <div className={"mobile-menu bg-gray-200 md:hidden " + (navbarmenu ? "hidden" : "block")}>
                <Navbarmobilebutton />
            </div>
        </>
    )
}

export default Navbar
