import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import headerImage from "../../images/header.png";

const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    backgroundColor: "pink",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 32,

    [breakpoints.up(800)]: {
      marginTop: 50,
      height: "300px",
      color: "white",
      fontSize: 48,
      backgroundImage: `url(${headerImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return <div className={classes.header}>CondingChallenge Scrabble</div>;
}

export default Header;
