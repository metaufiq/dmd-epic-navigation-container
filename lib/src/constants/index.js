"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAVIGATION_MENU = exports.USER_AVATAR_URL = exports.PAGE = exports.USER_PER_PAGE = exports.TOTAL_USER = void 0;
const react_1 = __importDefault(require("react"));
const ti_1 = require("react-icons/ti");
const ri_1 = require("react-icons/ri");
const fa_1 = require("react-icons/fa");
exports.TOTAL_USER = 30;
exports.USER_PER_PAGE = 5;
exports.PAGE = exports.TOTAL_USER / exports.USER_PER_PAGE;
exports.USER_AVATAR_URL = 'https://randomuser.me/api/portraits/med/men/18.jpg';
exports.NAVIGATION_MENU = [
    {
        title: 'Beranda',
        path: '#',
        icon: react_1.default.createElement(ti_1.TiHome, null),
    },
    {
        title: 'Driver Management',
        path: '/driver-management',
        icon: react_1.default.createElement(fa_1.FaUserCircle, null),
        isRoot: true,
    },
    {
        title: 'Pickup',
        path: '#',
        icon: react_1.default.createElement(ri_1.RiCalendar2Fill, null)
    },
];
