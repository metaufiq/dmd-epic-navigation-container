"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Avatar = styled_components_1.default.img `
  border-radius: 50%;
  padding: 1rem;
  max-height: ${({ height }) => height !== null && height !== void 0 ? height : undefined};
  max-width: ${({ width }) => width !== null && width !== void 0 ? width : undefined};
`;
