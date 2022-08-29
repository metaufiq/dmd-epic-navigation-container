"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._showSidebar = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const constants_1 = require("../../constants");
const Navbar_1 = __importDefault(require("../Navbar"));
const Sidebar_1 = __importDefault(require("../Sidebar"));
const NavigationContainer_component_styles_1 = require("./NavigationContainer.component.styles");
/**
 * function to set sidebar visibility
 * @param {SetVisible} setVisible set sidebar visible or not
 * @param visible visible condition for sidebar
 * @returns {VoidFunction} execute setVisible
 */
const _showSidebar = (setVisible, visible) => () => setVisible(visible);
exports._showSidebar = _showSidebar;
/**
 * Navigation Container components
 * @param {Props} props component props
 * @returns {ReactElement} Text Input components
 */
const NavigationContainer = (props) => {
    const [visible, setVisible] = (0, react_2.useState)(false);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Navbar_1.default, { visible: visible, userImage: constants_1.USER_AVATAR_URL, onPressBurger: (0, exports._showSidebar)(setVisible, true) }),
        react_1.default.createElement(NavigationContainer_component_styles_1.ContentContainer, null,
            react_1.default.createElement(Sidebar_1.default, { visible: visible, navigationMenu: constants_1.NAVIGATION_MENU, onClose: (0, exports._showSidebar)(setVisible, false) }),
            react_1.default.createElement(NavigationContainer_component_styles_1.ChildContainer, null, props.children))));
};
exports.default = NavigationContainer;
