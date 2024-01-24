
import Icon from "@mdi/react";
import { useAppContext } from "../app.provider";
import styles from './Header.module.css'
import { mdiMenu } from "@mdi/js";
import { AppContextActionEnum } from "src/types/context.types";

export function Header() {
    const {state: {header, menu: {isMenuOpened}}, dispatch} = useAppContext()

    const toggleMenu = () => {
        dispatch && dispatch({
            type: AppContextActionEnum.TOGGLE_MENU,
            value: !isMenuOpened
        })
    }

    return (
        <header className={styles.header}>
            <div className={styles['title-bar']}>
                <h1 className="font-bold">Assustadus Medical Schedule</h1>
                <h3>{header.pageTitle}</h3>
            </div>
            <div className={styles['menu-icon-slot']} onClick={() => toggleMenu()}>
                <Icon path={mdiMenu}/>
            </div>
        </header>
    )
}