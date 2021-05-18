import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Navbarbutton = () => {
    const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return (
            <button  className="bg-gray-800 p-2 w-28 rounded-lg text-white">LOADING...</button>
        )
    }
    if (isAuthenticated) {
        return (
            <button onClick={logout} className="bg-red-500 p-2 w-28 rounded-lg text-white">LOGOUT</button>

        )
    }
    else {
        return (
            <button onClick={loginWithRedirect} className="bg-red-500 p-2 w-28 rounded-lg text-white">LOGIN</button>
        )

    }
}

export default Navbarbutton

