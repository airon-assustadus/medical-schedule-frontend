

export type MenuItemProps = {
    label: string,
    to: string,
    isSelected: boolean,
    onClick?: (menuItem: MenuItemProps) => void
}

export type MenuReducerState = {
    menus: MenuItemProps[];
    isMenuOpened: boolean;
}