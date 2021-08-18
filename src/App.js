import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import WordCard from "./components/cards/WordCard";
import { Input, Button } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

axios.defaults.baseURL = "http://localhost:3001";

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",

    [breakpoints.up(800)]: {
      width: 800,
      margin: "0 auto",
    },
  },
  heading: {
    fontSize: 32,
    margin: "50px 0 20px 0",
  },
  input: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 20,
  },
}));

function App() {
  const [inputValue, setInputValue] = useState("");
  const [wordsList, setWordsList] = useState([]);
  const [error, setError] = useState(false);
  const classes = useStyles();
  const handleClick = async () => {
    if (inputValue.length > 1 && /^[a-zA-Z]+$/.test(inputValue)) {
      const { data } = await axios.get("/get-words", {
        params: { word: inputValue },
      });
      setWordsList(data.wordsWithDescription);
    } else {
      setError(true);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className={classes.container}>
        <div className={classes.heading}>Enter you letters here</div>
        <div className={classes.input}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <Button className={classes.button} onClick={handleClick}>
          CLICK
        </Button>
        <div>
          {wordsList.map((i) => (
            <WordCard key={i.meaning} item={i} />
          ))}
        </div>
      </div>
      <Snackbar
        open={error}
        autoHideDuration={2000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity="warning">
          Incorrect data. Make sure there is at least 2 letters and no other
          symbols.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
