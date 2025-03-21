import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
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

    return <div style={chartStyle}><Pie data={chartData} options={chartOptions} /></div>;
}

export default PieChart;