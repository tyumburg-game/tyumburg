import { Outlet, Route, Routes } from "react-router-dom";
import { GamePage } from "components/GamePage/GamePage";
import { PATHS } from "Routes/paths";
import { PrivateOutlet } from "Routes/PrivateOutlet";
import { UiComponentsPage } from "pages/UiComponentsPage/UiComponentsPage";
import { StartPage } from "pages/StartPage/StartPage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { PasswordChangePage } from "pages/PasswordChangePage/PasswordChangePage";
import { EditProfilePage } from "pages/EditProfilePage/EditProfilePage";
import { ProfilePage } from "pages/ProfilePage";
import "./App.css";
import "../../styles/index.css";
import { LeaderboardPage } from "pages/LeaderboardPage/LeaderBoardPage";
import { NotificationList } from "components/NotificationList/NotificationList";
import { SignUpPage } from "pages/SignUpPage/SignUpPage";

export function App() {
  return (
    <>
      <Routes>
        {/* TODO заиметь Outlet на готовые компоненты */}
        <Route path={PATHS.START} element={<StartPage />} />
        <Route path={PATHS.FORUM} element={<Outlet />} />
        <Route path={PATHS.GAME} element={<GamePage />} />
        <Route path={PATHS.LEADERBOARD} element={<LeaderboardPage />} />
        <Route path={PATHS.SIGN_IN} element={<LoginPage />} />
        <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />
        <Route path={PATHS.PASSWORD_CHANGE} element={<PasswordChangePage />} />
        <Route path={PATHS.UI} element={<UiComponentsPage />} />
        <Route element={<PrivateOutlet />}>
          <Route path={PATHS.PROFILE} element={<ProfilePage />} />
          <Route path={PATHS.EDIT_PROFILE} element={<EditProfilePage />} />
        </Route>
      </Routes>
      <NotificationList />
    </>
  );
}
