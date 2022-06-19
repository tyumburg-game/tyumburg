"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
var GamePage_1 = require("components/GamePage/GamePage");
var paths_1 = require("Routes/paths");
var PrivateOutlet_1 = require("Routes/PrivateOutlet");
var UiComponentsPage_1 = require("pages/UiComponentsPage/UiComponentsPage");
var StartPage_1 = require("pages/StartPage/StartPage");
var LoginPage_1 = require("pages/LoginPage/LoginPage");
var PasswordChangePage_1 = require("pages/PasswordChangePage/PasswordChangePage");
var EditProfilePage_1 = require("pages/EditProfilePage/EditProfilePage");
var ProfilePage_1 = require("pages/ProfilePage");
require("./App.css");
require("../../styles/index.css");
var LeaderBoardPage_1 = require("pages/LeaderboardPage/LeaderBoardPage");
var NotificationList_1 = require("components/NotificationList/NotificationList");
var SignUpPage_1 = require("pages/SignUpPage/SignUpPage");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.START, element: React.createElement(StartPage_1.StartPage, null) }),
            React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.FORUM, element: React.createElement(react_router_dom_1.Outlet, null) }),
            React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.GAME, element: React.createElement(GamePage_1.GamePage, null) }),
            React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.LEADERBOARD, element: React.createElement(LeaderBoardPage_1.LeaderboardPage, null) }),
            React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.SIGN_IN, element: React.createElement(LoginPage_1.LoginPage, null) }),
            React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.SIGN_UP, element: React.createElement(SignUpPage_1.SignUpPage, null) }),
            React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.PASSWORD_CHANGE, element: React.createElement(PasswordChangePage_1.PasswordChangePage, null) }),
            React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.UI, element: React.createElement(UiComponentsPage_1.UiComponentsPage, null) }),
            React.createElement(react_router_dom_1.Route, { element: React.createElement(PrivateOutlet_1.PrivateOutlet, null) },
                React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.PROFILE, element: React.createElement(ProfilePage_1.ProfilePage, null) }),
                React.createElement(react_router_dom_1.Route, { path: paths_1.PATHS.EDIT_PROFILE, element: React.createElement(EditProfilePage_1.EditProfilePage, null) }))),
        React.createElement(NotificationList_1.NotificationList, null)));
}
exports.App = App;
//# sourceMappingURL=App.js.map