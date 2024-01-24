import { HeaderReducerState } from "./header.types";
import { MenuReducerState } from "./menu.types";

export type AppContext = {
    menu: MenuReducerState,
    header: HeaderReducerState,
    interface: InterfaceReducerState
}

export type InterfaceReducerState = {
    isMobile: boolean;
    width?: number;
    height?: number
}

export enum AppContextActionEnum {
    PAGE_TITLE_AND_MENU = 'PAGE_TITLE_AND_MENU',
    CHANGE_DEVICE_SIZE = 'CHANGE_DEVICE_SIZE',
    TOGGLE_MENU = 'TOGGLE_MENU'
}

export type AppContextAction = {
    type: AppContextActionEnum.PAGE_TITLE_AND_MENU,
    value: AppContextActionEnum_PAGE_TITLE_AND_MENU_value
} | {
    type: AppContextActionEnum.CHANGE_DEVICE_SIZE,
    value: AppContextActionEnum_CHANGE_DEVICE_SIZE_value
} | {
    type: AppContextActionEnum.TOGGLE_MENU,
    value: boolean
}

export type AppContextActionEnum_PAGE_TITLE_AND_MENU_value = {
    pageTitle: string
    to: string
}

export type AppContextActionEnum_CHANGE_DEVICE_SIZE_value = {
    width: number;
    height: number
}

export interface AppStore {
    state: AppContext,
    dispatch?: React.Dispatch<AppContextAction>
}

export const DEFAULT_MOBILE_WIDTH = 640;