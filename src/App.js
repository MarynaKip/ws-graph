import "./App.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/header";
import Indicator from "./components/indicator";
import Graph from "./components/graph";

const websocket = new WebSocket("ws://localhost:8999");

function App() {
  const [tempObj, SetTempObj] = useState({ 1: [], 2: [] });

  websocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    SetTempObj({
      1: [...tempObj[1].filter(item => ((Date.now() - 5000)) < item.timeStamp), { 'tempData': data[0].temperature, 'timeStamp': Date.now() }],
      2: [...tempObj[2].filter(item => ((Date.now() - 5000)) < item.timeStamp), { 'tempData': data[1].temperature, 'timeStamp': Date.now() }],
    });
    // console.log("tempObj", tempObj);
  };



  const ConnectNotify = () => toast("Websocket is connected");
  const DisconnectNotify = () => toast("Websocket is disconnected");
  websocket.onopen = () => {
    ConnectNotify();
  };

  websocket.onclose = (e) => {
    DisconnectNotify();
  };

  const temp1Obj = tempObj[1][tempObj[1].length - 1];
  const temp2Obj = tempObj[2][tempObj[2].length - 1];
  const temp1 = temp1Obj?.tempData
  const temp2 = temp2Obj?.tempData

  console.log("temp1Obj", temp1Obj);
  console.log("temp1Obj", temp1Obj);
  console.log("temp1", temp1);
  console.log("temp2", temp2);

  return (
    <div className="App">
      <Header />
      <section className="indicators-section">
        <div className="container">
          <ul className="indicator_list">
            <li className="indicator_item">
              <Indicator temp={temp1} id={1} />
            </li>
            <li className="indicator_item">
              <Indicator temp={temp2} id={2} />
            </li>
          </ul>
        </div>
      </section>
      <div className="container">
        <Graph state={tempObj} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
