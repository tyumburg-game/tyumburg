import { Game } from "components/Game/Game";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { PATHS } from "Routes/paths";
import { PrivateOutlet } from "Routes/PrivateOutlet";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* TODO заиметь Outlet на готовые компоненты */}
          <Route path={PATHS.MAIN} element={<Outlet />} />
          <Route path={PATHS.FORUM} element={<Outlet />} />
          <Route path={PATHS.GAME} element={<Game />} />
          <Route path={PATHS.LEADERBOARD} element={<Outlet />} />
          <Route path={PATHS.SIGN_IN} element={<Outlet />} />
          <Route path={PATHS.SIGN_UP} element={<Outlet />} />
          <Route element={<PrivateOutlet />}>
            <Route path={PATHS.PROFILE} element={<Outlet />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}
export default App;