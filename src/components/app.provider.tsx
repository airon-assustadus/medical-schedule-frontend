import React, { createContext, useContext, useReducer } from "react";
import { defaultMenus } from "src/reducers/menu.reducer";
import { AppContext, AppContextAction, AppContextActionEnum, AppStore } from "src/types/context.types";

const defaultState: AppContext = {
    header: {
        pageTitle: 'Home'
    },
    menu: {
        menus: defaultMenus
    }
};

const appReducer = (state: AppContext, action: AppContextAction): AppContext => {
    switch (action.type) {
        case AppContextActionEnum.PAGE_TITLE: {
            const newState = { ...state };
            newState.header.pageTitle = action.value;
            return {
                ...newState
            };
        }
        case AppContextActionEnum.UPDATE_MENU: {
            const newState = { ...state };
            newState.header.pageTitle = action.value;
            return {
                ...newState
            };
        }
        default: {
            throw new Error('Action not found')
        }
    }
}


const appContext = createContext<AppStore>({state: defaultState})

export const useAppContext = () => useContext(appContext);

export const AppProvider = (props: any) => {
    const [state, dispatch] = useReducer(appReducer, defaultState);
    return <appContext.Provider value={{ state, dispatch }} children = { props.children } />;
}

