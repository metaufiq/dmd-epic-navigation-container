"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAVIGATION_MENU = exports.USER_AVATAR_URL = exports.PAGE = exports.USER_PER_PAGE = exports.TOTAL_USER = void 0;
exports.TOTAL_USER = 30;
exports.USER_PER_PAGE = 5;
exports.PAGE = exports.TOTAL_USER / exports.USER_PER_PAGE;
exports.USER_AVATAR_URL = 'https://randomuser.me/api/portraits/med/men/18.jpg';
exports.NAVIGATION_MENU = [
    {
        title: 'Beranda',
        path: '#',
        icon: undefined,
    },
    {
        title: 'Driver Management',
        path: '/driver-management',
        icon: undefined,
        isRoot: true,
    },
    {
        title: 'Pickup',
        path: '#',
        icon: undefined
    },
];
