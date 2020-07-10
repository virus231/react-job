import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";

import './App.scss';

import Header  from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";



import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />  
        <div className="app-wrapper-content">
          <Switch>
            <Route path={'/'} exact component={Intro} />
            <Route path={"/login"} component={LogIn} />
            <Route path={"/signup"} component={SignUp} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
