import React, { useEffect } from 'react'
import Loginbutton from './Helper/Loginbutton';
import {useHistory} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'

const Login = () => {
   let history = useHistory();
   let {isAuthenticated} = useAuth0();
    useEffect(() => {
        if(isAuthenticated){
            history.push({
                pathname:"/tracker"
            })
        }
    }, [history, isAuthenticated])
    return (
        <div className="maindiv w-screen  flex flex-col">

            <div className="content-div  flex items-center justify-around flex-col md:flex-row">
                <h2 className="text-3xl md:text-4xl text-center text-gray-800">YOUR PERSONAL <br /><br />FINANCE MANAGER 🤑</h2>
                <img className="mainscreenimg rounded-lg" src={`/meme2.jpg`} alt="img" />
            </div>

            <div className="loginwrapper flex justify-center items-center text-xl">
                <Loginbutton />
            </div>

        </div>
    )
}

export default Login
