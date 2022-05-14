import { GamePage } from "components/GamePage/GamePage";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { PATHS } from "Routes/paths";
import { PrivateOutlet } from "Routes/PrivateOutlet";
import "./App.css";
import { UiComponentsPage } from "pages/UiComponentsPage/UiComponentsPage";
import { StartPage } from "pages/StartPage/StartPage";

export function App() {
  return (
    <Router>
      <Routes>
        {/* TODO заиметь Outlet на готовые компоненты */}
        <Route path={PATHS.START} element={<StartPage />} />
        <Route path={PATHS.FORUM} element={<Outlet />} />
        <Route path={PATHS.GAME} element={<GamePage />} />
        <Route path={PATHS.LEADERBOARD} element={<Outlet />} />
        <Route path={PATHS.SIGN_IN} element={<Outlet />} />
        <Route path={PATHS.SIGN_UP} element={<Outlet />} />
        <Route path={PATHS.UI} element={<UiComponentsPage />} />
        <Route element={<PrivateOutlet />}>
          <Route path={PATHS.PROFILE} element={<Outlet />} />
        </Route>
      </Routes>
    </Router>
  );
}
