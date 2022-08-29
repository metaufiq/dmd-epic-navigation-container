"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildContainer = exports.ContentContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ContentContainer = styled_components_1.default.div `
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
exports.ChildContainer = styled_components_1.default.div `
  padding: 0;
  flex-grow: 1;
  background-color: #fafafa;
  padding: 2rem;
`;
