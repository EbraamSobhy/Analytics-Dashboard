import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        // Add any additional responsive settings here
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <Bar data={chartData} options={options} />
        </div>
    );
}

export default BarChart;