import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    const chartStyle = {
        width: windowWidth < 768 ? '100%' : '80%',
        height: windowWidth < 768 ? '300px' : '500px',
    };

    return <div style={chartStyle}><Line data={chartData} options={chartOptions} /></div>;
}

export default LineChart;