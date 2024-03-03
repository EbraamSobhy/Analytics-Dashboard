    import React from 'react';
    import { Doughnut } from 'react-chartjs-2';

    const DoughnutChart = () => {
    const data = {
        labels: ['France', 'Italy', 'Germany', 'Spain'],
        datasets: [
        {
            data: [300, 50, 100, 200],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
        },
        ],
    };

    return (
        <div style={{width:"350px", padding:"5px", content:"left", height:"500px"}}>
            <h2 style={{textAlign:"center", fontFamily:"roboto", fontSize:"25px", fontWeight:"bolder"}}>Audience</h2>
            <ul className='Audience'>
            <li>France</li>
            <li>Italy</li>
            <li>Germany</li>
            <li>Spain</li>
        </ul>
        <br/>
        <Doughnut data={data} />
        </div>
    );
    };

    export default DoughnutChart;
