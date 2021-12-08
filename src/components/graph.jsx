import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { useEffect } from "react";
import { array } from "prop-types";

const useStyles = createUseStyles({
  canvas: {
    display: "block",
    width: "100%",
    height: 500,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d1d1d1",
  },
});

const Graph = ({ state }) => {
  const classes = useStyles();
  // console.log("state", state);

  useEffect(() => {
    const canv = document.getElementById("canvas");
    const ctx = canv.getContext("2d");
    ctx.clearRect(0, 0, 1299, 496);
    ctx.beginPath();
    ctx.fillStyle = '#5F5F5F';
    ctx.font = '50px Georgia'
    ctx.fillText("DATA", 50, 70)

    ctx.beginPath();
    ctx.strokeStyle = '#ADADAD';

    ctx.moveTo(0, 100);
    ctx.lineTo(250, 100)
    ctx.stroke();

    updateGraph(arrID1, 1);
    updateGraph(arrID2, 2);
  });

  const getTempArrByID = (state, id) => {
    let arr = state[id].reduce((acc, obj) => {
      acc.push(obj?.tempData)
      return acc
    }, []).filter((el) => el <= 100)

    return arr
  }

  const updateGraph = (arr, id) => {
    const width = 1299
    const step = width / (arr.length - 1);
    let x = 0;
    const height = 496
    const rectStep = id === 1 ? width / 4 : width / 4 * 3
    const color = id === 1 ? '#5F5F5F' : '#ADADAD'
    let prevY = height - arr[0]

    const canv = document.getElementById("canvas");
    const ctx = canv.getContext("2d");

    ctx.beginPath();

    ctx.fillStyle = color
    ctx.fillRect(rectStep, 170, 20, 20);
    ctx.font = '30px Georgia'
    ctx.fillText(id, rectStep + 30, 188)

    ctx.strokeStyle = color;

    ctx.moveTo(0, prevY);
    arr.forEach((el) => {
      x += step
      const scaledY = height - (el * height / 100)
      ctx.lineTo(x, scaledY)
      ctx.moveTo(x, scaledY)
      prevY = el * height / 100
    });

    ctx.stroke();
  };

  const arrID1 = getTempArrByID(state, 1)
  const arrID2 = getTempArrByID(state, 2)

  console.log("arrID1", arrID1);
  console.log("arrID2", arrID2);




  return (
    <canvas id="canvas" width="1299" height="496" className={classes.canvas}></canvas>

  );
};

Graph.propTypes = {
  state: PropTypes.object.isRequired,
};

export default Graph;
