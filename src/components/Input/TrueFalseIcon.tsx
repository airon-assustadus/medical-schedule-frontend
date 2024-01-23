import { mdiCheck, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { TrueFalseIconProps } from "src/types/input.types";

export const TrueFalseIcon = (props:TrueFalseIconProps) => {

    const icon = 
        !props.value ?
        mdiClose :
        mdiCheck

    const color = 
        !props.value ?
        '#b33930' :
        '#63B77D'

    return (
        
        <div 
            className="w-5 h-5">
            <Icon 
                path={icon}
                size={1}
                color={color}/>
        </div>
    )

}