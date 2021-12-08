import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  indicator_rectangle: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#d1d1d1",
    height: 70,
    padding: 15,
    color: "#858585",
  },
});

const Indicator = (props) => {
  const classes = useStyles();
  console.log('props', props);
  const { id, temp } = props
  return (
    <div className={classes.indicator_rectangle}>
      <h4>ID {id}</h4>
      <p>Temp: {temp} C</p>
    </div>
  );
};

Indicator.propTypes = {
  props: PropTypes.shape({
    temp: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  })
};

export default Indicator;
