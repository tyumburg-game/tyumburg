"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var tslib_1 = require("tslib");
// import {
//   BrowserRouter as Router,
//   Outlet,
//   Route,
//   Routes,
// } from "react-router-dom";
// import { GamePage } from "components/GamePage/GamePage";
// import { PATHS } from "Routes/paths";
// import { PrivateOutlet } from "Routes/PrivateOutlet";
// import { UiComponentsPage } from "pages/UiComponentsPage/UiComponentsPage";
// import { StartPage } from "pages/StartPage/StartPage";
// import { LoginPage } from "pages/LoginPage/LoginPage";
// import { SignUpPage } from "pages/SignUpPage/SignUpPage";
// import { PasswordChangePage } from "pages/PasswordChangePage/PasswordChangePage";
// import { EditProfilePage } from "pages/EditProfilePage/EditProfilePage";
// import { ProfilePage } from "pages/ProfilePage/ProfilePage";
// import "./App.css";
// import { LeaderboardPage } from "pages/LeaderboardPage/LeaderBoardPage";
// @ts-ignore
var react_1 = tslib_1.__importStar(require("react"));
function App() {
    (0, react_1.useEffect)(function () {
        console.log("Hello");
    }, []);
    return (react_1.default.createElement("div", null, "React app")
    // <Router>
    //   <Routes>
    //     {/* TODO заиметь Outlet на готовые компоненты */}
    //     <Route path={PATHS.START} element={<StartPage />} />
    //     <Route path={PATHS.FORUM} element={<Outlet />} />
    //     <Route path={PATHS.GAME} element={<GamePage />} />
    //     <Route path={PATHS.LEADERBOARD} element={<LeaderboardPage />} />
    //     <Route path={PATHS.SIGN_IN} element={<LoginPage />} />
    //     <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />
    //     <Route path={PATHS.PASSWORD_CHANGE} element={<PasswordChangePage />} />
    //     <Route path={PATHS.UI} element={<UiComponentsPage />} />
    //     <Route element={<PrivateOutlet />}>
    //       <Route path={PATHS.PROFILE} element={<ProfilePage />} />
    //       <Route path={PATHS.EDIT_PROFILE} element={<EditProfilePage />} />
    //     </Route>
    //   </Routes>
    // </Router>
    );
}
exports.App = App;
