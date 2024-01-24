import { MenuItemProps } from "src/types/menu.types";
import { MenuItem } from "../MenuItem/MenuItem";
import { useAppContext } from "../app.provider";
import styles from './Menu.module.css'
import { AppContextActionEnum } from "src/types/context.types";
import { useRouter } from "next/router";

export function Menu () {

    const {state: {menu: {menus, isMenuOpened}}, dispatch} = useAppContext();

    const {push} = useRouter()

    const onClickMenu = (menu:MenuItemProps) => {
        push(menu.to)
        dispatch && dispatch({
            type: AppContextActionEnum.PAGE_TITLE_AND_MENU,
            value: {
                pageTitle: menu.label,
                to: menu.to
            }
        })
    }

    return (
        isMenuOpened && <div className={styles.menu}>
            {
                menus.map(
                    (menuItem, index) => (
                        <MenuItem key={index} {...menuItem} onClick={onClickMenu} />
                    )
                )
            }
        </div>
    )
}