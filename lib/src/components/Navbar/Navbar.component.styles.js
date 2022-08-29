"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserContainer = exports.IconBurgerContainer = exports.UserName = exports.InlineText = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    display: flex;
    justify-content: ${({ visible }) => visible ? 'flex-end' : 'space-between'};
    align-items: center;
    height: 3.5rem;
    padding: 0 2rem;
    background-color: white;
    @media (min-width: 768px) {
      justify-content: flex-end;
    }
`;
exports.InlineText = styled_components_1.default.p `
  display: inline-block;
`;
exports.UserName = (0, styled_components_1.default)(exports.InlineText) `
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 0.3rem;
`;
exports.IconBurgerContainer = styled_components_1.default.a `
    display: ${({ visible }) => visible ? 'none' : 'flex'};
    justify-content: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    @media (min-width: 768px) {
      display: none;
    }
`;
exports.UserContainer = styled_components_1.default.div `
  align-items: center;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
`;
