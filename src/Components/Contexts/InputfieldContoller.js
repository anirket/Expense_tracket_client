import React, { createContext, useState } from 'react'

import { Expenseslist } from '../Helper/Incomeandexpense'


export const Inputfieldcontext = createContext();

const InputfieldContoller = ({ children }) => {






    const [typevalue, settypevalue] = useState("Expense");
    const [category, setcategory] = useState(Expenseslist[0]);
    const [month, setmonth] = useState("January");

    const [incomedatadynamic, setincomedatadynamic] = useState([
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




    



    const [expensedatadynamic, setexpensedatadynamic] = useState([
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


    
    return (
        <Inputfieldcontext.Provider value={{ typevalue, settypevalue, category, setcategory, month, setmonth, incomedatadynamic, setincomedatadynamic, expensedatadynamic, setexpensedatadynamic }}>
            {children}
        </Inputfieldcontext.Provider>
    )
}

export default InputfieldContoller
