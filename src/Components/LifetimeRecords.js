import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { BASE_URL, GET_ALL_URL } from './utils/apiendpoints'
import { getrequest } from './utils/apirequests'
import Lifetimeexpense from './Lifetimecomponents/Lifetimeexpense'
import Lifetimeincome from './Lifetimecomponents/Lifetimeincome'

const LifetimeRecords = () => {
    const { user } = useAuth0();
    // const { Lifetimeexpensedata, setLifetimeexpensedata, Lifetimeincomedata, setLifetimeincomedata } = useContext(Inputfieldcontext);
   



    const [Lifetimeincomedata, setLifetimeincomedata] = useState([
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        }
    ]);

    const [Lifetimeexpensedata, setLifetimeexpensedata] = useState([
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        }
    ]);



    useEffect(() => {

        async function getalltransactions() {
            const response = await getrequest(`${BASE_URL}${GET_ALL_URL}${user.sub}`)
    
            response.forEach((record) => {
                if (record.typeoftransaction === "Expense") {

                    let newArr = [...Lifetimeexpensedata];


                    newArr[0][`${record.reasonofTransaction.split(" ").join("")}`] += Number(record.transactionamount);

                    // setincomedatadynamic(newArr)
                    setLifetimeexpensedata(newArr);
                }
                else {
                    let newArr = [...Lifetimeincomedata];


                    newArr[0][`${record.reasonofTransaction.split(" ").join("")}`] += Number(record.transactionamount);

                    // setincomedatadynamic(newArr)
                    setLifetimeincomedata(newArr);

                }
            })
        }

        getalltransactions();
    },[])





    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="flex justify-center items-center mt-10 text-2xl tracking-wider font-semibold mb-2">LIFETIME RECORDS</h2>
            <Link to="/tracker"><button className="mt-4 text-lg bg-green-400 p-2 text-white rounded-full w-60 font-semibold tracking-wider focus:outline-none">
                Go Back
            </button></Link>

            <Lifetimeexpense income={Lifetimeincomedata} expense={Lifetimeexpensedata} />
            <Lifetimeincome income={Lifetimeincomedata} expense={Lifetimeexpensedata} />

        </div>
    )
}

export default LifetimeRecords
