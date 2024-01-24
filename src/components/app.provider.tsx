import React, { createContext, useContext, useEffect, useReducer } from "react";
import { defaultMenus } from "src/reducers/menu.reducer";
import { AppContext, AppContextAction, AppContextActionEnum, AppStore, DEFAULT_MOBILE_WIDTH } from "src/types/context.types";

import tailwindConfig from 'tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const defaultState: AppContext = {
    header: {
        pageTitle: 'Home'
    },
    menu: {
        menus: defaultMenus,
        isMenuOpened: false
    },
    interface: {
        isMobile: false
    }
};

export const fullTailwindConfig = resolveConfig(tailwindConfig)

const appReducer = (state: AppContext, action: AppContextAction): AppContext => {
    switch (action.type) {
        case AppContextActionEnum.PAGE_TITLE_AND_MENU: {
            const newState = { ...state };
            console.log('changing the title', action.value)
            newState.header.pageTitle = action.value.pageTitle;

            newState.menu.menus = 
                newState.menu.menus.map(menu => {
                    return {
                        ...menu,
                        isSelected: menu.to === action.value.to
                    }
                })

            newState.menu.isMenuOpened = !newState.interface.isMobile

            return {
                ...newState
            };
        }
        case AppContextActionEnum.CHANGE_DEVICE_SIZE: {
            const newState = { ...state };
            newState.interface.isMobile = action.value.width < DEFAULT_MOBILE_WIDTH;

            newState.menu.isMenuOpened = !newState.interface.isMobile

            newState.interface.height = action.value.height;
            newState.interface.width = action.value.width;

            return {
                ...newState
            };
        }
        case AppContextActionEnum.TOGGLE_MENU: {
            const newState = { ...state };
            newState.menu.isMenuOpened = !newState.interface.isMobile || action.value;
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

    const updateDeviceSize = () => {

        dispatch({
            type: AppContextActionEnum.CHANGE_DEVICE_SIZE,
            value: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        })

    }

    useEffect(() => {
        // component is mounted and window is available
        updateDeviceSize();
        window.addEventListener('resize', updateDeviceSize);
        // unsubscribe from the event on component unmount
        return () => window.removeEventListener('resize', updateDeviceSize);
      }, []);

    return <appContext.Provider value={{ state, dispatch }} children = { props.children } />;
}

