import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    position: "relative",
        height: 100,
        textAlign: "right",
        paddingRight: 300,
        paddingTop: 20,
        paddingBottom: 20,
        color: "#858585",

    },
    header_descr: {
        fontWeight: 400,

    },
    header_line: {
          position: "absolute",
  width: "100%",
  height: 2,
  backgroundColor: "#d1d1d1",
  bottom: 0,
  left: 0,
    }
});

const Header = () => {
  const classes = useStyles();

    return (
        <header className={classes.header}>
            <h2>WILLIOT</h2>
            <h3 className={classes.header_descr}>Test</h3>
            <div className={classes.header_line}></div>
      </header>
  );
};

export default Header;
