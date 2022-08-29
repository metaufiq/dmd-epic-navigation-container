"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NavigationContainer_component_1 = require("./NavigationContainer.component");
describe('#_showSideBar', () => {
    it('should set visibility to false', () => {
        const setVisible = jest.fn();
        (0, NavigationContainer_component_1._showSidebar)(setVisible, false)();
        expect(setVisible).toBeCalledWith(false);
    });
    it('should set visibility to true', () => {
        const setVisible = jest.fn();
        (0, NavigationContainer_component_1._showSidebar)(setVisible, true)();
        expect(setVisible).toBeCalledWith(true);
    });
});
