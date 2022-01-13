import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header"
import Home from './components/home.jsx'
import Coin from "./components/Coin"
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#FFFFFF",
    color: "Black",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path='/coin/:id' component={Coin} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
