import { IconProps } from "./icon.types"

export type PrimaryButtonProps = {
    onClick?: () => void,
    children?: any,
    className?: string,
    icon?: IconProps | string,
    hideIcon?: boolean,
    hideText?: boolean
}
