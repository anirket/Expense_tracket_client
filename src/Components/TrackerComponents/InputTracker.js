import React, { useContext, useEffect, useState } from 'react'
import { BiRupee } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import Dropdowninput from '../Helper/Dropdowninput';
import { FaTrash } from "react-icons/fa";
import { Expenseslist, Incomelist } from '../Helper/Incomeandexpense'
import { Inputfieldcontext } from '../Contexts/InputfieldContoller';
import { useAuth0 } from "@auth0/auth0-react"
import { BASE_URL, POST_URL, GET_URL, DELETE_URL, GET_ALL_URL } from '../utils/apiendpoints'
import { postrequest, getrequest, deleterequest } from '../utils/apirequests'
import Loadingtransactions from '../Helper/Loadingtransactions'
import Notifications, { notify } from 'react-notify-toast';
import { monthindex } from '../Helper/Getmonthindex';


const InputTracker = () => {
    const { user } = useAuth0();
    const type = ["Expense", "Income"]
    const { typevalue, setcategory, month, category, incomedatadynamic, setincomedatadynamic, setexpensedatadynamic, expensedatadynamic, Lifetimeexpensedata, setLifetimeexpensedata, Lifetimeincomedata, setLifetimeincomedata } = useContext(Inputfieldcontext);
    const [currentinput, setcurrentinput] = useState(Expenseslist);
    const [amount, setamount] = useState(0);
    const [currenttransactions, setcurrenttransction] = useState([]);
    const [emptytransactions, setemptytransactions] = useState(false);
    const [fetchingtransactions, setfetchingtransaction] = useState(true);
    const [total, settotal] = useState(0);


    const [expensedummydata, setexpensedummydata] = useState([
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
        {
            Essentials: 0,
            Travel: 0,
            Education: 0,
            Bills: 0,
            Luxury: 0,
            CryptoLoss: 0,
            Miscellaneous: 0
        },
    ])







    const [incomedummydata, setincomedummydata] = useState([
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
        {
            Salary: 0,
            BankInterests: 0,
            Mutualfunds: 0,
            CryptoGains: 0,
            Dividends: 0,
            Miscellaneous: 0
        },
    ]);











    useEffect(() => {

        if (typevalue === "Expense") {
            setcurrentinput(Expenseslist)
            setcategory(Expenseslist[0])
        }
        else {
            setcurrentinput(Incomelist)
            setcategory(Incomelist[0])
        }
    }, [typevalue, setcategory])


    useEffect(() => {
        console.log(incomedatadynamic);
    }, [incomedatadynamic])
    //CAlculate the total
    useEffect(() => {
        let income = 0, expense = 0, total1;
        if (currenttransactions.length !== 0) {
            currenttransactions.forEach((transaction) => {
                if (transaction.typeoftransaction === "Income") {
                    income += transaction.transactionamount;
                    setamount(amount);
                }
                else {
                    expense += transaction.transactionamount;
                    setamount(amount);
                }
            })
        }
        total1 = income - expense;
        settotal(total1)

    }, [currenttransactions, amount])

    //get all transcations here of that month

    async function getalltransactionsofdefaultmonth() {

        setcurrenttransction([])
        setfetchingtransaction(true);
        const response = await getrequest(`${BASE_URL}${GET_URL}${user.sub}/${month}`);

        if (response.length !== 0) {
            setemptytransactions(false);
            setcurrenttransction(response);
            setfetchingtransaction(false);
        }
        else {
            setcurrenttransction([]);
            setfetchingtransaction(false);
            setemptytransactions(true);
        }

    }

    const chartcalculation = () => {
        console.log("running....");


        console.log(incomedatadynamic);

        getrequest(`${BASE_URL}${GET_ALL_URL}${user.sub}`)
            .then((alldata) => {
                alldata.forEach((data) => {


                    if (data.typeoftransaction === "Income") {


                        let newArr = [...incomedummydata];
                        let valueofmonth = monthindex(data.month);
                        newArr[valueofmonth][`${data.reasonofTransaction.split(" ").join("")}`] += Number(data.transactionamount);

                        setincomedatadynamic(newArr)
                    }
                    else {


                        let newArr = [...expensedummydata];
                        let valueofmonth = monthindex(data.month);


                        newArr[valueofmonth][`${data.reasonofTransaction.split(" ").join("")}`] += Number(data.transactionamount);

                        setexpensedatadynamic(newArr)
                    }

                })
            })


    }

    useEffect(() => {

        chartcalculation();




    }, [])



    useEffect(() => {

        getalltransactionsofdefaultmonth();

    }, [month])


    //for submitting transaction
    async function submittransaction(e) {
        e.preventDefault();

        if (amount <= 0) {
            let myColor = { background: '#F87171', text: "#FFFFFF" };
            notify.show("Kindly enter valid inputs", "custom", 3000, myColor)
            setamount(0);
            return;
        }
        const payload = {
            sub: user.sub,
            month: month,
            type: typevalue,
            reason: category,
            amount: amount,
            name: user.name
        }
        const response = await postrequest(`${BASE_URL}${POST_URL}`, payload)

        let myColor = { background: '#34D399', text: "#FFFFFF" };
        notify.show("Transaction added", "custom", 3000, myColor)
        setamount(0);
        setemptytransactions(false);
        setcurrenttransction([response, ...currenttransactions])


        if (typevalue === "Expense") {
            let newArr = [...expensedatadynamic];
            let valueofmonth = monthindex(month);


            newArr[valueofmonth][`${category.split(" ").join("")}`] += Number(amount);


            setexpensedatadynamic(newArr);
        }
        else {
            let newArr = [...incomedatadynamic];
            let valueofmonth = monthindex(month);


            newArr[valueofmonth][`${category.split(" ").join("")}`] += Number(amount);


            setincomedatadynamic(newArr)
        }

    }

    //for deleting transaction
    async function deletetransaction(_id) {

        const data = await deleterequest(`${BASE_URL}${DELETE_URL}${_id}`);
        getalltransactionsofdefaultmonth();


        if (data.typeoftransaction === "Income") {
            console.log("incomehere");
            let newArr = [...incomedatadynamic];
            let valueofmonth = monthindex(data.month);

            newArr[valueofmonth][`${data.reasonofTransaction.split(" ").join("")}`] -= Number(data.transactionamount);

            setincomedatadynamic(newArr)








        }
        else {
            console.log(data.reasonofTransaction);

            let newArr = [...expensedatadynamic];
            let valueofmonth = monthindex(data.month);


            newArr[valueofmonth][`${data.reasonofTransaction.split(" ").join("")}`] -= Number(data.transactionamount);

            setexpensedatadynamic(newArr)
        }








    }

    return (

        <div className="inputdiv border-2 border-gray-500 p-4 mt-5 md:mt-0 rounded-lg">
            <Notifications />
            <h2 className="totalbalance flex items-center justify-around text-lg bg-green-300 p-1 rounded-full text-black">Month Balance
            <span className="flex items-center font-bold">
                    <span >
                        <BiRupee />
                    </span>
                    {total}
                </span>
            </h2>

            <div className="Inputfields flex flex-col justify-between">
                <div className="dropdwoninputtracker flex  justify-between">
                    <Dropdowninput inputtype="expense" content={type} initialvalue={"Expense"} height={24} categoryvalue={"type"} />
                    <Dropdowninput inputtype="typeofexpense" content={currentinput} initialvalue={Expenseslist[0]} height={32} categoryvalue={"options"} />
                </div>
                <form className="mt-5" onSubmit={(e) => submittransaction(e)}>
                    <input className=" mt-2 shadow appearance-none border-2 border-gray-300 rounded w-full py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="number"
                        placeholder="Enter Amount..."
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}
                        required
                    />
                    <button type="submit" className="submitbutton bg-gray-200 p-2 mt-5 border-2 border-gray-300">Create</button>
                </form>
            </div>

            <div className="alltransactions bg-white  mt-3 overflow-scroll">
                <h2 className="p-2 text-center tracking-wider font-semibold bg-white border-b-2 border-t-2 border-black ">TRANSACTIONS</h2>
                <div className="alltransactionitems overflow-scroll">


                    {fetchingtransactions && <Loadingtransactions />}

                    {emptytransactions && <div className="nocontent flex justify-center items-center bg-gray-300">
                        <h2 className="text-lg tracking-wider">No Transactions to display</h2></div>}

                    {currenttransactions.length !== 0 &&
                        currenttransactions.map((transaction) => {
                            if (transaction.typeoftransaction === "Income") {
                                let { _id } = transaction;
                                // console.log(_id);
                                return (
                                    <div key={transaction._id} className="listitems bg-green-200 border-b-2 border-gray-400">
                                        <div className="transactionitems flex items-center p-2 justify-between">
                                            <span className="flex items-center">
                                                <span className="text-green-600">
                                                    <HiOutlineCurrencyRupee size={"1.6rem"} />
                                                </span>
                                                <span className="ml-2 font-semibold">
                                                    {transaction.reasonofTransaction}

                                                </span>
                                            </span>
                                            <span className="pr-2">
                                                {transaction.typeoftransaction}
                                            </span>
                                        </div>
                                        <div className="transactionitems  flex justify-between  items-center pb-2">
                                            <span className="flex items-center pl-5">    <BiRupee /> {transaction.transactionamount}</span>
                                            <span className="pr-5 cursor-pointer p-1" onClick={() => deletetransaction(_id)}><FaTrash /></span>
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                let { _id } = transaction;

                                return (
                                    <div key={transaction._id} className="listitems bg-red-200 border-b-2 border-gray-400">
                                        <div className="transactionitems flex items-center p-2 justify-between">
                                            <span className="flex items-center">
                                                <span className="text-red-600">
                                                    <HiOutlineCurrencyRupee size={"1.6rem"} />
                                                </span>
                                                <span className="ml-2 font-semibold">
                                                    {transaction.reasonofTransaction}
                                                </span>
                                            </span>
                                            <span className="pr-2">
                                                {transaction.typeoftransaction}
                                            </span>
                                        </div>
                                        <div className="transactionitems  flex justify-between  items-center pb-2">
                                            <span className="flex items-center pl-5">    <BiRupee /> {transaction.transactionamount}</span>
                                            <span className="pr-5 cursor-pointer p-1" onClick={() => deletetransaction(_id)}><FaTrash /></span>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default InputTracker
