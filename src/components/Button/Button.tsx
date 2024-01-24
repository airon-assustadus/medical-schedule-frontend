import { PrimaryButtonProps } from "src/types/button.types";
import Icon from "@mdi/react";
import { fullTailwindConfig } from "../app.provider";


export const Button = (props: PrimaryButtonProps) => {
    const icon =
        !props.hideIcon
        && props.icon
        && <Icon path={props.icon.path} className="button-icon"
            size={props.icon.size || 1}
            color={props.icon.color} /> || undefined
    const label = 
        !props.hideText 
        && props.children 
        && <span className="button-label">{props.children}</span>
        || undefined
    const aditionalClass = props.hideText ? 'px-1' : 'px-5'
    return (
        <div
            onClick={() => props.onClick()}
            className={`
                button
                ${aditionalClass}
                ${props.className || ''}
                `.trim()}
        >{icon}{label}</div>
    )
}