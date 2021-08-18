import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  cardContainer: {
    border: "1px solid gray",
    padding: 10,
    margin: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  score: {
    marginLeft: 20,
    flexShrink: 0,
    fontWeight: 600,
  },
}));

function WordCard({ item }) {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <div>
        {item.word} - {item.meaning}
      </div>
      <div className={classes.score}>Score: {item.score}</div>
    </div>
  );
}

export default WordCard;
