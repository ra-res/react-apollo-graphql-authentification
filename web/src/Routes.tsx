/** @format */
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Bye } from "./pages/Bye";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/register'>Register</Link>
            <br></br>
            <Link to='/login'>Login</Link>
            <br></br>
            <Link to='/bye'>Bye</Link>
          </div>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/bye' component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
