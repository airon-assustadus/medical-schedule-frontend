import { useReducer } from "react"
import { MenuItem } from "../MenuItem/MenuItem";
import { useAppContext } from "../app.provider";

export function Menu () {

    const {state: {menu: {menus}}} = useAppContext();


    return (
        <div className="flex flex-col w-60 mr-1">
            {
                menus.map(
                    (menuItem, index) => (
                        <MenuItem key={index} {...menuItem} />
                    )
                )
            }
        </div>
    )
}