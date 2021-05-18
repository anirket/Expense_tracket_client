import React from 'react'
import ReactLoading from 'react-loading'
import '../../index.css'
const Loadingtransactions = () => {
    return (
        <div className=" loadingtransactions flex justify-center items-center  flex-col">
        <ReactLoading type="bars" color="#000000" height={'1rem'} width={'2rem'} />
    </div>
    )
}

export default Loadingtransactions


