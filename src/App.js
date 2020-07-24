import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";

import './App.scss';

import {Header, Intro, Profile, LogIn, SignUp, Footer} from './components'




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
            <Route path={"/profile"} component={Profile} />

          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
