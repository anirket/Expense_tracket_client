import React, { useContext, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Inputfieldcontext } from '../Contexts/InputfieldContoller'
import { monthindex } from '../Helper/Getmonthindex'

const ChartComponent = ({ component }) => {
    const { month, incomedatadynamic, expensedatadynamic } = useContext(Inputfieldcontext);
    const [chartdata, setchartdata] = useState([]);
    const [backgroundcolor, setbackgroundcolor] = useState([])
    const [bordercolor, setbordercolor] = useState([]);
    const [labels, setlabels] = useState([])



    useEffect(() => {
        let index = monthindex(month);



        if (component === "Expense") {

            setlabels(Object.keys(expensedatadynamic[0]))
            setchartdata(Object.values(expensedatadynamic[index]))
            setbackgroundcolor([
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(48,48,48,0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(128, 0, 0,0.2)',
                'rgba(74, 129, 62, 0.2)'
            ]);
            setbordercolor([
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(48,48,48,1)',
                'rgba(153, 102, 255, 1)',
                'rgba(128, 0, 0,1)',
                'rgba(74, 129, 62, 1)'
            ])

        }
        else {
            setlabels(Object.keys(incomedatadynamic[0]))

            setchartdata(Object.values(incomedatadynamic[index]))
            setbackgroundcolor([
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(48,48,48,0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(74, 129, 62, 0.2)'
            ])
            setbordercolor([
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(48,48,48,1)',
                'rgba(153, 102, 255, 1)',
                'rgba(74, 129, 62, 1)'
            ])
        }

    }, [month, incomedatadynamic, expensedatadynamic])


    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: chartdata,
                backgroundColor: backgroundcolor,
                borderColor: bordercolor,
                borderWidth: 1,
            },
        ],
    };


    return (
        <>
            <div className="w-60 h-60">
                <Doughnut data={data} />
            </div>
        </>
    )
}

export default ChartComponent;