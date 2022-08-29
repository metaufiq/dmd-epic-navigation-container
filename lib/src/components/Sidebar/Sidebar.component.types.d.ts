import { NAVIGATION_MENU } from "../../constants";
export declare type MenuItemsProps = {
    active: boolean;
};
export declare type StyledComponentProps = {
    visible: boolean;
};
export declare type Props = StyledComponentProps & {
    onClose: VoidFunction;
    navigationMenu: typeof NAVIGATION_MENU;
};
