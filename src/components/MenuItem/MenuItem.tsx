import cn from 'clsx';
import { MenuItemProps } from "src/types/menu.types";

export function MenuItem(props: MenuItemProps) {
    return (
        <span onClick={() => props.onClick && props.onClick(props)}
            className={
                cn('p-3 pl-1 hover:bg-primary-dark hover:text-primary-dark-text',
                    {
                        'bg-primary text-primary-text': !props.isSelected
                    },
                    {
                        'bg-primary-dark text-primary-dark-text': props.isSelected
                    })
            }>
            {props.label}
        </span>
    )
}