import { HeaderReducerState } from "./header.types";
import { MenuReducerState } from "./menu.types";

export type AppContext = {
    menu: MenuReducerState,
    header: HeaderReducerState
}

export enum AppContextActionEnum {
    PAGE_TITLE = 'PAGE_TITLE',
    UPDATE_MENU = 'UPDATE_MENU'
}

export type AppContextAction = {
    type: AppContextActionEnum.PAGE_TITLE,
    value: string
} | {
    type: AppContextActionEnum.UPDATE_MENU,
    value: string
}


export interface AppStore {
    state: AppContext,
    dispatch?: React.Dispatch<AppContextAction>
}