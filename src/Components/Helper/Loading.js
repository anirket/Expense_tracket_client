import React from 'react'
import ReactLoading from 'react-loading'
import '../../index.css'
const Loading = () => {
    return (
        <div className=" loadingdiv flex justify-center items-center h-screen flex-col">
            <ReactLoading type="spinningBubbles" color="#000000" height={'5rem'} width={'5rem'} />
        </div>
    )
}

export default Loading
