import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { PrivateOutlet } from "Routes/PrivateOutlet";
import { ROUTES } from "Routes/routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {ROUTES.map((route) => {
            const RouteOutlet = route.protected ? PrivateOutlet : Outlet;
            
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
