import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Navbarmobilebutton = () => {
    const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return (
            <li  className="list-none p-2 pl-3 hover:bg-gray-700 hover:text-white ">LOADING...</li>
        )
    }
    if (isAuthenticated) {
        return (
            <li onClick={logout} className="list-none p-2 pl-3 hover:bg-gray-700 hover:text-white ">LOGOUT</li>
        )
    }
    else {
        return (
            <li onClick={loginWithRedirect} className="list-none p-2 pl-3 hover:bg-gray-700 hover:text-white ">LOGIN</li>

        )

    }
}

export default Navbarmobilebutton
