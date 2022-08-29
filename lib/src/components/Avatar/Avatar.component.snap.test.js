"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@dmd/test");
const _1 = __importDefault(require("."));
describe('AvatarSnapshot', () => {
    const configs = [
        {
            desc: 'should render normal SeparatorLine',
            props: {
                src: 'imageurl'
            }
        }
    ];
    (0, test_1.assertSnapshots)(_1.default, configs);
});
