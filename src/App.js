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
  // setTimeout(() => {
  //   SetTempObj({
  //     1: [...tempObj[1].splice(0, 1)],
  //     2: [...tempObj[2].splice(0, 1)],
  //   });
  // }, 3000);
  websocket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    SetTempObj({
      1: [...tempObj[1], data[0]["temperature"]],
      2: [...tempObj[2], data[1].temperature],
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
  useEffect(() => {
    // console.log("did update");
    // console.log("temp1", temp1);
    // console.log("temp2", temp2);
  });

  const temp1 = tempObj[1][tempObj[1].length - 1];
  const temp2 = tempObj[2][tempObj[2].length - 1];
  // let temp1ForGraph;
  // let temp2ForGraph;
  // if (temp1 <= 100 && temp2 <= 100) {
  //   temp1ForGraph = temp1;
  //   temp2ForGraph = temp2;
  // }

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
