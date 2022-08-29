"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Sidebar_component_styles_1 = require("./Sidebar.component.styles");
const router_1 = require("next/router");
/**
 * Sidebar components
 * @param {Props} props component props
 * @returns {ReactElement} Sidebar components
 */
const Sidebar = ({ visible, onClose, navigationMenu }) => {
    const router = (0, router_1.useRouter)();
    const isRootRoute = router.route === '/';
    return (react_1.default.createElement(Sidebar_component_styles_1.Container, { visible: visible },
        react_1.default.createElement(Sidebar_component_styles_1.CloseButtonContainer, { href: "#", onClick: onClose }, "Close"),
        navigationMenu.map((item, index) => {
            return (react_1.default.createElement(Sidebar_component_styles_1.MenuItems, { key: index, active: router.route === item.path ||
                    (isRootRoute && item.isRoot) },
                react_1.default.createElement(Sidebar_component_styles_1.MenuItemLinks, { href: item.path },
                    item.icon,
                    react_1.default.createElement("span", { style: { marginLeft: '16px' } }, item.title))));
        })));
};
exports.default = Sidebar;
