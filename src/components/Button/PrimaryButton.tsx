import { PrimaryButtonProps } from "src/types/button.types";
import { fullTailwindConfig } from "../app.provider";
import { Button } from "./Button";
import './Button.module.css';


export const PrimaryButton = (props: PrimaryButtonProps) => {
    const primaryColor = `${props.icon?.color || fullTailwindConfig.theme?.colors && fullTailwindConfig.theme?.colors['primary-dark'] || ''}`
    const icon = props.icon && {
        ...props.icon,
        color: primaryColor
    } || undefined
    return (
        <Button {...props} icon={icon} className="button-primary"/>
    )
}