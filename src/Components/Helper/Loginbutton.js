import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ImEnter } from "react-icons/im";
import { CgLogOut } from "react-icons/cg";

const Loginbutton = () => {
    const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return (
            <button className="p-4 bg-gray-800  text-white  tracking-widest w-72 md:w-96 flex justify-center items-center">
                LOADING...
            </button>
        )
    }
    if (isAuthenticated) {
        return (
            <button onClick={logout} className="p-4 bg-black  text-white  tracking-widest w-72 md:w-96 flex justify-center items-center">
                LOGOUT
                <div className="icon ml-7 text-2xl">
                    <CgLogOut />
                </div>
            </button>
        )
    }
    else {
        return (
            <button onClick={loginWithRedirect} className="p-4 bg-black  text-white  tracking-widest w-72 md:w-96 flex justify-center items-center">
                LOGIN
                <div className="icon ml-7">
                    <ImEnter />
                </div>
            </button>
        )

    }
}

export default Loginbutton
