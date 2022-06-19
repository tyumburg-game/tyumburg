"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePage = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var Button_1 = tslib_1.__importDefault(require("components/Button/Button"));
var ButtonsGroup_1 = require("components/ButtonsGroup/ButtonsGroup");
var CenterPageLayout_1 = require("components/Layouts/CenterPageLayout/CenterPageLayout");
var paths_1 = require("Routes/paths");
var CustomLink_1 = tslib_1.__importDefault(require("components/CustomLink/CustomLink"));
var use_app_selector_1 = require("hooks/use-app-selector");
var use_app_dispatch_1 = require("hooks/use-app-dispatch");
var FormFields_1 = require("pages/ProfilePage/FormFields");
var get_user_fields_1 = require("pages/ProfilePage/helpers/get-user-fields");
var auth_1 = require("store/auth");
var user_1 = require("../../store/user");
function ProfilePage() {
    var user = (0, use_app_selector_1.useAppSelector)(user_1.selectUser);
    var userLoadingStatus = (0, use_app_selector_1.useAppSelector)(function (state) { return state.user.status; });
    var error = (0, use_app_selector_1.useAppSelector)(function (state) { return state.user.error; });
    var dispatch = (0, use_app_dispatch_1.useAppDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        dispatch((0, user_1.fetchUser)());
    }, [dispatch]);
    var handleLogoutClick = function () {
        dispatch((0, auth_1.logout)());
        navigate(paths_1.PATHS.SIGN_IN);
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log("Валидация и редактирование профиля.");
    };
    var content;
    if (userLoadingStatus === "loading") {
        content = "Loading...";
    }
    else if (userLoadingStatus === "succeeded") {
        content = React.createElement(FormFields_1.FormFields, { inputs: (0, get_user_fields_1.getUserFields)(user.user) });
    }
    else if (userLoadingStatus === "failed") {
        content = React.createElement("div", null, error);
    }
    return (React.createElement(CenterPageLayout_1.CenterPageLayout, null,
        React.createElement("form", { action: "#", className: "sign-up-page__form", onSubmit: handleSubmit },
            React.createElement(Modal_1.default, { fixed: false },
                React.createElement(Modal_1.default.Header, { title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442" }),
                React.createElement(Modal_1.default.Content, null, content),
                React.createElement(Modal_1.default.Footer, null,
                    React.createElement(ButtonsGroup_1.ButtonsGroup, { direction: "vertical", className: "buttons-group_align-right" },
                        React.createElement(CustomLink_1.default, { to: paths_1.PATHS.EDIT_PROFILE, mode: "secondary" }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E"),
                        React.createElement(CustomLink_1.default, { to: paths_1.PATHS.PASSWORD_CHANGE, mode: "secondary" }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"),
                        React.createElement(Button_1.default, { onClick: handleLogoutClick, mode: "dangerous" }, "\u0412\u044B\u0439\u0442\u0438")))))));
}
exports.ProfilePage = ProfilePage;
//# sourceMappingURL=ProfilePage.js.map