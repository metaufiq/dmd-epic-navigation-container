"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@dmd/test");
const _1 = __importDefault(require("."));
const themes_1 = require("../../configs/themes");
const constants_1 = require("../../constants");
jest.mock('next/router', () => (Object.assign(Object.assign({}, jest.requireActual('next/router')), { useRouter: () => ({
        router: {
            route: '/'
        }
    }) })));
describe('NavbarSnapshot', () => {
    const configs = [
        {
            desc: 'should render normal Navbar with visible value is equal to true',
            props: {
                visible: true,
                navigationMenu: constants_1.NAVIGATION_MENU,
                onClose: () => { }
            },
            theme: themes_1.themes,
            useTheme: true
        },
        {
            desc: 'should render normal Navbar with visible value is equal to false',
            props: {
                visible: false,
                navigationMenu: constants_1.NAVIGATION_MENU,
                onClose: () => { }
            },
            theme: themes_1.themes,
            useTheme: true
        }
    ];
    (0, test_1.assertSnapshots)(_1.default, configs);
});
