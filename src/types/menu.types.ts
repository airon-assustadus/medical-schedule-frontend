

export type MenuItemProps = {
    label: string,
    to: string,
    isSelected: boolean
}

export type MenuReducerState = {
    menus: MenuItemProps[];
}