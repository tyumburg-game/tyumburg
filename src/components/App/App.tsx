import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { PrivateRoute } from "Routes/PrivateRoute";
import { ROUTES } from "Routes/routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<h1 className="title">Tyumburg Game</h1>} />
          {ROUTES.map((route) => {
            const RouteOutlet = route.protected ? PrivateRoute : Outlet;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<RouteOutlet />}
              >
                <Route path={route.path} element={route.component ? <route.component /> : route.path} />
              </Route>
            );
          })}
        </Routes>
      </Router>
    );
  }
}
export default App;
