import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import PieChart from "../Charts/PieChart";
import { useState } from "react";
import {UserData} from '../Charts/Data';

{/* Data */}
const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
    {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
    },
    ],
});
{/* Charts */}
<div style={{ width: 700 }}>
<BarChart chartData={userData} />
</div>
<div style={{ width: 700 }}>
<LineChart chartData={userData} />
</div>
<div style={{ width: 700 }}>
<PieChart chartData={userData} />
</div>