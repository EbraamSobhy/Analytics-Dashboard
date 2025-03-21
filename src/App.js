import Nav from "./Components/SideNav/Nav";
import { useState } from "react";
import {UserData} from './Data';
import BarChart from './Components/BarCharts';
import LineChart from './Components/LineChart';
import PieChart from './Components/PieChart';
import DoughnutChart from './DoughnutChart';
import Lines from './Lines';
import Tables from './Table';
import './App.css';
import '../src/index.css';

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Products (Users)",
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
  
  return (
    <div className="App">
      <Nav />
    <hr style={{borderTop:"1px solid black", width:"1570px", padding:"5px"}}></hr>
      <div style={{display:"flex"}}>
        <p>Users Gainefe</p>
      <div style={{ width: 200, flex: 1, margin: "0px 10px", padding: "20px", order: "1px solid #ccc",
        boxsizing: "border-box" }}>
          <p style={{textAlign:"center", fontSize:"20px", fontWeight:"bolder", fontFamily:"roboto"}}>Products Registered</p>
          <ul  style={{fontFamily:"roboto"}}>
          <li>Crazy Week</li>
          <li>Strong Day</li>
          <li>Other</li>
        </ul>
        <BarChart chartData={userData} />
        <hr style={{width:"870px", borderTop:"1px solid black"}}></hr>
        <DoughnutChart />
      </div>

      <div style={{ width: 200, flex: 1, margin: "10px", padding: "4px", order: "1px solid #ccc",
        boxsizing: "border-box" }}>
          <h4 style={{textAlign:"center", fontSize:"20px", fontFamily:"roboto", fontWeight:"bolder"}}>Login Activity</h4>
          <ul  style={{fontFamily:"roboto"}}>
          <li>Beginners</li>
          <li>Professionals</li>
          <li>Other</li>
        </ul>
        <LineChart chartData={userData} />
        <br /><br />
        <br />
        <Lines />
      </div>

      <div style={{borderLeft:"1px solid black", height:"980px"}}></div>

      <div style={{ width: 100, flex: 1, margin: "10px", padding: "7px", order: "1px solid #ccc",
        boxsizing: "border-box"}}>
          <p style={{textAlign:"center", fontSize:"20px", fontWeight:"bolder", fontFamily:"roboto"}}>Devices and OS metrics</p>
          <ul style={{fontFamily:"roboto"}}>
          <li>iphone</li>
          <li>Xiaomi</li>
          <li>Google Pixels</li>
          <li>Samsung</li>
          <li>Other</li>
        </ul>
        <PieChart chartData={userData} />
        <hr style={{width:"550px", borderTop:"1px solid black"}}></hr>
        <Tables />
        </div>
      </div>
    </div>
  );
}

export default App;