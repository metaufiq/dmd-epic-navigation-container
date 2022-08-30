"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAVIGATION_MENU = exports.USER_AVATAR_URL = exports.PAGE = exports.USER_PER_PAGE = exports.TOTAL_USER = void 0;
const react_1 = __importDefault(require("react"));
const TiHome_1 = require("@react-icons/all-files/ti/TiHome");
const RiCalendar2Fill_1 = require("@react-icons/all-files/ri/RiCalendar2Fill");
const FaUserCircle_1 = require("@react-icons/all-files/fa/FaUserCircle");
exports.TOTAL_USER = 30;
exports.USER_PER_PAGE = 5;
exports.PAGE = exports.TOTAL_USER / exports.USER_PER_PAGE;
exports.USER_AVATAR_URL = 'https://randomuser.me/api/portraits/med/men/18.jpg';
exports.NAVIGATION_MENU = [
    {
        title: 'Beranda',
        path: '#',
        icon: react_1.default.createElement(TiHome_1.TiHome, null),
    },
    {
        title: 'Driver Management',
        path: '/driver-management',
        icon: react_1.default.createElement(FaUserCircle_1.FaUserCircle, null),
        isRoot: true,
    },
    {
        title: 'Pickup',
        path: '#',
        icon: react_1.default.createElement(RiCalendar2Fill_1.RiCalendar2Fill, null)
    },
];
