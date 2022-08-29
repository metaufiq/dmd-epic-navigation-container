"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const themes_1 = require("../../configs/themes");
const test_1 = require("@dmd/test");
jest.mock('next/router', () => (Object.assign(Object.assign({}, jest.requireActual('next/router')), { useRouter: () => ({
        router: {
            route: '/'
        }
    }) })));
describe('NavigationContainerSnapshot', () => {
    const configs = [
        {
            desc: 'should render navigation container',
            useTheme: true,
            theme: themes_1.themes,
        }
    ];
    (0, test_1.assertSnapshots)(_1.default, configs);
});
