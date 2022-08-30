"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FaBars_1 = require("@react-icons/all-files/fa/FaBars");
const constants_1 = require("../../constants");
const Avatar_1 = __importDefault(require("../Avatar"));
const Navbar_component_styles_1 = require("./Navbar.component.styles");
/**
 * Navbar components
 * @param {Props} props component props
 * @returns {ReactElement} Navbar components
 */
const Navbar = ({ visible, onPressBurger }) => (react_1.default.createElement(Navbar_component_styles_1.Container, { visible: visible },
    react_1.default.createElement(Navbar_component_styles_1.IconBurgerContainer, { visible: visible, href: "#", onClick: onPressBurger },
        react_1.default.createElement(FaBars_1.FaBars, null)),
    react_1.default.createElement(Navbar_component_styles_1.UserContainer, null,
        react_1.default.createElement(Navbar_component_styles_1.InlineText, null, "Hello,"),
        react_1.default.createElement(Navbar_component_styles_1.UserName, null, "Shipper User"),
        react_1.default.createElement(Avatar_1.default, { src: constants_1.USER_AVATAR_URL, height: '30%', width: '30%' }))));
exports.default = Navbar;
