import { Component } from '@dmd/types';
import { Props, SetVisible } from './NavigationContainer.component.types';
/**
 * function to set sidebar visibility
 * @param {SetVisible} setVisible set sidebar visible or not
 * @param visible visible condition for sidebar
 * @returns {VoidFunction} execute setVisible
 */
export declare const _showSidebar: (setVisible: SetVisible, visible: boolean) => VoidFunction;
/**
 * Navigation Container components
 * @param {Props} props component props
 * @returns {ReactElement} Text Input components
 */
declare const NavigationContainer: Component<Props>;
export default NavigationContainer;
