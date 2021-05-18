import React, { useState,useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';





const LifetimeChartcomponent = ({ datatodisplay }) => {
    console.log(datatodisplay[0].asdf);

    const [chartdata, setchartdata] = useState([]);
    const [backgroundcolor, setbackgroundcolor] = useState([])
    const [bordercolor, setbordercolor] = useState([]);
    const [labels, setlabels] = useState([])




    useEffect(() => {

        if (datatodisplay[0].Bills !== undefined) {

            setlabels(Object.keys(datatodisplay[0]))
            setchartdata(Object.values(datatodisplay[0]))
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
            setlabels(Object.keys(datatodisplay[0]))

            setchartdata(Object.values(datatodisplay[0]))
            setbackgroundcolor([
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ])
            setbordercolor([
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ])
        }

    }, [datatodisplay])


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

export default LifetimeChartcomponent;