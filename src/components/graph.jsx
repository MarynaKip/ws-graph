// import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import { useEffect } from "react";

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
  console.log("state", state);
  //   console.log("temp2", temp2);

  const classes = useStyles();

  // const updateGraph = (arr) => {
  //   let x = 0;
  //   const canv = document.getElementById("canvas");
  //   const ctx = canv.getContext("2d");

  //   // canv.width = window.innerWidth;
  //   // canv.height = window.innerHeight;
  //   ctx.moveTo(0, 0);
  //   arr.forEach((el) => {
  //     return ctx.lineTo(x, el);
  //   });

  //   ctx.stroke();
  // };
  // useEffect(() => {
  //   updateGraph(state[1]);
  //   updateGraph(state[2]);
  // });

  return (
    <canvas id="canvas" className={classes.canvas}></canvas>
    // <li key={contact.id} className={classes.item}>
    //   {contact.name}
    //   {contact.number}
    //   <button id={contact.id} type="button" onClick={onClick}>
    //     Delete
    //   </button>
    // </li>
  );
};

// Graph.propTypes = {
//   temp1: PropTypes.number.isRequired,
//   temp2: PropTypes.number.isRequired,
// };

export default Graph;
