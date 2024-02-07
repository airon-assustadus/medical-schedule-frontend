import Icon from "@mdi/react";
import { PrimaryButtonProps } from "src/types/button.types";
import { IconProps } from "src/types/icon.types";


export const Button = (props: PrimaryButtonProps) => {

    const path = (props.icon as IconProps)?.path || (props.icon as string)
    const size = (props.icon as IconProps)?.size
    const color = (props.icon as IconProps)?.color

    const icon =
        !props.hideIcon
        && props.icon
        && <Icon path={path} className="button-icon"
            size={size || 1}
            color={color} /> || undefined
    const label = 
        !props.hideText 
        && props.children 
        && <span className="button-label">{props.children}</span>
        || undefined
    const aditionalClass = props.hideText ? 'px-1' : 'px-5'

    const onClick = (e:any) => {
        const event:Event = e as Event;
        event.preventDefault();
        event.stopPropagation();
        props.onClick && props.onClick()
    }

    return (
        <div
            onClick={(e) => onClick(e)}
            className={`
                button
                ${aditionalClass}
                ${props.className || ''}
                `.trim()}
        >{icon}{label}</div>
    )
}