"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@dmd/test");
const _1 = __importDefault(require("."));
const themes_1 = require("../../configs/themes");
describe('NavbarSnapshot', () => {
    const configs = [
        {
            desc: 'should render normal Navbar with visible value is equal to true',
            props: {
                visible: true,
                userImage: 'user_image_url',
                onPressBurger: () => { }
            },
            theme: themes_1.themes,
            useTheme: true
        },
        {
            desc: 'should render normal Navbar with visible value is equal to false',
            props: {
                visible: false,
                userImage: 'user_image_url',
                onPressBurger: () => { },
            },
            theme: themes_1.themes,
            useTheme: true
        }
    ];
    (0, test_1.assertSnapshots)(_1.default, configs);
});
