import { PrimaryButtonProps } from "src/types/button.types";
import Icon from "@mdi/react";
import { fullTailwindConfig } from "../app.provider";
import { Button } from "./Button";


export const PrimaryDarkButton = (props: PrimaryButtonProps) => {
    const primaryColor = `${props.icon 
        && typeof props.icon == 'object' && props.icon?.color || fullTailwindConfig.theme?.colors && fullTailwindConfig.theme?.colors['primary-dark-text'] || ''}`
        const icon = (props.icon 
            && typeof props.icon == 'object' 
            && {
            ...props.icon,
            color: primaryColor
        }
         ) || (props.icon 
        && typeof props.icon == 'string' 
        && {
            path: props.icon,
            color: primaryColor
        }) || undefined


    return (
        <Button {...props} icon={icon} className="button-primary-dark"/>
    )
}