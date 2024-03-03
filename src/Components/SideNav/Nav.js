import React from "react";
import Card from "../Cards/Card";
import Doughnut from '../img/doughnut.png';
import Report from '../img/report.png';
import './Nav.css';

function Nav() {
    return(
    <div>
        <div id="sidebar">
        <a href="#"><span><img width="60" height="60" src="https://img.icons8.com/external-soft-fill-juicy-fish/60/external-barchart-seo-soft-fill-soft-fill-juicy-fish.png" alt="external-barchart-seo-soft-fill-soft-fill-juicy-fish"/></span>BarChart</a>
        <a href="#"><span><img width="60" height="60" src="https://img.icons8.com/external-soft-fill-juicy-fish/60/external-line-data-visualisation-soft-fill-soft-fill-juicy-fish.png" alt="external-line-data-visualisation-soft-fill-soft-fill-juicy-fish"/></span>LineChart</a>
        <a href="#"><span><img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/chart.png" alt="chart"/></span>PieChart</a>
        <a href="#"><span><img src={Doughnut}/></span>Doughnut<br/>Chart</a>
        <a href="#"><span><img src={Report}/></span>Reports</a>
        </div>
        <h1>Management Overview</h1>
        <Card />
    </div>
    )
}

export default Nav;